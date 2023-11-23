import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="awards" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color:"#DDCA87" }}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title= "Awards & Recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
      </div>

      <div className='app__wrapper_img'>
      <img src = {images.laurels} alt="laurels"/>
      </div>
      </div>
);

export default Laurels;
