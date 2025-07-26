export async function GET() {
  return new Response(
    JSON.stringify({
      dbUrl: process.env.DRIZZLE_DATABASE_URL || '❌ MISSING',
    }),
    { status: 200 }
  );
}
