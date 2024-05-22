import s from './styles.module.scss';

import logo_1 from '../../assets/logo.svg';
import logo_2 from '../../assets/logo_text.svg';

export const Header = () => {

  return (
    <div className={s.header}>
      <img className={s.header__img} src={logo_1} alt={'image logo muse'}/>
      <img className={s.header__img} src={logo_2} alt={'title logo muse'}/>
    </div>
  )
}