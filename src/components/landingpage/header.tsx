import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuLink } from '@/lib/interface';
import DashboardLogin from '../auth/dashboard-login';

const navItems: MenuLink[] = [
    {
        title: 'Pricing',
        link: '#pricing',
    },
    {
        title: 'FAQ',
        link: '#faq',
    },
    {
        title: 'Examples',
        link: '/examples',
    },
];

export default function Header() {
    return (
        <header className='max-w-7xl m-auto flex w-full items-center justify-between px-4 py-4 md:px-16'>
            <Link href='/' className="text-2xl font-gabarito font-extrabold">
                FEEDBACK<span className="font-normal">R</span>
            </Link>
            <div className='flex items-center gap-4 lg:gap-8'>
                <div className='hidden items-center gap-8 text-slate-800 md:flex'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <Link
                                        href={item.link}
                                        className='p-2 hover:underline'
                                    >
                                        {item.title}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                            <div className='pl-2'>
                                <DashboardLogin />
                            </div>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <Sheet>
                    <SheetTrigger asChild className='md:hidden'>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent
                        className='flex w-52 flex-col gap-2 rounded-s-lg border-none px-4 py-6 text-slate-800 backdrop-blur-lg md:gap-3 lg:hidden'
                    >
                        {navItems.map((item, index) =>
                            <Link
                                key={index}
                                href={item.link}
                                className='p-2 hover:underline'
                            >
                                {item.title}
                            </Link>
                        )}
                        <DashboardLogin />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
