import Link from "next/link";

export default function Footer() {
    return (
        <p className="text-center p-8 flex gap-1 justify-center">
            <Link href='/' className="font-gabarito font-extrabold hover:underline">
                FEEDBACK<span className="font-normal">R</span>
            </Link>
            is built with ☕ by
            <Link href='https://twitter.com/0xSatyajit' target="_blank" className="font-gabarito hover:underline">
                Satyajit
            </Link>
        </p>
    )
}