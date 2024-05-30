'use client'
import React from "react";
import Image from "next/image";
import styles from "@/css/JoinUs.module.css";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import gsap from 'gsap'
import { useEffect } from 'react'
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

  const heroText = "Gain valuable insights on the latest trends, best practices, and expert opinions.";
  const heroLetters = heroText.split("").map((char, index) => (
    <span key={index} className="hero-letter">
      {char}
    </span>
  ));






  const [first_name, setfirstName] = useState('');
  const [last_name, setlastName] = useState('');
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const [type, settype] = useState('');
  const [amount, setamount] = useState('');
  const [message, setmessage] = useState('');


  const firstnameHandler = (e) => {
    setfirstName(e.target.value);
  }
  const lastnameHandler = (e) => {
    setlastName(e.target.value);
  }
  const numberHandler = (e) => {
    setnumber(e.target.value);
  }
  const emailHandler = (e) => {
    setemail(e.target.value);
  }
  const typeHandler = (e) => {
    settype(e.target.value);
  }
  const amountHandler = (e) => {
    setamount(e.target.value);
  }
  const messageHandler = (e) => {
    setmessage(e.target.value);
  }









  const submitHandler = (e) => {
    e.preventDefault();

    const serviceId = 'service_k32y3yr';
    const templateId = 'template_kv57vpi';
    const publicKey = 'nKA1vC3z6VT6nBjkj';

    const templateParams = {
      first_name: first_name,
      last_name: last_name,
      number: number,
      email: email,
      type: type,
      amount: amount,
      message: message,
      to_name: 'HedgeMyFund',
      reply_to: 'kumarsateesh838@gmail.com',
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Success Sent", response);
        setfirstName('');
        setlastName('');
        setnumber('');
        setemail('');
        setmessage('');

      })
      .catch((error) => {
        console.log("Error:", error)
      });
  }











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
      <form action="" className={`${styles.form}`} onSubmit={submitHandler} >
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Join Us
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Join the HedgeMyFund Community Today and Empower Your Financial Future with Us
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="first-name" class="leading-7 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={first_name}
                      onChange={firstnameHandler}
                      id="first-name"
                      name="f-name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="last-name" class="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={last_name}
                      onChange={lastnameHandler}
                      id="last-name"
                      name="l-name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="contact" class="leading-7 text-sm text-gray-600">
                      Contact
                    </label>
                    <input
                      type="number"
                      value={number}
                      onChange={numberHandler}
                      id="contact"
                      name="contact"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={emailHandler}
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="type" class="leading-7 text-sm text-gray-600">
                      Type of Investment
                    </label>
                    <input
                      type="text"
                      value={type}
                      onChange={typeHandler}
                      id="type"
                      name="type"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="amount" class="leading-7 text-sm text-gray-600">
                      Amount of Investment
                    </label>
                    <input
                      type="number"
                      value={amount}
                      id="amount"
                      name="amount"
                      onChange={amountHandler}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>



                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600">
                      Query
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      name="message"
                      onChange={messageHandler}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

      </form>
    </div>
  );
};

export default page;
