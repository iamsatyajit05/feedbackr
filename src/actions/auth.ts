'use server';
import { google } from '@/lib/auth';
import db from '@/lib/db';
import { userTable } from '@/lib/db/schema';
import { lucia, validateRequest } from '@/lib/lucia';
import { generateCodeVerifier, generateState } from 'arctic';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';

export async function getUser() {
  try {
    const valid = await validateRequest();

    if (!valid.user) {
      return {
        error: 'Unauthorized',
      };
    }

    const user = await db.select().from(userTable).where(eq(userTable.id, valid.user.id));

    return {
      success: true,
      data: user,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
}

export async function signOut() {
  try {
    const { session } = await validateRequest();

    if (!session) {
      return {
        error: 'Unauthorized',
      };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
}

export async function createGoogleAuthorizeUrl() {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    cookies().set('state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    cookies().set('codeVerifier', codeVerifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    const authorizationUrl = await google.createAuthorizationURL(state, codeVerifier, {
      scopes: ['email', 'profile'],
    });

    return {
      success: true,
      data: authorizationUrl.toString(),
    };
  } catch (error: any) {
    return {
      error: error?.message || 'An error occurred',
    };
  }
}