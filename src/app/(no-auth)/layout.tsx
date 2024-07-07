import Header from '@/components/landingpage/header';
import Footer from '@/components/landingpage/footer';

export default async function NoAuthLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
