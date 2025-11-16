'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

interface CategorySidebarProps {
    categories: {
        [key: string]: MainCategory;
    };
}

export default function CategorySidebar({ categories }: CategorySidebarProps) {
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        // Set initial hash
        setActiveHash(window.location.hash);
        
        // Listen for hash changes
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleLinkClick = (hash: string) => {
        // Immediately update the state to reflect the click
        setActiveHash(hash);
    };

    return (
        <aside className="lg:w-64">
            <nav className="sticky top-20">
                <h3 className="text-xl font-bold text-gray-800 mb-4 ">Categories</h3>
                <ul>
                    {Object.keys(categories).map((slug) => {
                        const linkHash = `#${slug}`;
                        const isActive = activeHash === linkHash;
                        
                        return (
                            <li key={slug}>
                                <Link
                                    href={linkHash}
                                    onClick={() => handleLinkClick(linkHash)}
                                    className={`block py-2 px-4 rounded-md transition-colors ${
                                        isActive
                                            ? 'bg-purple-50 font-bold text-purple-600'
                                            : 'text-gray-700 hover:bg-purple-50 hover:font-bold hover:text-purple-600'
                                    }`}
                                >
                                    {categories[slug].name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}