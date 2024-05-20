import React from "react";
import cn from 'classnames';
import s from './styles.module.scss';

export const Products = () => {

  return (
    <div className={s.products}>
      <div className={s.products__title}>Our products</div>
      <div className={s.products__cards}>Cards</div>
    </div>
  )
}