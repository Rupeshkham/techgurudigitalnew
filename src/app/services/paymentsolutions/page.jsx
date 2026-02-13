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
    q: "What payment methods are supported?",
    a: "Our payment solutions support UPI, debit cards, credit cards, net banking, and other digital payment modes.",
  },
  {
    q: "Who can use payment solutions?",
    a: "Payment solutions are suitable for merchants, service providers, retailers, and online businesses looking to accept digital payments.",
  },
  {
    q: "Are settlements provided for digital payments?",
    a: "Yes, settlements are processed as per agreed timelines, subject to banking and partner policies.",
  },
];

export default function PaymentSolutions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <Preloader/>
      <Header />
      <PageHeader title="Payment Solutions" breadcrumb="paymentsolutions" />
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
                      src="/images/payment.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    TechkGuru Digital provides modern payment solutions that
                    enable businesses to accept digital payments securely and
                    efficiently. These solutions are designed to support growing
                    businesses by simplifying payment collection and management.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Supported Payment Methods
                      </h5>
                      <ul>
                        <li>UPI</li>
                        <li>Credit Cards</li>
                        <li>Debit Cards</li>
                        <li>Net Banking</li>
                        <li>Other digital payment modes</li>
                      </ul>
                    </div>

                   
                  </div>

                  <div className="service-guidance">
                    <h3 className="text-anime-style-2">
                      Key Features
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
                            <h3>Secure transaction processing</h3>
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
                            <h3>Faster settlement cycles</h3>
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
                            <h3>Easy payment acceptance</h3>
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
                            <h3>Transaction tracking and reporting</h3>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                  <div className="services-steps">
                    <h3 className="text-anime-style-2">
                      Who It’s For
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
                            <h3>Retail merchants</h3>
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
                            <h3>Online businesses</h3>
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
                            <h3>Service providers</h3>
                          </div>
                        </div>
                      </div>

                      {/* Entry List */}
                      
                    </div>
                  </div>
                  <div className="service-feature">
                    <h3 className="text-anime-style-2 mb-4">
                      Benefits
                    </h3>

                    {/* Service Entry List */}
                    <div
                      className="service-entry-list wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <ul>
                        <li>Improved customer experience</li>
                        <li>Reduced cash handling</li>
                        <li>Increased transaction efficiency</li>
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
