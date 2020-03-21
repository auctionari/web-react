import React from 'react';

import { Component } from '@common';
import styled from '@style';
import PreviewCard from '@/component/PreviewCard';
import { Carousel } from 'antd';

const Home: React.FC<Component> = ({ className }) => {
  return (
    <Carousel
      className={className}
      draggable
      slidesPerRow={3}
      centerPadding="100"
      centerMode
      autoplay
      dots={false}
    >
      <div>
        <PreviewCard url="https://live.staticflickr.com/4561/38054606355_26429c884f_b.jpg" />
      </div>
      <div>
        <PreviewCard url="https://www.cameraegg.org/wp-content/uploads/2013/03/Canon-EOS-100D-Rebel-SL1-Sample-Image.jpg" />
      </div>
      <div>
        <PreviewCard url="https://cdn.gsmarena.com/pics/13/07/nokia-1020-camera-samples/gsmarena_011.jpg" />
      </div>
      <div>
        <PreviewCard url="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" />
      </div>
      <div>
        <PreviewCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQB-qJ_nuCChNWndKkbW2f9G6KSLmMGpNTFB5rkfOIrJDN4qYQ" />
      </div>{' '}
      <div>
        <PreviewCard url="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg" />
      </div>
    </Carousel>
  );
};

export default styled(Home)`
  margin: 30px 0;
`;
