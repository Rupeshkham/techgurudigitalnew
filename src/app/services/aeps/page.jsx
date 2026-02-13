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
    q: "What transactions can be performed using AEPS?",
    a: "AEPS allows customers to perform basic banking transactions such as cash withdrawal, balance enquiry, and mini statement using Aadhaar-based biometric authentication.",
  },
  {
    q: "Is AEPS linked to a specific bank?",
    a: "AEPS works with Aadhaar-enabled bank accounts across supported banks, subject to availability and bank participation.",
  },
  {
    q: "Is biometric authentication mandatory for AEPS?",
    a: "Yes, biometric authentication is required to securely verify the customer’s identity before processing AEPS transactions.",
  }
];

export default function Aeps() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader/>
      <Header />
      <PageHeader title="AEPS – Aadhaar Enabled Payment Services" breadcrumb="aeps" />
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
                      src="/images/aeps.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Aadhaar Enabled Payment Services (AEPS) is a bank-led
                    initiative that enables customers to perform basic banking
                    transactions using Aadhaar-based biometric authentication.
                    This service is designed to promote financial inclusion by
                    providing easy access to banking services without the need
                    to visit a physical bank branch. Through AEPS, customers can
                    access their bank accounts using Aadhaar credentials at
                    authorized service points operated by agents or merchants.
                    Transactions are processed securely using biometric
                    verification, ensuring accuracy and safety.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Services Offered Under AEPS
                      </h5>
                      <ul>
                        <li>Cash withdrawal</li>
                        <li>Balance enquiry</li>
                        <li>Mini statement</li>
                      </ul>
                    </div>

                    <div className="service-image-video">
                      
                        <Image
                          src="/images/aeps1.jpeg"
                          alt="video"
                          width={400}
                          height={250}
                        />
                    </div>
                  </div>

                  <div className="service-guidance">
                      <h3 className="text-anime-style-2 mb-4">
                      How AEPS Works
                    </h3>

                    

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
                            <h5>Customer provides Aadhaar number and bank name</h5>
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
                            <h5>Biometric authentication is performed</h5>
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
                            <h5>Transaction is processed in real time</h5>
                          </div>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                  <div className="services-steps">
                    <h3 className="text-anime-style-2 mb-4">
                      Who Benefits
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
                            <h3>Customers in rural and semi-urban areas</h3>
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
                            <h3>- Individuals with limited access to bank branches</h3>
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
                            <h3>Agents and retailers offering banking services</h3>
                            {/* <p>
                              Financial goals are specific targets you set to
                              achieve financial success.
                            </p> */}
                          </div>
                        </div>
                      </div>

                      {/* Entry List */}
                      
                    </div>
                  </div>
                  <div className="service-feature">
                    <h3 className="text-anime-style-2 mb-4">
                      Business Benefits
                    </h3>

                    {/* <p className="wow fadeInUp">
                      Investment management features include personalized
                      portfolio strategies, risk assessment, continuous
                      monitoring, and performance optimization.
                    </p> */}

                    {/* Service Entry List */}
                    <div
                      className="service-entry-list wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <ul>
                        <li>Increased customer footfall</li>
                        <li>Additional commission-based income</li>
                        <li>Contribution to financial inclusion</li>
                        
                      </ul>
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
