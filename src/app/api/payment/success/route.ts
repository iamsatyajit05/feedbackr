import db from '@/lib/db';
import { orderTable } from '@/lib/db/schema';
import { error } from 'console';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestBody = await req.json();
    const paymentDetails = requestBody.data.attributes;

    const newPaymentRecord = {
      id: paymentDetails.identifier,
      userEmail: paymentDetails.user_email,
      status: paymentDetails.status,
      total: paymentDetails.total,
      currency: paymentDetails.currency,
      createdAt: new Date(paymentDetails.created_at),
      updatedAt: new Date(paymentDetails.updated_at),
      orderId: paymentDetails.order_number,
    };

    await db.insert(orderTable).values(newPaymentRecord);

    return NextResponse.json(
      { message: 'Subscription successfully created' },
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } },
    );
  } catch (error: any) {
    console.log('Error saving subscription', error);

    return NextResponse.json({ message: error?.message || 'Error saving subscription' }, { status: 500 });
  }
}
