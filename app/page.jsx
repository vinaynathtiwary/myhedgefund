"use client";
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import styles from "@/css/HomePage.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import OurMission from "@/components/OurMission";
import PortFolio from "@/components/PortFolio";
import Footer from "@/components/Footer";
import Blog2 from "@/components/Blog2";
import { gsap } from "gsap";
import Blog3 from "@/components/Blog3";
import Head from 'next/head';
import {  Be_Vietnam_Pro } from 'next/font/google';
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";

const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});

const Page = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-letter",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  const heroText = "Redefining Investment Banking, For India, By Indians. Investments for India.";
  const heroLetters = heroText.split("").map((char, index) => {
    if (char === 'I' && heroText[index + 1] === 'n') {
      return (
        <span key={index} className={`hero-letter ${styles.whiteText}`}>
          {char}
        </span>
      );
    }
    return (
      <span key={index} className="hero-letter">
        {char}
      </span>
    );
  });

  return (
    <>
      <Head>
        <meta name="keywords" content="HedgeMyFunds, hedge fund consulting, tax consulting, regulatory consulting, finance consulting, ESG consulting, risk consulting, deals consulting, assurance services, global transaction services" />
        <meta name="author" content="HedgeMyFunds" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="relative h-[128px] flex items-center bg-black">
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
        <div className={`${styles.hero}`}>
          <p className={`${herolineText.className} leading-[65px]`}>{heroLetters}</p>
          <div className={`${styles.animation} ${herolineText.className}`}>
            {/* <span className="text-center">
              <span>
                <Typewriter
                  options={{
                    strings: ["Guidance", "Ambitions", "Excellence", "Success"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span> */}
            <p className={`w-[400px] m-auto text-[#DBDBDB] text-[24px] mb-4 font-sans ${styles.quote}`}> "Maximizing eturns with Indian Insight and Strategic Global Partnerships."</p>
           
            {/* <br /> */}
            {/* <br /> */}

            <Link href='/#blog'>
              <button className={`${styles.btnhover} text-[14px] m-auto flex rounded-[1px] bg-transparent`}>
                <p className={`${styles['btn-text']} ${herolineText.className} `}>Get Started</p>
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Blog3 />
      <OurMission />
      {/* <PortFolio /> */}
      <HomeBanner />
      <Footer />
    </>
  );
};

export default Page;
