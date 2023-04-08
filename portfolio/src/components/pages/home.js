import React, { useEffect } from 'react';
import SplineViewer from '../SplineViewer';
import './home.css';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Home() {
  useEffect(() => {
    const headline = document.querySelector('h1');
    const myText2 = document.querySelector('p');
    const headlineSplit = new SplitType(headline);
    const myText2Split = new SplitType(myText2, { charClass: 'char2' });
    const tl = gsap.timeline({ defaults: { ease: 'Expo.easeInOut' } });

    tl.from('.char', {
      y: -100,
      stagger: 0.05,
      delay: 3,
      duration: 1.5,
    }).from('.char2', {
      y: -100,
      stagger: 0.05,
      duration: 2,
    }, '-=1.2');

    return () => {
      // Clean up by removing the SplitType instance and GSAP animation
      headlineSplit.revert();
      myText2Split.revert();
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div>
        <h1>William Su</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <SplineViewer
        url1="https://my.spline.design/untitled-fc5d7ff30212d410d22a647d39052f5b/"
        url2="https://my.spline.design/untitled-7892c0cc53e61c9b5d8b9e9874233db2/"
      />
    </div>
  );
}
