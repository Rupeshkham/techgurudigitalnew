"use client";
import Header from "@/app/component/Header";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/component/PageHeader";
import Footer from "@/app/component/Footer";
import { useState } from "react";
import Preloader from "@/app/component/Preloader";

const faqs = [
  {
    q: "What types of bills can be paid through BBPS?",
    a: "BBPS supports utility and service bill payments such as electricity, water, gas, mobile postpaid, DTH, broadband, and other supported bill categories.",
  },
  {
    q: "Do customers receive payment confirmation for BBPS transactions?",
    a: "Yes, BBPS provides instant payment confirmation along with a digital receipt after successful bill payment.",
  },
  {
    q: "Can BBPS be used for recurring bill payments?",
    a: "Yes, customers can use BBPS for both recurring and one-time bill payments, depending on the biller category.",
  }
];

export default function Bbps() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader/>
      <Header />
      <PageHeader title="BBPS – Bharat Bill Payment System" breadcrumb="bbps" />
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-catagery-list wow fadeInUp">
                  <h3>Fintech Services</h3>
                  <ul>
                    <li>
                      <Link href="/services/aeps">AEPS</Link>
                    </li>
                    <li>
                      <Link href="/services/bbps">BBPS</Link>
                    </li>
                    <li>
                      <Link href="/services/creditcardbillpayment">Credit Card Bill Payment</Link>
                    </li>
                    <li>
                      <Link href="/services/paymentsolutions">Payment Solutions</Link>
                    </li>
                    <li>
                      <Link href="/services/pos">POS</Link>
                    </li>
                    <li>
                      <Link href="/services/matm">MATM</Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="cta-box-content">
                    <Image
                      src="/images/logo.svg"
                      alt="logo"
                      width={150}
                      height={50}
                    />
                    <h3>Need Help? We Are Here To Help You</h3>
                  </div>

                  <div className="cta-contact-info">
                    <div className="cta-info-item">
                      <p>Need help!</p>
                      <h3>+91 - 99889-91533</h3>
                    </div>

                    <div className="cta-info-item">
                      <p>E-mail now</p>
                      <h3>info@techguru.digital</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-featured-image">
                  <figure className="image-anime wow fadeInUp">
                    <Image
                      src="/images/bbps.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    The Bharat Bill Payment System (BBPS) is an integrated bill
                    payment ecosystem that enables customers to pay recurring
                    and non-recurring utility bills through a single platform.
                    It provides a standardized and interoperable bill payment
                    experience across bill categories.
                  </p>
                  <p className="wow fadeInUp">
                    BBPS ensures transparency, reliability, and instant
                    confirmation, making it a trusted system for both customers
                    and service providers.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Supported Bill Categories
                      </h5>
                      <ul>
                        <li>Electricity</li>
                        <li>Water</li>
                        <li>Gas</li>
                        <li>Mobile postpaid</li>
                        <li>DTH</li>
                        <li>Broadband</li>
                        <li>Other utility and service bills</li>
                      </ul>
                    </div>

                    <div className="service-image-video">
                      
                        <Image
                          src="/images/bbps2.jpeg"
                          alt="video"
                          width={400}
                          height={250}
                        />
                    </div>
                  </div>

                  <div className="service-guidance">
                    <h3 className="text-anime-style-2">Key Capabilities</h3>

                   

                    {/* Service Guidance Box */}
                    <div className="service-guidance-box">
                      {/* Item 1 */}
                      <div
                        className="service-guidance-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="service-guidance-content">
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-6.svg"
                              alt="Market Analysis"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-guidance-title">
                            <h3>Centralized bill discovery</h3>
                          </div>
                        </div>

                       
                      </div>

                      {/* Item 2 */}
                      <div
                        className="service-guidance-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="service-guidance-content">
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-3.svg"
                              alt="Ethical Investing"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-guidance-title">
                            <h3>Real-time bill payment</h3>
                          </div>
                        </div>

                        
                      </div>
                      
                      <div
                        className="service-guidance-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="service-guidance-content">
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-3.svg"
                              alt="Ethical Investing"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-guidance-title">
                            <h3>Secure transaction processing</h3>
                          </div>
                        </div>

                       
                      </div>
                      {/* Item 3 */}
                      <div
                        className="service-guidance-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="service-guidance-content">
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-2.svg"
                              alt="Wealth Planning"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-guidance-title">
                            <h3>Instant confirmation and receipts</h3>
                          </div>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                  <div className="services-steps">
                    <h3 className="text-anime-style-2">
                      Benefits for Agents & Merchants
                    </h3>

                    

                    {/* Service Step Box */}
                    <div className="service-steps-box">
                      {/* Step Item List */}
                      <div className="service-step-item-list">
                        {/* Step 1 */}
                        <div className="service-step-item wow fadeInUp">
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-4.svg"
                              alt="Retirement Planning"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-step-item-content">
                            <h3>High daily transaction demand</h3>
                            {/* <p>
                              Financial goals are specific targets you set to
                              achieve financial success.
                            </p> */}
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div
                          className="service-step-item wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-5.svg"
                              alt="Tailored Strategy"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-step-item-content">
                            <h3>Repeat customer visits</h3>
                            {/* <p>
                              Financial goals are specific targets you set to
                              achieve financial success.
                            </p> */}
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div
                          className="service-step-item wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="icon-box">
                            <Image
                              src="/images/icon-service-6.svg"
                              alt="Report Progress"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="service-step-item-content">
                            <h3>Reliable bill payment infrastructure</h3>
                            {/* <p>
                              Financial goals are specific targets you set to
                              achieve financial success.
                            </p> */}
                          </div>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="our-faq-section">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Frequently asked questions
                    </h2>
                  </div>

                  {/* FAQ Accordion */}
                  <div className="faq-accordion">
                    {faqs.map((item, index) => (
                      <div
                        key={index}
                        className="accordion-item wow fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <h2 className="accordion-header">
                          <button
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                            className={`accordion-button ${
                              openIndex !== index ? "collapsed" : ""
                            }`}
                          >
                            {item.q}
                          </button>
                        </h2>

                        {openIndex === index && (
                          <div className="accordion-collapse show">
                            <div className="accordion-body">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
