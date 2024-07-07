import { validateRequest } from "@/lib/lucia";
import { Button } from "../ui/button";
import Link from "next/link";
import LoginButton from "./login";

export default async function DashboardLogin() {
    const { user } = await validateRequest();

    if (!user) {
        return <LoginButton />;
    } else {
        return <Button asChild>
            <Link href={'/app'}>Dashboard</Link>
        </Button>
    }
}