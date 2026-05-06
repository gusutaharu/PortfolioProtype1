import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useScrollBackground = (
  targetRef: RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      gsap.to(targetRef.current, {
        backgroundColor: 'white',
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    },
    { scope: targetRef },
  );

  return targetRef;
};
