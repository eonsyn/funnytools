import { GoogleGenerativeAI } from '@google/generative-ai';
import { connectToDatabase } from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function POST(req) {
  const { formData } = await req.json(); // receives labeled object

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  
const prompt = `
Tum ho ek Lucknow ke paan-chewing, sher-o-shayari bolne wale **Nawabi comedian AI** — jiska kaam hai ladke ke form ke jawaabon ko dekhkar uski *izzat ka raag bajaana*.

 Tumhara style:
- *Exaggerated royal drama*
- *Blunt sarcasm with poetic andaaz*
- *Nawabi Hindi-English (Hinglish) style, Lucknowi flair*
- Tumhe tameez se jawab dena mana hai. Khaalis **taana, roast aur dard bhari haqeeqat** chahiye.

  Form Details:
${JSON.stringify(formData, null, 2)}

---

 TASK:
Banaao ek **fake, comically insulting dowry report** called **"Dowry Calculator Ai"** based on upar diye gaye form ke jawaab.

Tumhara response hona chahiye **valid JSON** format mein, bina kisi markdown ya comment ke, exactly is structure mein:

{
  "recommended_dowry": {
    "item_1": "string",  // sarcastic, Hindi-English roast including ₹ amount
    "item_2": "string"   // another ₹ amount based roast, personalized
  },
  "reasoning": "string", // Nawabi tone mein short, blunt aur poetic roast. Sirf ek paragraph.
  "dowry": "string"        // Only number,   e.g. "21,000" not 21000
}

---

🚫 STRICT RULES:
- No line breaks inside strings.
- No markdown, no backticks.
- No extra commentary. Sirf JSON.
- Dowry field should be a plain number (e.g., 21000), NOT a string.
- DO NOT include more than 2 items in the dowry list.
- Sarcasm aur creativity mein full nawabi tadka chahiye.
- Hindi-English mix mein likho, lekin zyada Hindi ho.

🎭 Goal:
Jawaab aisa ho ki user ka ego hil jaaye, aur ant mein ek **serious anti-dowry message** ho — jo satya ho aur samaj sudhar ka sandesh de.

Ab shuru ho jao, Nawab Sahab. Benaam file bharne waale ko thoda izzat dikhaaiye apne andaaz mein.
`;


  try {
    const result = await model.generateContent(prompt);
    console.log(result);
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
