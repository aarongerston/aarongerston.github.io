// src/app/head.tsx
import Script from 'next/script'

export default function Head() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LLNXHFKNNE"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-LLNXHFKNNE');
                `}
            </Script>
        </>
    )
}
