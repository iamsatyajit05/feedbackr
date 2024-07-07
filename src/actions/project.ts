'use server';
import db from '@/lib/db';
import { projectTable } from '@/lib/db/schema';
import { validateRequest } from '@/lib/lucia';
import { eq } from 'drizzle-orm';
import { Project } from '@/lib/interface';
import { generateRandomId } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function createProject(projectName: string) {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return {
        success: false,
        error: 'Unauthorized',
      };
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
    return {
      success: false,
      error: error?.message,
    };
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
