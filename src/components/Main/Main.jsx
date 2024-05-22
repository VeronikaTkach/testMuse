import { HeroSection } from './HeroSection';
import { Products } from './Products';
import { SocialAndText } from "./SocialAndText/SocialAndText";
import s from './styles.module.scss';

export const Main = () => {

  return (
    <div className={s.main}>
      <HeroSection/>
      <Products/>
      <SocialAndText/>
    </div>
  )
}