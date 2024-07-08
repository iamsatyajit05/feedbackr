'use server';
import db from '@/lib/db';
import { projectTable, userTable } from '@/lib/db/schema';
import { validateRequest } from '@/lib/lucia';
import { eq } from 'drizzle-orm';
import { Project } from '@/lib/interface';
import { generateRandomId } from '@/lib/utils';
import { getUser } from './auth';

export async function createProject(projectName: string) {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return {
        success: false,
        error: 'Unauthorized',
      };
    }

    const userData = await getUser();

    if (userData.data && userData.data?.plan === 'free') {
      throw new Error('Upgrade to pro to create more projects');
    }

    await db.insert(projectTable).values({
      id: generateRandomId(),
      userId: user.id,
      name: projectName,
    });

    return {
      success: true,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getProject(projectId: string): Promise<{ success: boolean; data?: Project; error?: string }> {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return {
        success: false,
        error: 'Unauthorized',
      };
    }

    const project = await db.select().from(projectTable).where(eq(projectTable.id, projectId));

    return {
      success: true,
      data: project[0],
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || 'Project not found',
    };
  }
}

export async function getProjects(): Promise<{ success: boolean; data: Project[] | []; error?: string }> {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return {
        success: false,
        data: [],
        error: 'Unauthorized',
      };
    }

    const projects = await db.select().from(projectTable).where(eq(projectTable.userId, user.id));

    return {
      success: true,
      data: projects,
    };
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error?.message,
    };
  }
}

export async function getProjectOwnerEmail(
  projectId: string,
): Promise<{ ownerEmail: string; projectName: string } | null> {
  try {
    const project = await db.select().from(projectTable).where(eq(projectTable.id, projectId)).execute();
    const user = await db.select().from(userTable).where(eq(userTable.id, project[0]?.userId)).execute();

    return { ownerEmail: user[0]?.email!, projectName: project[0]?.name };
  } catch (error) {
    console.error('Error fetching project owner email:', error);
    return null;
  }
}
