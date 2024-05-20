import React from "react";
import s from './styles.module.scss';

export const Footer = () => {

  return (
    <>
      <div className={s.footer}>
        <a className={s.footer__link} href="https://support.animaapp.com/en/" target="_blank" rel="noopener noreferrer">Help Center</a>
        <a className={s.footer__link} href="https://forum.animaapp.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> 
        <a className={s.footer__link} href="https://forum.animaapp.com/tos" target="_blank" rel="noopener noreferrer">Terms of Service</a>  
      </div>
    </>
  )
}