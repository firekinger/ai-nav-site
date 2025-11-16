import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-300 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-[182px]">
                        <Image src="/ainavdir.png" alt="AINavDir Logo" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </Link>

                {/* Navigation and Theme Switcher */}
                <nav className="flex items-center gap-4">
                    <Link href="/category" className="text-sm text-purple-600 hover:text-gray-900">
                        Category
                    </Link>
                    <Link href="/submit" className="rounded-md bg-purple-600 px-3 py-2 text-sm font-medium text-white hover:bg-purple-700">
                        Submit
                    </Link>
                </nav>
            </div>
        </header>
    );
}