'use client';

import { useState } from 'react';

export default function SubmitForm() {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Tool Name is required.';
        if (!formData.url) newErrors.url = 'Website URL is required.';
        if (!formData.description) newErrors.description = 'Description is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', url: '', description: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            console.error('Failed to submit form:', err);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full md:max-w-3xl lg:max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Tool Information</h2>
            
            {submitStatus === 'success' && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded-md">
                    Thank you! Your submission has been received.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md">
                    Oops! There was an error. Please check the form and try again.
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tool Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Google Gemini"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 px-4 py-2"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Website URL
                </label>
                <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 px-4 py-2"
                />
                {errors.url && <p className="mt-1 text-sm text-red-600">{errors.url}</p>}
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Short Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="A brief, one-sentence description of the tool."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 px-4 py-2"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>
            
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Tool'}
                </button>
            </div>
        </form>
    );
}