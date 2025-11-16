import Link from 'next/link';
import Image from 'next/image';

import homeData from '../data/home.json';

// 定义数据类型，以确保类型安全
interface Tool {
    name: string;
    href: string;
    logo: string;
    description: string;
    title: string;
}

interface CategoryData {
    category: {
        title: string;
        more_link: string;
        tags: string[];
    };
    tools: Tool[];
}

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="mb-12 text-center py-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    {homeData.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {homeData.summary}
                </p>
                <div className="max-w-xl mx-auto flex hidden">
                    <input
                        type="text"
                        placeholder="Search AI Tools Websites..."
                        className="flex-1 rounded-l-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="rounded-r-lg bg-purple-600 px-6 text-white hover:bg-purple-700 font-medium">
                        Search
                    </button>
                </div>
            </section>
            
            <div className="space-y-12">
                {/* 遍历 home.json 中的每个类别 */}
                {(homeData.categories as CategoryData[]).map((categorySection, index) => (
                    <section key={index}>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {categorySection.category.title}
                            </h2>
                            <Link href={categorySection.category.more_link} className="text-purple-600 hover:text-purple-700 font-medium">
                                More
                            </Link>
                        </div>
                        {/* 分类标签 */}
                        <div className="flex flex-wrap gap-2">
                            {categorySection.category.tags?.map((category, index) => {
                                // 为每个类别生成一个 URL 友好的 slug
                                const slug = category.toLowerCase().replace(/\s+/g, '-').replace(/[.\s]/g, '');

                                if (index === 0) {
                                    // 第一个标签 (index === 0)
                                    return (
                                        <span
                                            key={index}
                                            className="inline-block mb-5 bg-purple-50 px-4 py-2 text-m rounded-lg text-purple-600 font-bold cursor-default"
                                        >
                                            {category}
                                        </span>
                                    );
                                }

                                // 其他标签
                                return (
                                    <Link
                                        key={index}
                                        href={`/category/${slug}`}
                                        className="inline-block mb-5 bg-gray-100 px-4 py-2 text-m rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                                    >
                                        {category}
                                    </Link>
                                );
                            })} 
                        </div>
                        
                        {/* 工具卡片网格 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {/* 遍历每个类别下的工具 */}
                            {categorySection.tools.map((tool, toolIndex) => (
                                <Link
                                    key={toolIndex}
                                    href={tool.href}
                                    className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="relative h-10 w-10 flex-shrink-0">
                                            <Image
                                                src={tool.logo}
                                                alt={`${tool.name} logo`}
                                                fill
                                                className="rounded-full object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                            {tool.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                        {tool.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}