'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Testimonials.module.css'
import gsap from 'gsap'
import { useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import TeamSection from '@/components/TeamSection'
const page = () => {


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

  const heroText = "Gain valuable insights on the latest trends, best practices, and expert opinions.";
  const heroLetters = heroText.split("").map((char, index) => (
    <span key={index} className="hero-letter">
      {char}
    </span>
  ));

  return (
    <div>
      <div className={`${styles.bg}  ${styles.rounded} relative`}>
      <NavBar />
      <div className='relative h-[50vh] w-[100%] bg-red-500'>
  <Image
    src="/blogs3.jpg" 
    alt="alt" 
    layout="fill" 
    objectFit="cover" 
    className="absolute top-0 left-0"
  />
</div>

      <Image
        src="/aboutSVG.svg"
        alt="Description of image"
        height={400}
        width={400}
        className={`${styles.svg}`}
      />

     




        <div className={`${styles.hero} pl-5 pr-5`}>
          <p>{heroLetters}</p>
         

          <div className={`${styles.animation}`}>
            <span className="text-center">
              <span>
                <Typewriter
                  options={{
                    strings: ["Guidance", "Ambitions", "Excellence", "Success"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <br />
            <button
              className={`${styles.btnhover} text-[14px] m-auto flex p-3 pl-16 pr-16 rounded-[1px] bg-transparent`}
            >
              <p>KNOW MORE</p>
              
            </button>
          </div>
        </div>
        
      </div>


      <TeamSection />
    </div>
  )
}

export default page
