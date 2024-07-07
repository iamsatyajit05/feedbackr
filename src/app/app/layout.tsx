import Header from '@/components/dashboard/header';
import { validateRequest } from '@/lib/lucia';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    const { user } = await validateRequest()

    if (!user) {
        return redirect("/login")
    }

    return (
        <>
            <main className='hidden sm:block max-w-6xl m-auto'>
                <Header />
                {children}
            </main>
            <main className='block sm:hidden mt-10 text-center'>
                Sorry not optimized for mobile
            </main>
        </>
    );
}
