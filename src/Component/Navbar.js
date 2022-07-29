import React from 'react'
import './Navbar.css';
import { useEffect,useState } from 'react';

import axios from 'axios'

const Navbar = ({setScore}) => {
  const [Sscore, setSscore] = useState(0);
  const [data,setdata]=useState(0);
const [Dscore, setDscore] = useState(0);
const [Cscore, setCscore] = useState(0);
const [Vscore, setVscore] = useState(0);
const [Escore, setEscore] = useState(0);
  const urlparm=["tag=collectible&type=trade","tag=donation&type=donate","tag=governance&type=vote","tag=exchange&type=deposit","tag=social&type=follow&type=post"]
  
  const btnhandler = () => {
  
   
    if (window.ethereum) {
  
      
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };


  useEffect(() => {
    urlparm.forEach(urlrequest)


   function urlrequest(item,index){
    const url1 = baseurl + item;
    
    axios.get(url1)
.then((response) => {
  switch(index)
  {

    case 0 :
      let score=60+parseInt(((response.data.total/600)*40)>100?"40":Math.ceil( response.data.total*40/600))
      setCscore( score);
          
      break
    case 1 :
      
      setDscore(100+parseInt(((response.data.total/6)*100)>100?"100":Math.ceil((response.data.total/6)*100)));
      break
    case  2 :
      
      setVscore(70+parseInt(((response.data.total/6)*30)>100?"30":Math.ceil((response.data.total/6)*30)));
      break
    case  3 :
     
      setEscore(200+parseInt(((response.data.total/300)*200)>200?"200":Math.ceil((response.data.total/300)*200)));
      break
    case  4 :
     
      setSscore(70+parseInt(((response.data.total/300)*30)>100?"30":Math.ceil((response.data.total/300))));
      break
    

    default:
      break

  }
  
})

      
       
    }
   
    setScore(Cscore+Vscore+Escore+Dscore+Sscore);
  }, [data])

console.log(data)
  

  const baseurl=`https://pregod.rss3.dev/v1.0.0/notes/0x000000A52a03835517E9d193B3c27626e1Bc96b1?`
 
  const accountChangeHandler = (account) => {

    setdata(account);
  
    
    
  };

  return (
    <nav className='main_nav'><div className='nav_home'><img src='' alt=''></img> <h1 className='Header'>Credit Score</h1></div><div className='nav_menu '><ul ><li className='active'>Home</li><li>Usecase</li><li>Credit Score</li><li></li></ul></div><div>
       <div className='nav_wallet'>{!data?(<button className='nav_button' onClick={btnhandler}><span>Connect Wallet</span></button>):(<button className='nav_button' onClick={btnhandler}><span>{data}</span></button>)}</div> 
        
        </div></nav>
  )
}

export default Navbar