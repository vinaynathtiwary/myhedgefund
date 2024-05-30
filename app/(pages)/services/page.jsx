'use client'
import styles from '@/css/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import { useEffect } from 'react'

export default function service() {


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
            
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>How We Can Help You?</h1>
                    <p className={styles.description}>
                        Changing face of Indian businesses, government led reforms have brought new challenges and new opportunities in the market. This constant evolution requires regular shaping of new strategies and new business solutions. Our extensive network of our member firms and offices in the country can help mitigate the challenges arising on account of the unique legal system, regulatory bottlenecks and tax requirements.
                    </p>
                    <p className={styles.description}>
                        We can help you in your financial growth by overcoming these barriers of growth. This involves doing business in India advisory, corporate finance, management of your business risks, strategic planning of your investments and solving your taxation related queries.
                    </p>
                    <p className={styles.description}>
                        Whatever business you are in, we can offer you the following services:
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className={styles.title} id="title">Our Services</h1>
                </div>
                <div className={styles.services}>
                    <div className={styles.serviceCard}>
                        <h2>Consulting</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p><hr/>
                        <Link href="/services/consulting-services">See our 3 consulting services</Link>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Tax, Regulatory & Finance Consulting</h2>
                        <p>Tax advisory and advisory services in India by HMF aim to help businesses of all sizes to formulate and implement effective strategies to optimize their taxes and minimize tax challenges.</p><hr/>
                        <Link href="/services/tax-regulatory-and-finance">See our 16 tax, regulatory & finance consulting services</Link>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>ESG & Risk Consulting</h2>
                        <p>ESG & Risk Consulting</p><hr/>
                        <a href="/services/esg">See our 4 risk advisory services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Deals Consulting</h2>
                        <p>Supporting you to grow your business profitably through our partner-led deals service.</p><hr/>
                        <a href="/services/deals">See our 7 additional services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Assurance Services</h2>
                        <p>Assurance Services</p><hr/>
                        <a href="/services/assurance">See our 4 risk advisory services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Global Transaction  Services</h2>
                        <p>HMF’s Global Transaction Services works to provide innovative multi-disciplinary solutions across service lines and expertise areas, with a global customer base.</p><hr/>
                        <a href="services/global-transaction-services">See our 7 additional services</a>
                    </div>
                </div>
            </main>
        </div>
        </div>
    );
}
