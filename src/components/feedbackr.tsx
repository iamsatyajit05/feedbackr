'use client';
import React, { useState, useRef, useEffect } from 'react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div ref={dialogRef} className="bg-white rounded-lg max-w-sm w-full">
                {children}
            </div>
        </div>
    );
};

interface FeedbackFormData {
    content: string;
    category: 'suggestion' | 'issue' | 'other';
    projectId: string;
    userId?: string;
}

interface FeedbackComponentProps {
    children: React.ReactNode;
    projectId: string;
    userId?: string;
}

const FeedbackComponent: React.FC<FeedbackComponentProps> = ({ children, projectId, userId }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<FeedbackFormData>({
        content: '',
        category: 'issue',
        projectId: projectId,
        userId: userId
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    const handleClose = (): void => {
        setIsOpen(false);
        setFormData({ content: '', category: 'issue', projectId: projectId, userId: userId });
        setSubmitError(null);
        setSubmitSuccess(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                setTimeout(handleClose, 2000); // Close the dialog after 2 seconds on success
            } else {
                setSubmitError(data.error || 'Failed to submit feedback');
            }
        } catch (error) {
            setSubmitError('An error occurred while submitting feedback');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                {children}
            </button>

            <Dialog isOpen={isOpen} onClose={handleClose}>
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-2 text-left">Give us your feedback</h2>
                    <p className="text-sm text-gray-600 mb-4 text-left">We'd love to hear your thoughts on how we can improve.</p>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className='accent-black flex justify-between gap-2'>
                            {['issue', 'suggestion', 'other'].map((category) => (
                                <div key={category} className='flex items-center gap-2'>
                                    <input
                                        type="radio"
                                        name="category"
                                        id={category}
                                        value={category}
                                        checked={formData.category === category}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder="Tell us what you think"
                            className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/90"
                            required
                        />
                        {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
                        {submitSuccess && <p className="text-green-500 text-sm">Feedback submitted successfully!</p>}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>
                    </form>
                </div>
            </Dialog>
        </>
    );
};

export default FeedbackComponent;