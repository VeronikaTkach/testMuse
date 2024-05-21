import React from "react";
import cn from 'classnames';
import s from './styles.module.scss';
import cardProductList from "../../ui/CardProduct/CardProduct";

export const Products = () => {

  return (
    <div className={s.products}>
      <div className={s.products__title}>Our products</div>
      <div className={s.products__cards}>
        {cardProductList.map((card, index) => (
          <div key={index} className={s.card}>
            {card}
          </div> 
        ))}
      </div>
    </div>
  )
}