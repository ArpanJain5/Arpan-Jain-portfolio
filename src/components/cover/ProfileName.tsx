"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Button from "../ui/Button";
import { Github, Linkedin, FileSpreadsheet } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    // const [textColor, setTextColor] = useState("");
    return (
        <div
            className="text-2xl lg:text-4xl flex flex-col font-bold text-highlight ml-3 lg:ml-0 "
            // style={{ color: textColor }}
        >
            I&apos;m
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    "Arpan Jain",
                    1000,
                    // () => setTextColor("red"),
                    "a Full Stack Developer",
                    1000,
                    "",
                    300,
                    // () => setTextColor("blue"),
                    // "a Full Stack Developer",
                    // 1000,
                ]}
                wrapper="span"
                cursor={true}
                speed={20}
                deletionSpeed={30}
                repeat={Infinity}
                className=" text-xl lg:text-4xl font-bold text-cyan-400 "
                // style={{ color: textColor }}
            />
            <div className="text-sm font-normal flex justify-between items-center">
                <span className="ml-1 md:ml-0">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={["", 300, "@arpanjain", 1000]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        speed={20}
                        className="text-sm hidden lg:block"
                    />
                </span>
                <span className="block lg:hidden mr-5">@arpanjain</span>
                <div className="flex gap-2 mt-2">
                    <Link
                        className="block md:hidden"
                        href="https://docs.google.com/document/d/16NodpvE0tQ7U-BWXtdlL9VrGBNH4mD1A/edit?usp=sharing&ouid=101513134553442081119&rtpof=true&sd=true"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <FileSpreadsheet />
                        </Button>
                    </Link>
                    <Link
                        className="block md:hidden"
                        href="https://github.com/ArpanJain5"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <Github />
                        </Button>
                    </Link>
                    <Link
                        className="block md:hidden"
                        href="https://www.linkedin.com/in/arpan-jain-4b58281ba/"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <Linkedin />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileName;
