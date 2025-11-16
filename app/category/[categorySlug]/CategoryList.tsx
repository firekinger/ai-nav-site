'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Tool {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    isFree: boolean;
    categories: string[];
}

interface CategoryListProps {
    tools: Tool[];
}

export default function CategoryList({ tools }: CategoryListProps) {
    const [visibleCount, setVisibleCount] = useState(24);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 24);
    };

    return (
        <div className="space-y-8">
            {/* 工具卡片网格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tools.slice(0, visibleCount).map((tool, index) => (
                    <Link
                        key={index}
                        href={`/tool/${tool.slug}`}
                        className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="relative h-10 w-10 flex-shrink-0">
                                <Image
                                    src={tool.icon}
                                    alt={`${tool.name} icon`}
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

            {/* 查看更多按钮 */}
            {visibleCount < tools.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={showMore}
                        className="rounded-md bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 font-medium transition-colors"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
}