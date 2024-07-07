import { createFeedback } from '@/actions/feedback';
import { FeedbackRequest, ValidationError } from '@/lib/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { content, projectId, category, userId }: FeedbackRequest = await req.json();

    const errors: ValidationError = {};

    if (!content || content.trim() === '') {
      errors.content = 'Feedback is mandatory and cannot be empty';
    }
    if (!projectId) {
      errors.projectId = 'Project ID is mandatory';
    }
    if (!category || !['suggestion', 'issue', 'other'].includes(category)) {
      errors.category = 'Category is mandatory and must be one of the following values: suggestion, issue, other';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const originUrl = req.headers.get('referer') || undefined;

    const { success } = await createFeedback({ content, projectId, category, userId, origin: originUrl });

    if (success) {
      return NextResponse.json({ success: true, message: 'Feedback saved successfully' }, { status: 201 });
    } else {
        throw new Error('Failed to save feedback');
    }
  } catch (error: any) {    
    return NextResponse.json({ success: false, error: error?.message || 'Something went wrong' }, { status: 400 });
  }
}
