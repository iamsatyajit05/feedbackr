import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { Button } from "../ui/button";
import { getUser, signOut } from "@/actions/auth";
import { ComboboxDemo } from "./select-project";
import Feedbackr from '../feedbackr';

export default async function Header() {
  // TODO: add user type
  const { data: user }: any = await getUser();

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-5">
        <Link href='/' className="text-2xl font-gabarito font-extrabold">
          FEEDBACK<span className="font-normal">R</span>
        </Link>
        <ComboboxDemo />
      </div>

      <nav className="flex gap-5 items-center">
        <Link href='/examples'>Examples</Link>
        <Feedbackr projectId="gqgpi9se7z" userId={user.email}>
          <p>Give a feedback</p>
        </Feedbackr>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src={user.profilePictureUrl}
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hello {user.name?.split(' ')[0]}</DropdownMenuLabel>
            <DropdownMenuLabel>
              {
                user.plan === 'pro'
                  ? 'Pro Plan'
                  : <Link href={process.env.PRO_PLAN_URL!} className="hover:underline">Upgrade to Pro</Link>
              }
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <form action={signOut}>
              <Button type="submit" variant={'link'} className="w-full justify-start p-2 text-black">Log out</Button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}