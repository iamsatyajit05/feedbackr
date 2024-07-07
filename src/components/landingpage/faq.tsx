import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
    {
        question: "What frameworks does Feedbackr support?",
        answer: "Feedbackr currently supports React and Tailwind CSS. Support for additional frameworks will be added in future updates."
    },
    {
        question: "Is Feedbackr subscription-based?",
        answer: "No, Feedbackr operates on a one-time payment model. Once purchased, you have lifetime access to the chosen plan."
    },
    {
        question: "What does '25 feedbacks' mean in the Free Forever Plan?",
        answer: "The Free Forever Plan allows up to 25 feedback submissions per month. Upgrade to the Pro Plan for unlimited submissions."
    },
    {
        question: "Will I receive email notifications for new feedback submissions?",
        answer: "Soon, currently it's in development phase."
    },
    {
        question: "Can I customize the feedback widget's appearance?",
        answer: "Absolutely! You can fully customize the feedback widget to match your website's design and branding."
    },
    {
        question: "Are there different types of feedback widgets available?",
        answer: "Currently, Feedbackr offers one type of feedback widget. More widget variants and examples are in development to offer a variety of options."
    },
    {
        question: "How do I upgrade to the Pro Plan for unlimited projects and feedbacks?",
        answer: "You can upgrade to the Pro Plan directly from your account dashboard. It offers unlimited projects and feedback submissions."
    },
    {
        question: "Can I use Feedbackr for multiple projects under the Free Forever Plan?",
        answer: "The Free Forever Plan supports one project. For unlimited projects and feedback submissions, consider upgrading to the Pro Plan."
    },
    {
        question: "How often are new features and updates released for Feedbackr?",
        answer: "We regularly update Feedbackr based on user feedback."
    },
    {
        question: "Why doesn't Feedbackr have a dark mode?",
        answer: "We don't have dark mode because it attracts the darkness! 👹"
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-24 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
            <div className="md:sticky top-5 h-fit flex-1">
                <p className="text-4xl tracking-tight font-extrabold py-4">Frequently Asked Questions</p>
            </div>
            <div className="flex-1">
                <Accordion className="text-base" type="single" collapsible>
                    {
                        faq.map((item, index) => (
                            <AccordionItem key={index} value={`faq-${index}`}>
                                <AccordionTrigger className="text-left gap-2">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    )
}