import React from "react";
import cn from 'classnames';
import s from './styles.module.scss';

import instagram from '../../../assets/instagram.svg';
import telegram from '../../../assets/telegram.svg';
import linkedin from '../../../assets/linkedin.svg';
import facebook from '../../../assets/facebook.svg';

export const SocialAndText = () => {

  return (
    <div className={s.social}>
      <div className={s.social__media}>
        <img src={instagram} alt={'instagram logo'} className={s.media__item}/>
        <img src={telegram} alt={'telegram logo'} className={s.media__item}/>
        <img src={linkedin} alt={'linkedin logo'} className={s.media__item}/>
        <img src={facebook} alt={'facebook logo'} className={s.media__item}/>
      </div>
      <div className={s.social__text}>You&rsquo;re not just a&nbsp;student&nbsp;&mdash; you&rsquo;re part of&nbsp;a&nbsp;vibrant community of&nbsp;like-minded individuals united by&nbsp;a&nbsp;passion for frontend development. Collaborate, innovate, and grow alongside fellow learners and industry professionals as&nbsp;you embark on&nbsp;this exciting journey together.</div>
    </div>
  )
}