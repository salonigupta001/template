import React from 'react'
import image from "../MyComponents/images/fika-continue.png";
import growth from "../MyComponents/images/growth.png";
import pt from "../MyComponents/images/periodtracker.png";
import chat from "../MyComponents/images/chat.png";

export const Team = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`,margin:0 ,backgroundRepeat:"no-repeat", backgroundSize:"cover",  height:"100vh", width:"500vh", backgroundposition: "center"}}>
    <h2 style={{justifyItems: "center"}}>OurService</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
  <div class="card">
    <img src={pt} style={{ height:"10%", width:"8vh" }} />
    <div class="card-body" >
      <h5 class="card-title">Kaavya Saxena</h5>
      <p class="card-text">Developer</p>
    </div>
  </div>
</div>
<div class="col">
  <div class="card">
    <img src={chat} class="card-img-top" style={{ height:"10%", width:"8vh" }}/>
    <div class="card-body">
      <h5 class="card-title">Sakshi Pandey</h5>
      <p class="card-text">Developer</p>
    </div>
  </div>
</div>

<div class="col">
  <div class="card">
    <img src={growth} class="card-img-top" style={{ height:"10%", width:"8vh" }}/>
    <div class="card-body">
      <h5 class="card-title">Saloni Gupta</h5>
      <p class="card-text">Developer</p>
    </div>
  </div>
</div>
</div>

    </div>
    
  )
}


// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


   


