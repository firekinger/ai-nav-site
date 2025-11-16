import type { Metadata } from 'next';
import Link from 'next/link';
import SubmitForm from './SubmitForm';

export const metadata: Metadata = {
    title: 'Submit an AI Tool',
    description: 'Submit an AI tool to our directory and help the community discover new and innovative AI solutions.'
};

export default function SubmitPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 min-h-screen">
            {/* 表单区域 */}
            <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center leading-tight">
                    Submit a New AI Tool
                </h1>
                <SubmitForm />
            </div>

            {/* 新增内容模块 */}
            <div className="mt-20">
                {/* How It Works 部分 */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                        We&apos;ve made the submission process as simple as possible. Follow these three steps.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="text-4xl font-extrabold text-purple-600 mb-2 block">1</span>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Fill Out the Form</h3>
                            <p className="text-gray-600 dark:text-gray-400">Provide the basic details about the tool you want to submit.</p>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="text-4xl font-extrabold text-purple-600 mb-2 block">2</span>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Our Team Reviews</h3>
                            <p className="text-gray-600 dark:text-gray-400">We carefully review each submission to ensure quality and relevance.</p>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="text-4xl font-extrabold text-purple-600 mb-2 block">3</span>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Get Published</h3>
                            <p className="text-gray-600 dark:text-gray-400">If approved, your tool will be added to our directory for others to discover.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ 部分 */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                        Got a question? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-6 text-left">
                        {/* FAQ Item 1 */}
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Is there a fee to submit a tool?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                No, there is no fee. Submitting your tool to our directory is completely free.
                            </p>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                How long does the review process take?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our team typically reviews submissions within 3-5 business days. You will be notified once your submission is approved or if we need more information.
                            </p>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                What criteria do you use for approval?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We look for tools that are innovative, functional, and add value to our community. We also check for clear pricing, good user experience, and a professional website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 联系方式 */}
            <div className="mt-16 text-center text-gray-500 dark:text-gray-400">
                <p className="text-lg">
                    Got a question that&apos;s not listed above?
                </p>
                <p className="text-lg mt-2">
                    Feel free to <Link href="mailto:firekinger@gmail.com" className="text-purple-600 hover:underline">contact us</Link>.
                </p>
            </div>
        </div>
    );
}