import "./globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import { Toaster } from "react-hot-toast";
// import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "Arpan Jain Portfolio (@arpanjain)",
    description: "Arpan Jain Portfolio - Full Stack Developer",
    // icons: ["/images/profilePic_Icon.png"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/favicon.ico",
        },
    },
    generator: "Arpan Jain",
    publisher: "Arpan Jain",
    creator: "Arpan Jain",
    keywords: [
        "Arpan Jain",
        "Arpan Jain",
        "Portfolio",
        "React",
        "Nextjs",
        "Tailwindcss",
        "Typescript",
        "Javascript",
        "Developer",
        "Arpan Jain Portfolio",
        "Arpan Jain Portfolio (arpanjain)",
        "Arpan Jain Portfolio (arpanjain) - Reactjs - Nextjs - Nodejs - Expressjs - MongoDB - Tailwindcss - Typescript - Javascript - Full Stack Developer - Full Stack - Developer",
    ],
    viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="select-none">
                {/* <SpeedInsights /> */}
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <Toaster />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
