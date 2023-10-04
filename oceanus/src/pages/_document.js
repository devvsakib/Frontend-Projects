import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import{ Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Ocean & Us</title>
                <link rel="shortcut icon" href="/images/Heading.png" type="image/x-icon" />
            </Head>
            <body className="max-w-[1300px] min-h-screen flex flex-col justify-between mx-auto bg-primary px-5 md:px-10">
                <Header />
                <main className='flex-1'>
                    <Main />
                    <NextScript />
                </main>
                <Footer />
            </body>
        </Html>
    )
}