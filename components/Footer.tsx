import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t border-gray-300 bg-white py-8">
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <Link href="/" className="flex justify-center">
                    <div className="relative h-12 w-[182px] mb-4">
                        <Image src="/logo.svg" alt="AINavDir Logo" fill className="object-contain" />
                    </div>
                </Link>
                <div className="mb-4 text-gray-400">
                    AINavDir, The Best AI Websites & AI Navigation & AI Tools Directory
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} AINavDir.com All rights reserved.
                </p>
            </div>
        </footer>
    );
}