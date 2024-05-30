'use client'
import React from 'react';
import styles from '@/css/ContactUs.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
const Contact = () => {
  
  
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
        <div className={styles.container}>
            <section className={styles.ContactTopSection}>
                <h1 className={styles.header}>Connect with Us Today: Your Feedback Matters!</h1>
            </section>
            <section className={styles.ContactBottomSection}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <h2 className={styles.formHeader}>Get in Touch</h2>
                        <input type="text" className={styles.input} placeholder="Enter your full name..." required />
                        <input type="email" className={styles.input} placeholder="Enter your email address..." required />
                        <input type="text" className={styles.input} placeholder="Enter a subject..." required />
                        <textarea className={styles.textArea} placeholder="Enter your message..." required />
                        <button type="submit" className={styles.button}>Send Message</button>
                    </form>
                </div>
                <div className={styles.contactInfoContainer}>
                    <div className={styles.contactCard}>
                        <h2>Contact us</h2>
                        <p className={styles.contactDetail}>+91-9888334677</p>
                        <p className={styles.contactDetail}>contact@hedgmyfunds.co.in</p>
                        <address className={styles.address}>
                        Hedgemyfunds.co.in<br/>
                        TDS Tower, Phase 88, <br/>Industrial Area Mohall,<br/>
                        Sahibzada Ajit Singh Nagar, <br/>Punjab 160055.
                        </address>
                        <a href="/locations" className={styles.locationsLink}>View our locations <span>&#8594;</span></a>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Follow us on</h3>
                        <div className={styles.socialIcons}>
                        <Link href="/posts/first-post"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link href="/posts/first-post"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link href="/posts/first-post"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link href="/posts/first-post"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Contact;
