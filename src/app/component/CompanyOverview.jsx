"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3>Company Overview</h3>
                <h2>
                  TechkGuru Digital is a fintech{" "}
                  <span>and digital services platform</span>
                </h2>
                <p>
                  TechkGuru Digital is a fintech and digital services platform
                  focused on enabling secure, reliable, and accessible financial
                  and commerce solutions for businesses, agents, merchants, and
                  enterprise partners across India.
                </p>
                <p>
                  We provide a wide range of fintech services including AEPS,
                  BBPS, Micro ATM (mATM), Point of Sale (POS), digital payment
                  solutions, and credit card bill payments, along with digital
                  commerce services such as e-commerce solutions, travel
                  services, and holiday packages. Our platform is designed to
                  simplify transactions, enhance operational efficiency, and
                  support financial inclusion through technology-driven
                  solutions.
                </p>
                <p>
                  At TechkGuru Digital, we operate with a strong emphasis on
                  compliance, security, and transparency. All services are
                  delivered through authorized banking and service partners and
                  are aligned with applicable regulatory guidelines. We
                  continuously work to ensure that our platform meets industry
                  standards and supports responsible usage across our network.
                </p>
                <p>
                  Our scalable infrastructure supports multiple user roles,
                  including Retailers, Distributors, Super Distributors, and
                  Enterprise Clients, enabling seamless onboarding, real-time
                  transaction monitoring, and efficient service management. By
                  combining robust technology with dependable support, we help
                  our partners expand their service offerings and grow their
                  businesses with confidence.
                </p>
                <p>
                  Driven by innovation and guided by trust, TechkGuru Digital
                  aims to build long-term partnerships while contributing to the
                  growth of India’s digital and fintech ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6">
            <div className="what-we-do-images">
              <div className="what-do-we-img-1">
                <figure>
                  <Image
                    src="/images/what-we-do-img-1.jpg"
                    alt="What we do"
                    width={500}
                    height={550}
                  />
                </figure>
              </div>

              <div className="what-do-we-img-2">
                <figure>
                  <Image
                    src="/images/what-we-do-img-2.jpg"
                    alt="Finance work"
                    width={450}
                    height={500}
                  />
                </figure>
              </div>

              <div className="experience-counter-box">
                <div className="experience-counter-no">
                  <h2>25+</h2>
                </div>
                <div className="experience-counter-content">
                  <p>Years of experience in finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
