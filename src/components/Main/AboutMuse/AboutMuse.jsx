import React from "react";
import cn from 'classnames';
import s from './styles.module.scss';

import about__img from '../../../assets/desktop/desktop_img.jpg';


export const AboutMuse = () => {

  return (
    <div className={s.about}>
      <div className={s.about__title}>Muse Group Frontend Academy</div>
      <div className={cn(s.about__text, s.about__text_1)}>Our academy offers a&nbsp;transformative learning experience designed to&nbsp;empower you with the skills and knowledge needed to&nbsp;succeed in&nbsp;the ever-evolving field of&nbsp;frontend development.</div>
      <img className={s.about__img} src={about__img} alt={'Guy with a guitar'}/>
      <div className={cn(s.about__text, s.about__text_2)}>Are you ready to&nbsp;turn your passion for technology into a&nbsp;thriving career?</div>
      <div className={s.input__container}>
        <input type={'email'} placeholder={'Email'} className={s.input__email}/>
        <button className={s.btn}>Join <span>→</span></button>
      </div>
    </div>
  )
}