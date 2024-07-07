import { CheckIcon, XIcon } from "lucide-react";

const withoutFeedbackr = [
    'Relying on bording email or social media',
    'Limited options to customize feedback forms',
    'Often tied to expensive monthly subscriptions',
    'Lack of organized feedback data',
    'Lose track of past feedback',
]

const withFeedbackr = [
    'Customize feedback forms to match your brand',
    'Centralized platform for all user feedback',
    'Save time and resources',
    'Gain actionable insights from organized data',
    'Easily track and manage feedback history',
]

export default function Comparison() {
    return (
        <section className="max-w-5xl mx-auto px-8 py-16 md:py-32">
            <h2 className="text-center font-extrabold text-4xl md:text-5xl tracking-tight mb-12 md:mb-20">
                Struggling to Gather User <br className="hidden sm:block" /> Feedback for Your Product?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
                <div className="bg-rose-100/75 text-rose-700 p-8 md:p-12 rounded-lg w-full max-w-md ">
                    <h3 className="font-bold text-lg mb-4">
                        Without Feedbackr
                    </h3>
                    <ul className="space-y-2">
                        {
                            withoutFeedbackr.map((item, index) => (
                                <li key={index} className="flex gap-2 items-center">
                                    <XIcon size={16} />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="bg-emerald-100/70 text-emerald-700 p-8 md:p-12 rounded-lg w-full max-w-md">
                    <h3 className="font-bold text-lg mb-4">With Feedbackr</h3>
                    <ul className="space-y-2">
                        {
                            withFeedbackr.map((item, index) => (
                                <li key={index} className="flex gap-2 items-center">
                                    <CheckIcon size={16} />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}