import Link from "next/link";
import { Button } from "../ui/button";
import Feedbackr from '../feedbackr'
import { CheckIcon } from "lucide-react";

export default function Hero() {
    return (
        <main className="z-10 max-w-5xl m-auto flex flex-col items-center justify-center gap-10 lg:gap-12 px-8 pt-12 pb-24 lg:py-32 text-center text-slate-800">
            <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight md:-mb-4">
                Turn User Feedback <br /> into <span className="border-b-6 md:border-b-8 border-dashed border-primary/50">Product Success</span>
            </h1>
            <p className="text-foreground text-lg leading-relaxed max-w-md mx-auto">
                Easily gather, manage, and act on user suggestions to enhance your product.
            </p>
            <ul className="text-foreground leading-relaxed space-y-1">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckIcon size={16} />
                    1-minute setup
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckIcon size={16} />
                    100% customizable
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckIcon size={16} />
                    Pay once, Use forever
                </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-2">
                <Button size={'lg'} asChild>
                    <Link href='#pricing'>Get Feedbackr</Link>
                </Button>
                <Feedbackr projectId="gqgpi9se7z">
                    <Button size={'lg'} variant={'secondary'} asChild>
                        <p>Feedback Widget</p>
                    </Button>
                </Feedbackr>
            </div>
        </main>
    )
}