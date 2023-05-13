import React,{useState} from 'react'
import style from './Header.module.css'
import { FaBars } from 'react-icons/fa';







export default function Header() {
    const [show, setshow] = useState(false);

   

  return (
   <>
      <header>
        <div className={style.logo}>
            <img className={style.img1}src="https://thumbs.dreamstime.com/b/globe-up-logo-world-vector-global-221612871.jpg" alt="Logo"/>
            <span className={style.logoName}>Logo Name</span>
        </div>
        <nav className={style.nav1}>
    
        
            <ul className={style.ul1}>
                <li className={style.li1}><a href="#" className={style.a1}>Home</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>About Us</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Projects</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Video</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Contact</a></li>
                <button>Login</button>
            </ul>
            
        </nav>
        {
            show?<nav className='style.nav2' style={{height:"100px",width:"60px",marginRight:"60px",zIndex:"20"}}>
                 <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Contact</a></li>
                <button>Login</button>
            </ul>
            
            </nav>:null
        }
    
        <FaBars className={style.bar}size={24} onClick={()=>setshow(!show)}></FaBars>
   
      
    </header>
   
      <div className={style.hero}>
      <div >
      <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Learn More</button>
      </div>
         
       
      
      <div className="hero-image">
        <img src="https://rukminim1.flixcart.com/image/416/416/k7gikcw0/poster/4/h/h/large-varun-dhawan-room-wall-poster-bollywood-hero-poster-for-original-imafpzbgy8hbhc4t.jpeg?q=70" alt="Hero Image" />
      </div>
      </div>
    
   </>
  )
}
