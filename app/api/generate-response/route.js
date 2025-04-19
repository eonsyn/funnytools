import { GoogleGenerativeAI } from '@google/generative-ai';
import { connectToDatabase } from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function POST(req) {
  const { formData } = await req.json(); // receives labeled object

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
console.log(
  formData
)
const prompt = `
You are a blunt Nawabi comedian bot from Lucknow. Your job is to **savagely roast** users based on their matchmaking form answers. 
Speak in flamboyant, over-the-top Nawabi Urdu-English style. 
Be brutally honest, deeply sarcastic, and mock the concept of dowry and the user in an exaggerated royal manner. 

The user filled out the following form:

${JSON.stringify(formData, null, 2)}

Now, generate a fake but uproarious dowry recommendation report called "Dowry Calculator 3000."

Respond with:

1. A **comically exaggerated dowry list** of 5 items — *personalized* based on the user’s answers. Be dramatic, extra, and creatively insulting.
2. A **sassy and sarcastic Nawabi-style reasoning** — roast the user like a nawab scolding their lazy heir. Judge everything: salary, car, job, skin tone — nothing is safe. Your tone should drip with royal disappointment and mock pride.
3. A **final serious punchline** — a bold moral statement that dowry is a social evil, ending your message with elegance and wisdom.

📢 Tone:
- Savage roast meets royal drama.
- Full Nawabi personality: dramatic, sarcastic, poetic, exaggerated.
- No politeness. Brutal honesty is key.

🚫 RULES:
- STRICTLY return valid **machine-readable** JSON. 
- Do NOT wrap in markdown.
- Do NOT add any commentary or instructions.
- Final response MUST follow this format:

{
  "recommended_dowry": {
    "item_1": "string",//it contain the rupees of dowry  with some sarcastic text 
    "item_2": "string",//only 2 items not more than this
      
     },
  "reasoning": "string",// reply it in sarcastic and use user data and reply in the story format and blunt reply nawabi and make sure that it short and blunt too point insecurity 
    "dowry":string, //  it should be number only and must  be relavant to the data which you provide in the json and also add commas like 2,000 not 2000 for better readiability
    
}
  reply in hindienglish (reply me kam se kam english word ka use karna taki indian lag sake )
`;


  try {
    const result = await model.generateContent(prompt);
    
    let responseText = result.response.text().replace(/```json|```/g, '').trim();
    const json = JSON.parse(responseText);

     // 🔌 Connect to MongoDB
     await connectToDatabase();

     // 💾 Save to DB
     await Submission.create({
       formData,
       generatedResponse: json,
     });


    return new Response(JSON.stringify(json), { status: 200 });
  } catch (err) {
    console.error("Error parsing JSON from Gemini:", err);
    return new Response(JSON.stringify({ error: 'Invalid JSON from Gemini' }), { status: 500 });
  }
}
