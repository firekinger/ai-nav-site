import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import CategoryList from './CategoryList';
import { notFound } from 'next/navigation';

// 定义数据类型，以确保类型安全
interface Tool {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    isFree: boolean;
    categories: string[];
}

interface CategoryData {
    title: string;
    summary: string;
    tools: Tool[];
}

interface CategoryPageProps {
    params: {
        categorySlug: string;
    };
}

// 这个函数在构建时运行，用于生成所有分类页面的静态路由
export async function generateStaticParams() {
    const categoriesDirectory = path.join(process.cwd(), 'data/categories');
    const filenames = fs.readdirSync(categoriesDirectory);
    return filenames.map(filename => ({
        categorySlug: filename.replace(/\.json$/, ''),
    }));
}

// 这个函数在构建时或请求时运行，用于动态生成页面的元数据（SEO优化）
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    // 在这里显式解构 `params`，解决编译器的误判
    const { categorySlug } = params;
    try {
        const filePath = path.join(process.cwd(), 'data/categories', `${categorySlug}.json`);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const categoryData: CategoryData = JSON.parse(fileContent);
        return {
            title: `${categoryData.title} AI Tools`,
            description: categoryData.summary,
        };
    } catch (error) {
        console.error(error);
        return {
            title: 'Category Not Found',
            description: 'This category does not exist.',
        };
    }
}

// 这是一个服务器组件，它获取数据并传递给客户端组件
export default async function CategoryPage({ params }: CategoryPageProps) {
    // 在这里也显式解构 `params`
    const { categorySlug } = params;

    let categoryData: CategoryData;
    try {
        const filePath = path.join(process.cwd(), 'data/categories', `${categorySlug}.json`);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        categoryData = JSON.parse(fileContent);
    } catch (error) {
        console.error(error);
        return notFound();
    }

    const { title, summary, tools } = categoryData;
    const categoryName = categorySlug
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="container mx-auto px-4 py-8">
            {/* 导航面包屑 */}
            <nav className="flex items-center space-x-1 text-sm mb-6" aria-label="Breadcrumb">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                </Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                >
                    <path fillRule="evenodd" d="M7.21 14.79a.75.75 0 010-1.06L10.94 10 7.21 6.27a.75.75 0 011.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-900">{categoryName}</span>
            </nav>

            <h1 className="text-3xl font-bold mb-5 text-gray-800">
                {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 ">
                {summary}
            </p>
            
            {/* 渲染客户端组件并传递数据 */}
            <CategoryList tools={tools} />
        </div>
    );
}