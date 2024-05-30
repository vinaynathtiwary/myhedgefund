"use client"
import React from 'react'
import styles from '@/css/About.module.css'
import Image from 'next/image'
import { useEffect } from 'react';
import gsap from 'gsap';
import Blog3 from '@/components/Blog3'
import NavBar from '@/components/NavBar'
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

  const heroText = "Empowering India's investment landscape, one smart decision at a time.";
  const heroLetters = heroText.split("").map((char, index) => (
    <span key={index} className="hero-letter">
      {char}
    </span>
  ));


  return (
    <>
   
    
   <div className={`${styles.bg}  ${styles.rounded} relative`}>
      <NavBar />
       
      <Image
        src="/aboutSVG.svg"
        alt="Description of image"
        height={400}
        width={400}
        className={`${styles.svg}`}
      />
     




        <div className={`${styles.hero} pl-5 pr-5`}>
          <p>{heroLetters}</p>
          {/* <p>Investments for India.</p> */}

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

      <Blog3 />

      <div className={styles['executive-section']}>
        <h2>Executive Summary</h2>
        <ul>
          <li>Hedgemyfunds.co.in is poised to become the premier online platform connecting Indian investors with sophisticated investment opportunities.</li>
          <li>We leverage a robust technology infrastructure and a team of experienced professionals to deliver exceptional value to both investors and fund managers.</li>
          <li>Through our people-over-profit focus, client-centricity and impact-oriented approach, we act as trusted advisors and partners.</li>
        </ul>
      </div>
      <div className={`${styles['investment-strategy']} relative`}>
      <h2 className={`${styles.heading}`}>Investment Strategy</h2>
     
      <p className={styles.text}>
      Our focus lies on providing innovative alternative investment solutions through a carefully curated selection of hedge funds. We employ a blend of quantitative and qualitative analysis, encompassing diverse asset classes like land assets, high-quality equities, commodities and strategic restructuring opportunities.
        <br /><br />
        Now that geography has become history, our interconnectedness with member firms will help with all the expertise and capabilities your business needs, along with the quality it deserves.
      </p>
      {/* <br /> */}
      
    
    </div>
      <div className={`${styles['investment-strategy']}`}>
      <h3 className={styles.heading}>Investor Focus</h3>
      <p className={styles.text}>
      Hedgemyfunds.co.in caters to accredited Indian investors seeking to diversify their portfolios and achieve superior risk-adjusted returns.  
        <br /><br />
        Our platform offers a user-friendly interface for browsing, comparing, and investing in a variety of hedge funds.      </p>
      {/* <br /> */}
      
    
    </div>


    <div className={styles['executive-section']}>
        <h2>Compliance & Risk Management</h2>
        <ul>
          <li>Maintaining the highest ethical standards and adhering to all regulatory frameworks are paramount.  </li>
          <li>We are committed to rigorous compliance with SEBI, RBI, and other relevant governing bodies.  </li>
          <li>Our internal audit and legal teams meticulously assess potential investments to mitigate risk and ensure investor protection.</li>
        </ul>
      </div>



      <div className={styles['investment-strategy']}>
      <h2 className={styles.heading}>Technology & Innovation</h2>
      <p className={styles.text}>
      Our proprietary algorithms and investment models are continuously refined by our in-house development team in association with AllAlgos IT Solutions which is a family run web development firm active for the past 8 years.
        <br /><br />
        Hedgemyfunds.co.in leverages cutting-edge technology to deliver an exceptional user experience.  
      </p>
     
      
    
    </div>
      <div className={`${styles['investment-strategy']}`}>
      <h2 className={styles.heading}>Competitive Advantage</h2>
      <p className={styles.text}>
      Our comprehensive approach sets us apart.   
        <br /><br />
        We combine a sophisticated online platform with a team of seasoned investment professionals training our in-house portfolio managers, wealth managers, business analysts and risk & compliance analysts; our robust risk management practices, and a commitment to investor & team education.    </p>
      <br />
      
    
    </div>

    <div className={styles['executive-section']}>
        <h2>Future Outlook</h2>
        <ul>
          <li>We are actively on-boarding a select group of qualified investors to participate in our pre-launch phase. </li>
          <li>The official platform launch is targeted for June 3rd, 2025, upon completion of all legal requirements and regulatory approvals.</li>
          <li>Post launch of the platform, our platform aims to become public in a phased manner as our IT infrastructure is re developed and expanded to sustain the ecosystem and analyse all data real-time.</li>
        </ul>
      </div>


      <div className={styles.banner}>
        <div className={styles['banner-text-container']}>
          <h1 className={styles['banner-text']}>Subscribe to the latest insights from our desk</h1>
          <button className={styles['banner-section-button']}>Click Here</button>
        </div>
      </div>

      <div className={styles['investment-strategy']}>
      <h2 className={styles.heading}>Sustainability</h2>
      <p className={styles.text}>
      We believe in fostering long-term financial stability and growth for our investors
        <br /><br />
        Our platform empowers individuals to access sophisticated financial tools typically reserved for high-net-worth individuals. 
      </p>
      
      
    
    </div>


    


      <div className={`${styles['investment-strategy']}`}>
      <h2 className={styles.heading}>Business Conduct</h2>
      <p className={styles.text}>
      We operate with the utmost integrity and transparency.  Our founders and leadership team have established a stringent code of ethics that adheres to the highest legal and moral standards.    
        <br /><br />
        We maintain an open-door policy to foster trust and open communication with our investors and business partners.   </p>
      <br />
      
    
    </div>











     
    

      {/* <div className={styles['global-network-container']}>
      <h2 className={styles.heading}>A global network - Solutions for all your challenges</h2>
      <p className={styles.text}>
        We are a global network of 68,000 people in member firms in 147 markets with a common goal — to help your business flourish.
        <br /><br />
        Now that geography has become history, our interconnectedness with member firms will help with all the expertise and capabilities your business needs, along with the quality it deserves.
      </p>
      <br />
      <button className={styles.button}>Know more about our global network</button>
      <br />
      <br />
    </div> */}
    



    </>
    
    
  )
}

export default page
