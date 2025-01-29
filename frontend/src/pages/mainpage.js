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

  Combines the ancient wisdom and traditions of numerous<br></br> lineages  of yoga and Ayurveda  with modern science in unhealthy students & teaching<br></br> yoga therapists  to skillfully assist and empower those they work<br></br> with to play an  active role  in their healing, health and well-being.  
  <br></br> The teaching of modern yoga therapists gives them the opportunity <br></br> to work in an  integrative health and wellness environment with <br></br> groups and individuals. 
      </p>
    </div>
  );
}

export default MainPage;