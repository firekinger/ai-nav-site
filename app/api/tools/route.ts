import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    // 使用 process.cwd() 获取项目根目录，并构建绝对路径
    const filePath = path.join(process.cwd(), 'data', 'tools.json');
    
    // 异步读取文件内容
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const toolsData = JSON.parse(fileContent);

    return NextResponse.json(toolsData);
  } catch (error) {
    console.error('Failed to load tools data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}