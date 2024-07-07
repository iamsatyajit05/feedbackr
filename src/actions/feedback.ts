import db from '@/lib/db';
import { feedbackCounterTable, feedbackTable } from '@/lib/db/schema';
import { FeedbackRequest } from '@/lib/interface';
import { validateRequest } from '@/lib/lucia';
import { desc, eq } from 'drizzle-orm';

export async function createFeedback(feedback: FeedbackRequest) {
  try {
    const counter = await db.select().from(feedbackCounterTable);

    await db.insert(feedbackTable).values({
      id: counter[0].count + 1,
      category: feedback.category,
      content: feedback.content,
      projectId: feedback.projectId,
      userId: feedback.userId ? feedback.userId : 'Anonymous',
      origin: feedback.origin ? feedback.origin : 'Unknown origin',
    });

    await db
      .update(feedbackCounterTable)
      .set({ count: counter[0].count + 1 })
      .where(eq(feedbackCounterTable.count, counter[0].count));

    return {
      success: true,
    };
  } catch (error: any) {
    console.log(error);

    return {
      success: false,
      error: error?.message,
    };
  }
}

export async function getFeedbacks(projectId: string) {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return {
        success: false,
        data: [],
        error: 'Unauthorized',
      };
    }

    const feedbacks = await db
      .select()
      .from(feedbackTable)
      .where(eq(feedbackTable.projectId, projectId))
      .orderBy(desc(feedbackTable.createdAt));

    return {
      success: true,
      data: feedbacks,
    };
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error?.message,
    };
  }
}
