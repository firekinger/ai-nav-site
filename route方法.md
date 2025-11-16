##方法1
import { NextResponse } from 'next/server';
import toolsData from '../../../data/tools.json';

export async function GET() {
  return NextResponse.json(toolsData);
}

##方法2
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


| 特性       | 方法1 (import)                          | 方法2 (fs.readFileSync)              | 最佳选择                                   |
|------------|-----------------------------------------|--------------------------------------|--------------------------------------------|
| 安全性     | 潜在风险（在边缘运行时可能暴露文件路径） | 仅在服务器端运行，非常安全           | 方法2                                      |
| 性能       | 构建时打包，运行时无文件I/O，速度快     | 每次请求都读文件，有I/O开销，速度略慢 | 方法1 (对于静态数据) 或 方法2 (对于需要运行时更新的数据) |
| 动态性     | 每次数据更新都需要重新构建             | 运行时读取最新文件，无需重新构建     | 方法2                                      |

