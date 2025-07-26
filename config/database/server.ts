'use server';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const URL = process.env.DRIZZLE_DATABASE_URL;

if (!URL) {
  throw new Error('⛔ DRIZZLE_DATABASE_URL is missing from environment');
}

const sql = neon(URL);
export const db = drizzle(sql, { schema });
