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
import heroImageC2 from '@/public/heroImageC2.png'
const images = [heroImageC1, heroImageC2,heroImageC1,heroImageC2 ];
export default function ImageSection({closeModal}) {
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
    gsap.set(secondText.current, { xPercent: xPercent  });

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

          <div className="Descriptionsection  md:h-full py-6 md:py-3  w-full md:w-[35%]">
            <p className='text-start pr-4 font-primary text-3xl md:text-xl  md:leading-5 leading-8 '>
              {/* Who said love has a price tag? <br /> */}
               Let’s calculate the dowry and prove them wrong. Click below!</p>
             
            <div className="flex justify-center items-center h-20  mt-4  ">
              <button
                onClick={closeModal}
                className="relative cursor-pointer inline-flex items-center justify-center overflow-hidden font-semibold tracking-wide text-white   transition-all duration-300 ease-out rounded-2xl shadow-lg group px-20 md:px-8 md:py-3 py-6   md:text-lg text-2xl border border-black   bg-buttonhover   "
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 translate-y-0   opacity-10 group-hover:translate-x-full group-hover:opacity-0 rounded-2xl"></span>
                <span className="relative z-10 transisition-all duration-300 ease-out group-hover:text-xl  text-white font-primary">Calculate Now</span>
              </button>


            </div>
          </div>
          
        </div>

  );
}
