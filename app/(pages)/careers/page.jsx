'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Careers.module.css'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import { useEffect } from 'react'
import gsap from 'gsap'
import Typewriter from "typewriter-effect";
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

  const heroText = "A unique combination of culture and opportunities. Where you can make your mark.";
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
       <div className={`${styles.container}`}>
      <header className={`${styles.banner}`}>
        <h1>The Hedge My Funds difference</h1>
        <p>A unique combination of culture and opportunities, Hedge My Funds is a place where you can grow. Where you can make your mark. Where you can make a difference every day.</p>
        <a href="#find-out-more" className="cta-link">Find out more</a>
      </header>

      <section className={`${styles['info-sections']}`}>
        <div className={`${styles['info-block']}`}>
         
          <Image src="/careers5.jpg" alt="alt"  width={1400} height={100} className='w-[100%]' />
          <h2>Life at Hedge My Funds</h2>
          <a href="#life-at-grant-thornton" className={`${styles['red-button']}`}>Know more</a>
        </div>

        <div className={`${styles['info-block']}`}>
          {/* <img src={`${process.env.PUBLIC_URL}/assets/careers2.jpg`} alt="Career Opportunities" /> */}
          <Image src="/careers6.jpg" alt="alt" width={1400} height={100} className='w-[100%]'  />

          <h2>Career Opportunities</h2>
          <a href="#career-opportunities" className={`${styles['red-button']}`}>Click here to view</a>
        </div>

        <div className={`${styles['info-block']}`}>
          {/* <img src={`${process.env.PUBLIC_URL}/assets/careers3.jpg`} alt="What is it really like to work at Grant Thornton?" /> */}
          <Image src="/careers7.jpg" alt="alt" width={1400} height={100} className='w-[100%]'  />

          <h2>What is it really like to work at hedgemyfunds</h2>
          <a href="#work-at-grant-thornton" className={`${styles['red-button']}`}>Know more</a>
        </div>
      </section>
    </div>

    </div>
  )
}

export default page
