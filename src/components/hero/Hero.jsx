import React from 'react';
import Typed from 'typed.js';
import './Hero.css'

const Hero = () => {

     
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['DevOps Engineer','Kubernetes Enthusiast'],
        typeSpeed: 100,
        backSpeed:100,
        smartBackspace:true,
        loop:true,
        shuffle:true,
        cursorChar:'>',
    });

    return () => {
      typed.destroy();
    };
  }, []);


    return (
        <>
            <section id="hero" className="hero-container">
                <div className="hero-content">    

                    
                    <h2>I<b className='pq'>'</b>m <b className='pq'>a</b> <span ref={el}/> </h2>
                    <p>
                    DevOps@PGAGI | Intern @ISRO | Open Source Contributor | GoLang |AWS Enthusiast | DSCE'26 AIML | Engineering Scalability and Experimenting with Kubernetes
                    </p>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="personalImage">                        
                            <img src='./personalPhotos.jpg' alt="mee" />
                        </div>
                    </div>
                    {/* <div>
                        <div className="tech-icon">
                           <a href="https://www.instagram.com/rahul._38_/"  target="_blank"> <img src="./insta.png" alt="insta" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="https://x.com/tRahulPrabhu38"  target="_blank" > <img src="x.png" alt="x" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="https://www.linkedin.com/in/trahulprabhu38/"  target="_blank" > <img src="linkedIn.png" alt="insta" /></a>
                        </div>
                        
                    </div> */}

                    <div>
                        <br /><br />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;