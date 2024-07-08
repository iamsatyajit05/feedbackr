import Link from "next/link";
import { Button } from "../ui/button";
import { CheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-8 max-w-5xl mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="max-w-xl font-extrabold text-3xl lg:text-5xl tracking-tight mb-8 mx-auto">
                    Collect and Manage Feedback Effortlessly
                </h2>
                <div className="text-base-content-secondary max-w-md mx-auto">
                    Effortless Setup, Enhanced Insights, and Focus on Growth
                </div>
            </div>
            <div className="flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                <div className="w-full max-w-sm flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg border">
                    <div>
                        <p className="text-4xl tracking-tight font-extrabold text-slate-800">
                            Free
                        </p>
                    </div>
                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                        <li className="flex items-center gap-2">
                            <CheckIcon size={16} />
                            <span>1 Project</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon size={16} />
                            <span>25 Feedbacks</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon size={16} />
                            <span>Future Updates</span>
                        </li>
                    </ul>
                    <div className="space-y-2">
                        <Button size={'lg'} className="w-full" asChild>
                            <Link href='/login'>Get Feedbackr</Link>
                        </Button>
                        <p className=" text-sm text-center text-base-content-secondary font-medium">
                            No credit card required.
                        </p>
                    </div>
                </div>
                <div className="relative w-full max-w-sm">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-nowrap">
                        <Badge variant={'secondary'}>Speical discount for first 10 ppl — $40 OFF</Badge>
                    </div>
                    <div className="flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg border">
                        <div className="flex flex-wrap gap-2">
                            <p className="flex flex-col justify-end mb-[4px] text-lg line-through text-slate-800">
                                $49
                            </p>
                            <p className="text-4xl tracking-tight font-extrabold">$9</p>
                        </div>
                        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                            <li className="flex items-center gap-2">
                                <CheckIcon size={16} />
                                <span>Unlimited Projects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon size={16} />
                                <span>Unlimited Feedbacks</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon size={16} />
                                <span>Future Updates</span>
                            </li>
                        </ul>
                        <div className="space-y-2">
                            <Button size={'lg'} className="w-full" asChild>
                                <Link href={process.env.PRO_PLAN_URL!}>Get Feedbackr</Link>
                            </Button>
                            <p className="text-sm text-center text-base-content-secondary font-medium">
                                Pay once. Use forever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}