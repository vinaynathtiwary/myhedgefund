import React from 'react';
import styles from '@/css/Blog3.module.css'; // Ensure to create this file for custom styles
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const anekLatin = Bebas_Neue({ 
  subsets: ["latin"],
  weight: '400' 
});
const Blog3 = () => {
  return (
    <div className='px-4 md:px-[150px] bg-black' id="blog">
      <br />
      
      <h4 className={`font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white ${anekLatin.className}`}>Blogs</h4>
      <br />
      <br />
      <br />
      <div className='flex flex-col md:flex-row'>
        <div className={`bg-white w-full md:w-[50%] h-[300px] md:h-[600px] relative ${styles['hover-effect-wrapper']}`}>
          <div className={styles['hover-effect']}>
            <Image 
              src="/1.jpg" 
              alt="alt" 
              layout="fill" 
              objectFit="cover" 
              className='opacity-[0.9]'
            />
          </div>
          <div className={styles['hover-overlay']}></div>
          <div className={styles['heading']}>
            <h2 className={` ${styles['short-heading']}`}>Importance of Risk Analysis </h2>
            <br />
            
            <hr />
            <hr />
       
           <br />
            <p className={styles['full-content']}>India's dynamic economy presents a wealth of opportunities for entrepreneurs and investors. However, navigating this landscape also comes with inherent risks. This is where risk analysis emerges as a critical tool for building strong business models and achieving sustainable growth. Risk analysis is not a one-time exercise. Businesses must cultivate a culture of risk awareness throughout the organization.
            <br />
            <p>By proactively identifying and mitigating risks, businesses can build stronger foundations, make informed decisions, and navigate the path to sustainable success. </p>
             </p>

          
            
          </div>
        </div>
        <div className='md:w-[50%] flex flex-col'>
          <div className='flex'>
            <div className={`bg-pink-800 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image 
                  src="/blogs2.jpg" 
                  alt="alt" 
                  layout="fill" 
                  objectFit="cover" 
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <h2 className={styles['short-heading']}>Importance of Structuring</h2>
                <br />
            
            <hr />
            <hr />
            <br />
                <p className={styles['full-content']}>This is the full content of the heading. It spans multiple lines to show on hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={`bg-pink-600 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image 
                  src="/blogs3.jpg" 
                  alt="alt" 
                  layout="fill" 
                  objectFit="cover" 
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <h2 className={styles['short-heading']}>Importance of Global Legal Compliances </h2>
                
                <br />
            
            <hr />
            <hr />
            <br />
                <p className={styles['full-content']}>This is the full content of the heading. It spans multiple lines to show on hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className={`bg-violet-400 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image 
                  src="/blogs4.jpg" 
                  alt="alt" 
                  layout="fill" 
                  objectFit="cover" 
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <h2 className={styles['short-heading']}>Power of Diversification</h2>
                <br />
            
            <hr />
            <hr />
            <br />
                <p className={styles['full-content']}>This is the full content of the heading. It spans multiple lines to show on hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={`bg-violet-800 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image 
                  src="/blogs1.jpg" 
                  alt="alt" 
                  layout="fill" 
                  objectFit="cover" 
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <h2 className={styles['short-heading']}>Tech's Impact on Investing</h2>
                <br />
            
            <hr />
            <hr />
            <br />
                <p className={styles['full-content']}>This is the full content of the heading. It spans multiple lines to show on hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      
    </div>
  );
};

export default Blog3;
