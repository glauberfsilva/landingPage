import header from "./components/header";
import styles from './styles.module.css';
import HeroSection from "./components/hero-section";
import Content from "./components/content";
import Feature from "./components/feature";
import Contact from "./components/contact";
import Infra from "./components/infra";
import Cases from "./components/cases";


export default function Home() {
  return (
  <main>
   <HeroSection/>
   <div className="line"></div>
   <Content/>
   <Feature/>
   <div className="line"></div>
   <Cases/>
   <div className="line"></div>
   <Infra/>
  </main>);
}
