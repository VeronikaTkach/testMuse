import React, { useState } from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './styles.module.scss';

import arrowToLink from '../../../assets/arrowToLink.svg';
import arrowToLinkHover from '../../../assets/arrowToLinkHover.svg';

const titles = [
  {color: "rgb(255, 200, 0)", title: "Ultimate Guitar", text: "The best platform for music makers to play songs they love. Home to the world's largest music community.", },
  {color: "rgb(46, 104, 192)", title: "MuseScore", text: "Create, play back, and print sheet music with free open source notation software.", },
  {color: "rgb(234, 21, 66)", title: "audio.com", text: "The easiest way to share any sound online.", },
  {color: "rgb(29, 78, 216)", title: "Audacity", text: "The world's most popular audio editing and recording app.", }
];

export const CardProduct = ({color, title, text, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={s.card}>
        <div className={s.card__color} style={{ backgroundColor: color }}></div>
        <div className={s.card__info}>
          <div className={s.card__info_title}>{title}</div>
          <div className={s.card__info_text}>{text}</div>
        </div>
        <a 
          className={s.card__link} 
          href="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={s.card__link__text}>Read more</div>
          <img 
            src={isHovered ? arrowToLinkHover : arrowToLink} 
            alt={'arrow to link'} 
          />
        </a>
    </div>
  )
}

CardProduct.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const cardProductList = titles.map((item, index) => (
  <CardProduct key={index} {...item} />
));

export default cardProductList;