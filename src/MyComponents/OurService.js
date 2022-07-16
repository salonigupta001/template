import React from 'react'
import image from "../MyComponents/images/fika-continue.png";
import growth from "../MyComponents/images/growth.png";
import pt from "../MyComponents/images/periodtracker.png";
import chat from "../MyComponents/images/chat.png";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

export const OurService = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`,margin:0 ,backgroundRepeat:"no-repeat", backgroundSize:"cover",  height:"100vh", width:"500vh", backgroundposition: "center"}}>
      <h2 style={{justifyItems: "center"}}>OurService</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={pt} alt='pt' style={{ height:"10%", width:"8vh" }} />
      <div class="card-body" >
        <h5 class="card-title">Period Tracker</h5>
        <p class="card-text">description of period tracker</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={chat} class="card-img-top" alt='chat' style={{ height:"10%", width:"8vh" }}/>
      <div class="card-body">
        <h5 class="card-title">Speak Your Mind</h5>
        <p class="card-text">escription of chat</p>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card">
      <img src={growth} class="card-img-top" alt='growth' style={{ height:"10%", width:"8vh" }}/>
      <div class="card-body">
        <h5 class="card-title">Grow At Your Own Pace</h5>
        <p class="card-text">description of your growth</p>
      </div>
    </div>
  </div>
</div>

      </div>
  )
}
