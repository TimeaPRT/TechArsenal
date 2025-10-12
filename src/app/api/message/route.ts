import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text } = await req.json();

  // Simulăm un proces simplu în backend
  const responseText = `Serverul a primit: "${text}" 👋`;

  return NextResponse.json({ message: responseText });
}
