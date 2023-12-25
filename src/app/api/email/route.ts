import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_LkURKRDP_AcJCM1DzG6tgKerCRYV6CNfa");
import EmailTemplete from "@/components/ContactForm/emailTemplete";
export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            //  phone
            message,
        } = await req.json();
        // console.log("route -> ", { name, email, message });
        await resend.sendEmail({
            from: "onboarding@resend.dev",
            to: "arpanrewari@gmail.com",
            subject: "Contact Form Submission",
            react: EmailTemplete({ name, email, message }), //TODO: add phone
        });

        console.log("email sent");

        return NextResponse.json({
            status: "ok",
            // data: { name, email, message },
        });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
