'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Blogs.module.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import Carousel from '@/components/Carousel'
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
       
       
         <div className={`${styles.intro}`}>
         HedgeMyFund is an international network of separate and independent member firms established in more than 147 countries worldwide. Global Delivery works to provide innovative multi-disciplinary solutions across service lines and expertise areas, with a customer base that spans the entire global network of Grant Thornton. We serve international member firms through dedicated offshore teams based in India and work in bilateral corridors to connect businesses with partners, identify the best business practices in India and other parts of the world, and learn from them during our collaboration.
      <br />
      <br />
      <br />
         We combine technical skills, process rigour, tools, methodologies, overall structure and strategies to seamlessly deliver services across time zones through our local talent pool.
         </div>






<Carousel />










    </div>
  )
}

export default page
