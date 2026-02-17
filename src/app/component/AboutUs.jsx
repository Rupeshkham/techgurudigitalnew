"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    // Initialize WOW animations
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          {/* Left Images */}
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/about-img-1.jpg"
                    alt="About Image 1"
                    width={500}
                    height={600}
                  />
                </figure>
              </div>

              <div className="about-img-2">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/about-img-2.jpg"
                    alt="About Image 2"
                    width={400}
                    height={500}
                  />
                </figure>
              </div>

              <div className="contact-circle">
                <Image
                  src="/images/contact-us-img.svg"
                  alt="Contact"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  About TechkGuru Digital{" "}
                  <span>– Your Trusted Fintech & Digital Services Partner</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  At TechkGuru Digital, our mission is to simplify access to
                  essential fintech and digital services by delivering secure,
                  reliable, and technology-driven solutions. We are committed to
                  bridging the gap between financial services and digital
                  convenience, enabling businesses, agents, and service
                  providers to operate more efficiently in today’s rapidly
                  evolving digital ecosystem.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We offer a comprehensive range of fintech services, including
                  AEPS (Aadhaar Enabled Payment Services), BBPS (Bharat Bill
                  Payment System), credit card bill payments, payment solutions,
                  Micro ATM (mATM), and Point of Sale (POS) services, along with
                  digital commerce offerings such as e-commerce support, travel
                  services, and holiday packages. Our platform is designed to
                  provide seamless access to these services through a unified,
                  user-friendly interface supported by reliable infrastructure
                  and trusted service partners.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  TechkGuru Digital focuses on empowering a wide network of
                  retailers, distributors, super distributors, and enterprise
                  partners , helping them expand their service offerings,
                  increase operational efficiency, and create new business
                  opportunities. By leveraging modern technology and scalable
                  systems, we enable our partners to deliver fast, transparent,
                  and dependable services to their customers.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Security, compliance, and transparency are at the core of our
                  operations. Our platform is built to align with applicable
                  regulatory guidelines and industry best practices, ensuring
                  that all transactions are processed through authorized
                  channels and trusted networks. We continuously enhance our
                  systems and processes to maintain high standards of data
                  protection, operational integrity, and service reliability.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  At TechkGuru Digital, we believe in building long-term
                  partnerships based on trust, innovation, and mutual growth.
                  Our vision is to contribute to the advancement of digital and
                  financial inclusion by providing accessible, efficient, and
                  dependable services that support businesses and communities
                  across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
