import Link from "next/link";
import { Button } from "../ui/button";

export default function LastCTA() {
    return (
        <section className="py-24 md:py-32 space-y-24 md:space-y-32 px-8">
            <div className="flex flex-col items-center max-w-3xl mx-auto rounded-3xl bg-gray-50 p-12">
                <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8 md:mb-12 text-center">
                    Simplify Feedback Collection
                </h2>
                <p className="text-lg text-base-content-secondary mb-12 md:mb-16 text-center">
                    Effortless Setup, Enhanced Insights, and Focus on Innovation.
                </p>
                <Button size={'lg'} asChild>
                    <Link href='#pricing'>Get Started Today</Link>
                </Button>
            </div>
        </section >
    )
}