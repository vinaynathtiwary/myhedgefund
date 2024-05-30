'use client';
import React from 'react';
import styles from '../css/Footer.css.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Lato } from 'next/font/google';
import Link from 'next/link';


const footerCategory = Lato({
    subsets: ["latin"],
    weight:['900']
});

const footerCategoryContent = Lato({
    subsets: ["latin"],
    weight:["700"]
});



function Footer() {
    return (
        <footer className="text-[rgb(151,151,151)] body-font bg-black">
            <div className="container pl-[120px] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="text-xl text-white">Empower Yourself, Your Investments, YourSkills & Career.</span>
                    </a>
                    <br />
                    <p className="mt-2 text-[20px] text-white">Bringing Financial Freedom For India, By India</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className={`text-white tracking-widest text-sm mb-3 ${footerCategory.className} font-normal`}>Company</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">About Us</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Policy</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Career</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Blog</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Contact Us</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className={`text-white tracking-widest text-sm mb-3 ${footerCategory.className}`}>Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Consulting</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Tax, Regulatory & Finance Consulting</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">ESG & Risk Consulting</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Deals Consulting</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Assurance Services</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Global Transaction Services</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className={`text-white tracking-widest text-sm mb-3 ${footerCategory.className}`}>Contact Us</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Hedgemyfunds.co.in</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">TDS Tower, Phase 88, Industrial Area, Mohali</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Sahibzada Ajit Singh Nagar, Punjab</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">160055</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">+91-9888334677</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">contact@hedgmyfunds.co.in</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className={`text-white tracking-widest text-sm mb-3 ${footerCategory.className}`}>Legal</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Privacy</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link href="" className="text-[rgb(151,151,151)]">Security</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-[rgb(151,151,151)] ml-1" target="_blank">HedgeMyFunds.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
