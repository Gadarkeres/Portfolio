import './Section01.css'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import img from './background.jpg'

const Section01 = () => {

  
  const container = useRef(null)
  useEffect(() =>{
    lottie.loadAnimation({
      container: container.current,
      renderer:"svg",
      loop:true,
      autoplay:true,
      animationData: require('./animation_lmcrsqeg.json')
     
    });
    return () => {
      lottie.destroy();
    };
  }, [])
  return (
    <section id="section1" style={{ backgroundImage: `url(${img})` }}>
       <div className='overlay'></div>
    <div className='section1div'><h1>Oi, eu sou o <br /> <span>Matheus Rafael.</span> <br />
    Desenvolvedor front-end.</h1>
    </div>
    <div>
      <div className="animation" ref={container}></div>
    </div>
   </section>
  )
}

export default Section01