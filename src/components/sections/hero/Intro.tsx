"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FC } from "react";
import Profile from "@/../public/images/heroProfile.jpg";
import { TypeAnimation } from "react-type-animation";
interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    const refToComponent = React.useRef(null);

    useEffect(() => {
        async function loadScrollReveal() {
            if (refToComponent) {
                const ScrollReveal = (await import("scrollreveal")).default;

                ScrollReveal({
                    duration: 700,
                    delay: 50,
                    reset: true,
                    opacity: 0,
                    easing: "ease-in-out",
                    distance: "150px",
                });

                ScrollReveal().reveal(".IntroReveal", {
                    origin: "right",
                    distance: "200px",
                    interval: 150,
                });

                ScrollReveal().reveal(".techCardReveal", {
                    origin: "bottom",
                    interval: 150,
                    // distance: "0px",
                    rotate: {
                        x: 0,
                        y: 90,
                        z: 0,
                    },
                });

                ScrollReveal().reveal(".techProjectReveal", {
                    origin: "bottom",
                    interval: 150,
                    // distance: "0px",
                    rotate: {
                        x: 0,
                        y: 90,
                        z: 0,
                    },
                });

                ScrollReveal().reveal(".NameReveal", {
                    distance: "0px",
                    origin: "top",
                    interval: 200,
                    duration: 700,
                    rotate: {
                        x: 90,
                        y: 0,
                        z: 0,
                    },
                });
            }
        }
        loadScrollReveal();
    }, []);

    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7 mt-3">
            <div className="flex flex-1 -z-10">
                <Image
                    src={Profile}
                    alt=""
                    className=" rounded-xl  w-[90%] mx-auto lg:h-full lg:w-full border-2 shadow-md border-white PhotoReveal"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0 lg:ml-2">
                <div className="flex flex-col gap-4 -z-10">
                    <div className="text-3xl text-highlight font-semibold text-center IntroReveal">
                        Introduction
                    </div>
                    <div className="text-secondary text-lg mt-2 md:mt-0  max-w-[400px] IntroReveal">
                        <TypeAnimation
                            style={{ whiteSpace: "pre-line" }}
                            sequence={[
                                "",
                                600,
                                "Hello! \nMy name is Arpan Jain. I'm a Pre-final Year student from Vellore Institute of Technology Bhopal pursuing my Undergraduate Bachelor’s degree in Computer Science Engineering. I am on the lookout for an opportunity that will let me merge together my passion for problem solving and programming , and kickstart a career in software & IT industries . \nI enjoy the challenge of working with different types of people and coming up with solutions to difficult problems. It helps that I have a knack for staying calm during a storm!",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={70}
                            repeat={0}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
