'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 定义数据类型，与服务端组件中的保持一致
interface Faq {
    question: string;
    answer: string;
}

interface ToolData {
    name: string;
    description: string;
    longDescription: string;
    url: string;
    screenshot: string;
    category: string;
    categorySlug: string;
    slug: string;
    categories: string;
    features: string[];
    faqs: Faq[];
}

interface FaqsPageProps {
    toolData: ToolData;
}

// 这是一个客户端组件，用于处理交互逻辑和渲染 UI
export default function FaqsPage({ toolData }: FaqsPageProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                {/* 类别链接 */}
                <Link
                    href={`/category/${toolData.categorySlug}`}
                    className="text-gray-600 hover:text-gray-900"
                >
                    {toolData.category}
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
                {/* 当前页面名称 */}
                <span className="font-medium text-gray-900">{toolData.name}</span>
            </nav>

            {/* 主要内容区域，左右双列布局 */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
                {/* 左侧栏 */}
                <div className="flex-1">
                    <div className="mb-4 flex items-center gap-4">
                        <h1 className="text-3xl font-bold text-gray-900">{toolData.name}</h1>
                        {toolData.url && (
                            <a
                                href={toolData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 w-fit"
                            >
                                Open site
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H20.25V12.75" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.5L4.5 22.5" />
                                </svg>
                            </a>
                        )}
                    </div>
                    
                    {/* 简介和日期，参考设计图 */}
                    <div className="mb-4 space-y-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="font-medium whitespace-nowrap">Introduction:</span>
                            <span className="flex-1">{toolData.description}</span>
                        </div>
                        {/* 你的JSON文件中没有"Added on"日期，如果需要，请手动添加此字段 */}
                        {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Added on:</span>
                            <span>Aug 5, 2025</span>
                        </div> */}
                    </div>

                    {/* 分类标签 */}
                    <div className="flex flex-wrap gap-2">
                        {toolData.categories && typeof toolData.categories === 'string'
                        ? toolData.categories.split(',').map((category, index) => (
                            <Link
                              key={index}
                              href={`/category/${category.trim().toLowerCase().replace(/\s+/g, '-').replace(/[.\s]/g, '')}`}
                            >
                              {category.trim()}
                            </Link>
                          ))
                        : null}
                    </div>
                </div>

                {/* 右侧栏 - 图片预览 */}
                {toolData.screenshot && (
                    <div className="lg:w-[32rem]">
                        <a href={toolData.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md">
                            <Image
                                src={toolData.screenshot}
                                alt={`${toolData.name} screenshot`}
                                width={600}
                                height={450}
                                className="h-auto w-full object-cover"
                            />
                        </a>
                    </div>
                )}
            </div>

            {/* 产品信息 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is {toolData.name}?</h2>
                <p className="text-gray-600 leading-relaxed">{toolData.longDescription}</p>
            </section>

            {/* 核心功能 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{toolData.name}&apos;s Core Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {toolData.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
            
            {/* 常见问题 */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {toolData.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <button
                                className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {expandedIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}