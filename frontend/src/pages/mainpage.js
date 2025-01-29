import React from 'react';
import '../styles/main-page.css';
import Joshep_removebg_preview from '../images/Joshep_removebg_preview.png';


function MainPage() {
  return (
    <div className='wrapper'>
      <h1 className='Hmy'>Healing Magen Yoga</h1>
      <p className='yc'>Yoga courses</p>
      <img src={Joshep_removebg_preview} alt='Joshep' height={700} width={700} className='Joshep'></img>
      <p className='desc'>Healing Magen Yoga Therapy <br></br>

  Combines the ancient wisdom and traditions of numerous<br></br> lineages  of yoga and Ayurveda  with modern science in unhealthy <br></br> students & teaching yoga therapists  to skillfully assist and empower <br></br> those they work with to play an  active role  in their healing, <br></br> health and well-being.  
  The teaching of modern yoga therapists <br></br> gives them the opportunity  to work in an  integrative health <br></br> and wellness environment with  groups and individuals. 
      </p>
    </div>
  );
}

export default MainPage;