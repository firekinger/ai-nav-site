import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 定义数据类型
interface Subcategory {
  name: string;
  slug: string;
  subtotal: number;
}

interface MainCategory {
  name: string;
  subtotal: number;
  children: Subcategory[];
}

interface CategoriesData {
  [key: string]: MainCategory;
}

// GET 请求处理函数
export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'category.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data: CategoriesData = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to read category data:', error);
    return NextResponse.json(
      { error: 'Failed to load category data.' },
      { status: 500 }
    );
  }
}