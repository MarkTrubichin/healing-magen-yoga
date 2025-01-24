import React from 'react';
import '../styles/main-page.css';
import Joshep_removebg_preview from '../images/Joshep_removebg_preview.png';


function MainPage() {
  return (
    <div className='wrapper'>
      <h1 className='Hmy'>Healing magen yoga</h1>
      <p className='yc'>yoga curses</p>
      <img src={Joshep_removebg_preview} alt='Joshep' height={700} width={700} className='Joshep'></img>
      <p className='desc'>Yoga Therapy Standard 2024 <br></br>
                          Healing Magen Yoga Therapy <br></br>

  Combines the ancient wisdom and traditions of numerous lineages <br></br> of yoga and Ayurveda  with modern science in training yoga therapists <br></br> to skillfully assist  and empower those they work with to play an active role <br></br> in their healing, health and well-being.  
  The training of modern yoga therapists <br></br> gives them the opportunity to work in an integrative health  and wellness environment <br></br> with groups and individuals. 
      </p>
    </div>
  );
}

export default MainPage;