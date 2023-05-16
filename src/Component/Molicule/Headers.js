import React,{useState} from 'react'
import style from './Header.module.css'
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router';








export default function Header() {
    const navi=useNavigate();
    function hlh(){
        navi('/Home')
    }
    function hla(){
        navi('/AboutUs')
    }
    function hlp(){
        navi('/Project')
    }
    function hlv(){
        navi('/Video')
    }
    function hlc(){
        navi('/Contact')
    }
   function hlogin(){
    navi('/Login')
   }
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
                <li className={style.li1} onClick={hlh}>Home</li>
                <li className={style.li1} onClick={hla}>About Us</li>
                <li className={style.li1}  onClick={hlp}>Projects</li>
                <li className={style.li1}  onClick={hlv}>Video</li>
                <li className={style.li1}  onClick={hlc}>Contact</li>
                <button  onClick={hlogin} >Login</button>
            </ul>
            
        </nav>
        {
            show?<nav className='style.nav2' style={{height:"100px",width:"60px",marginRight:"60px",zIndex:"20"}}>
                 <ul>
                <li onClick={hlh}>Home</li>
                <li  onClick={hla}>About Us</li>
                <li onClick={hlp}>Projects</li>
                <li onClick={hlv}>Video</li>
                <li onClick={hlc}>Contact</li>
                <button   onClick={hlogin}>Login</button>
            </ul>
            
            </nav>:null
        }
    
        <FaBars className={style.bar}size={24} onClick={()=>setshow(!show)}></FaBars>
   
      
    </header>
   
      <div className={style.hero}>
      <div className={style.text} >
      <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Learn More</button>
      </div>
         
       
      
      <div className={style.imge}>
        <img src="https://cdn.pixabay.com/photo/2018/04/10/22/18/spiderman-3309033_960_720.jpg"alt="Hero Image" />
      </div>
      </div>
    
   </>
  )
}
