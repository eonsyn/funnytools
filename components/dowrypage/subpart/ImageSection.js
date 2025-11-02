'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headingicon from '@/public/headingicon.svg';
import people from '@/public/people.svg';
import heroImage1 from '@/public/heroImage1.png';
import heroImageC1 from '@/public/heroImageC1.png';
import heroImage2 from '@/public/heroImage2.png';
import heroImageC2 from '@/public/heroImageC2.png';

import Link from 'next/link';
const images = [heroImageC1, heroImageC2, heroImageC1, heroImageC2];
export default function ImageSection({ closeModal }) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-=300px',
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    // 🟢 FIXED: offset secondText to appear after firstText
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += 0.12 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className='md:flex items-center   justify-between w-full md:h-[30vh]   '>
      <div className="Imagesection relative overflow-hidden    w-full md:w-[60%] mask-fade hidden md:flex">
        <div className=" h-full w-full ">
          <div ref={slider} className="flex w-max relative h-full items-center whitespace-nowrap ">

            <div ref={firstText} className="flex items-center  h-full">
              {images.map((image, idx) => (
                <Image
                  key={`first-${idx}`}
                  alt="image"
                  className="px-1 h-full w-auto object-contain  hover:grayscale transition-all duration-300"
                  src={image}
                />
              ))}
            </div>

            <div ref={secondText} className="flex items-center h-full">
              {images.map((image, idx) => (
                <Image
                  key={`second-${idx}`}
                  alt="image"
                  className="px-1 h-full w-auto object-contain  hover:grayscale transition-all duration-300"
                  src={image}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="  md:h-full pt-4 md:py-3 w-full md:w-[35%]">
        <h1 className="animatedtext text-center   py-1  text-2xl font-extrabold  md:text-xl md:leading-5 leading-5">
          Dowry Calculator AI
        </h1>

        <div className="h-fit md:h-20 mt-1">
          <p className="relative text-start z-10 transition-all duration-300 ease-out group-hover:text-xl  font-primary  ">
            Fill this form and Get a personalized dowry estimate fast, fun, and 100% free!
          </p>


        </div>
      </div>


    </div>

  );
}
