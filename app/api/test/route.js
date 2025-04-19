import { connectToDatabase } from '@/lib/mongodb';
import Test from '@/models/Test';

export async function POST(req) {
  const { name } = await req.json();

  try {
    await connectToDatabase();
    const doc = await Test.create({ name });

    return new Response(JSON.stringify(doc), { status: 200 });
  } catch (err) {
    console.error('MongoDB Error:', err);
    return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const docs = await Test.find().sort({ createdAt: -1 }).limit(10);

    return new Response(JSON.stringify(docs), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 });
  }
}
