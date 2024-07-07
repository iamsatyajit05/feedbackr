import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

const db = drizzle(sql, { schema }) as NodePgDatabase<typeof schema>;
export default db;
