import LoginButton from "@/components/landingpage/login";
import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/lucia";
import Link from "next/link";

async function DashboardLogin() {
  const { user } = await validateRequest();

  if (!user) {
    return <LoginButton />;
  } else {
    return <Button asChild>
      <Link href={'/app'}>Dashboard</Link>
    </Button>
  }
}

export default async function Home() {

  return (
    <main className='flex h-svh items-center justify-center'>
      <DashboardLogin />
    </main>
  );
}
