import React from 'react';
import { Parallax } from 'react-parallax';
import img from "../assets/blog/img1.jpg"
const BasicParallax = () => {
  return (
    <Parallax bgImage={img} strength={500}>
      <div style={{ height: '500px' }}>
        <div>Content Goes Here</div>
      </div>
    </Parallax>
  );
};

export default BasicParallax;
