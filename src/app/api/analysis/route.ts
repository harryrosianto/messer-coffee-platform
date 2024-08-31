import { NextResponse } from 'next/server';
import { writeFileSync } from 'fs';
import { join, resolve } from 'path';


export async function POST(req: Request) {
  try {
    const data = await req.json();

    const filePath = resolve(process.cwd(), 'public', 'analysis_result.json');

    writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data.' }, { status: 500 });
  }
}
