'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import people from '@/public/people.svg';

function HeaderComponent() {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  useEffect(() => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;

    // Text animation: fade in + move up
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1,
      }
    );

    if (!image || !wrapper) return;

    const animateX = gsap.quickTo(image, 'x', {
      duration: 0.3,
      ease: 'power2.out',
    });

    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const screenX = e.clientX;
      const percentFromCenter = (screenX - screenWidth / 2) / (screenWidth / 2);
      const maxOffset = wrapper.getBoundingClientRect().width * 0.2;
      const offsetX = percentFromCenter * maxOffset;
      animateX(offsetX);
    };

    const resetImage = () => {
      animateX(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', resetImage);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', resetImage);
    };
  }, []);

  return (
    <div className="w-full h-[50%] pt-10 md:pt-0 text-dark font-bold text-6xl md:text-8xl">
      <div className="discover w-full">
        <span
          ref={(el) => (textRefs.current[0] = el)}
          className="uppercase tracking-wider"
        >
          DISCOVER
        </span>
      </div>

      <div className="discover w-full md:flex-row flex-col flex items-center justify-center">
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="uppercase tracking-wider md:pd-0"
        >
          YOUR
        </span>

        {/* Image Wrapper */}
        <div
          className="w-96 -mt-2 md:-mt-14 rounded-full relative"
          ref={wrapperRef}
        >
          {/* Green Background */}
          <div
            className="w-full h-[75%] rounded-full absolute bottom-0 z-[1]"
            style={{
              boxShadow:
                'rgba(50, 50, 93, 0.05) 0px 30px 60px -12px inset, rgba(50, 50, 50, 0.3) 0px 18px 36px -18px inset',
            }}
          />

          {/* Animated Image */}
          <Image
            ref={imageRef}
            src={people}
            alt="My Icon"
            className="relative z-[2] inline-block bg-contain"
          />
        </div>

        <span
          ref={(el) => (textRefs.current[2] = el)}
          className="uppercase tracking-wider"
        >
          ROYAL
        </span>
      </div>

      <div className="discover w-full">
        <span
          ref={(el) => (textRefs.current[3] = el)}
          className="uppercase tracking-wider"
        >
          WORTH
        </span>
      </div>
    </div>
  );
}

export default HeaderComponent;
