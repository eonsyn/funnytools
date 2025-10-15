import { connectToDatabase } from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function GET(req) {
  await connectToDatabase();

  try {
    // Extract "page" from URL query — default = 1
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = 15; // items per page
    const skip = (page - 1) * limit;

    // Fetch with pagination + latest first
    const submissions = await Submission.find({},{ generatedResponse: 1, _id: 1,'formData.name':1 })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit).lean();

    // Get total count for frontend pagination UI
    const total = await Submission.countDocuments();

    // Return paginated response
    return new Response(
      JSON.stringify({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        data: submissions,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error fetching submissions:', err);
    return new Response(
      JSON.stringify({ error: 'Error fetching submissions' }),
      { status: 500 }
    );
  }
}
