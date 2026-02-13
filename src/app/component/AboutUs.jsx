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
                  About TechkGuru Digital <span>– Your Trusted Fintech & Digital Services Partner</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  At TechkGuru Digital, our goal is to make digital services
                  accessible, transparent, and efficient. We bridge the gap
                  between technology and convenience by offering essential
                  fintech services along with digital and travel solutions under
                  one roof.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our platform is designed to support growth — from small
                  retailers and agents to large service providers — while
                  maintaining strong standards of security and compliance.
                </p>
              </div>

              <div className="about-content-body">
                <div className="row align-items-center">
                  {/* Left Info */}
                  <div className="col-md-6">
                    <div className="about-content-info">
                      <div
                        className="about-goal-box wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="icon-box">
                          <Image
                            src="/images/icon-financial-strategies.svg"
                            alt="Strategy"
                            width={50}
                            height={50}
                          />
                        </div>

                        <div className="about-goal-box-content">
                          <h3>financial strategies</h3>
                          <p>
                            Tailored plans to meet your unique financial needs
                            and goals.
                          </p>
                        </div>
                      </div>

                      <div
                        className="about-contact-box wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="icon-box">
                          <Image
                            src="/images/icon-phone.svg"
                            alt="Phone"
                            width={40}
                            height={40}
                          />
                        </div>

                        <div className="about-contact-content">
                          <p>
                            <a href="tel:658456975">+(91) 99889-91533</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Author */}
                  <div className="col-md-6">
                    <div
                      className="about-author-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="about-info-box">
                        {/* <figure className="image-anime wow fadeInUp">
                          <Image
                            src="/images/author-1.jpg"
                            alt="Author"
                            width={120}
                            height={120}
                          />
                        </figure> */}

                        <div className="about-author-content">
                          <h3>Azim Mithani</h3>
                          <p>Founder & Financial Head</p>
                        </div>
                      </div>

                      <div className="about-info-list">
                        <ul>
                          <li>risk management</li>
                          <li>communication</li>
                          <li>24/7 support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
