import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategorySidebar from '@/components/CategorySidebar'; // 导入客户端组件

// Data types for better type safety
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

// Set metadata for the page
export const metadata: Metadata = {
    title: 'AI Tools by Category',
};

// Async function to get category data from JSON file
async function getCategoriesData(): Promise<CategoriesData> {
    const filePath = path.join(process.cwd(), 'data', 'category.json');
    try {
        const fileContents = await fs.promises.readFile(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Failed to read category data:', error);
        notFound();
    }
}

export default async function CategoryPage() {
    const categories = await getCategoriesData();
    const totalTools = Object.values(categories).reduce((acc, cat) => acc + cat.subtotal, 0);

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* 渲染客户端组件并传递数据 */}
                <CategorySidebar categories={categories} />

                {/* Right Content Area */}
                <main className="flex-1">
                    <div className="border-b-2 border-gray-200 pb-8 mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Explore AI Tools by Category</h1>
                        <p className="text-lg text-gray-600">
                            Browse over <strong className="font-semibold text-purple-600">{totalTools}</strong> AI categories to find websites, platforms, and solutions that match your goals.
                        </p>
                    </div>

                    {Object.keys(categories).map((slug) => {
                        const group = categories[slug];
                        return (
                            <section key={slug} id={slug} className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2">{group.name}</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                    {group.children.map((child) => (
                                        <div key={child.slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                            <Link href={`/category/${child.slug}`} className="block text-gray-800">
                                                <h3 className="text-l font-semibold mb-1 flex items-center">
                                                    {child.name}
                                                    <span className="text-sm font-medium ml-auto px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{child.subtotal}</span>
                                                </h3>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </main>
            </div>
        </div>
    );
}