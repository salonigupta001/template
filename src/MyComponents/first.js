import React from 'react'
import image from "../MyComponents/images/fika-main.png";
// import useStyles from './firststyle';
// var sectionStyle = {
//   width: "100%",
//   height: "400vh",
//   backgroundImage: "url(" + { fika-main.png } + ")"
// };

export const Main = () => {
  // const classes = useStyles();
  return (
    
    <div className="container" style={{ backgroundImage:`url(${image})`,margin:0 ,backgroundRepeat:"no-repeat", backgroundSize:"cover",  height:"100vh", width:"550vh", backgroundposition: "center" }}>
      <h2>
        FIKA
      </h2>
      <p> Be Confident </p> 
      {/* <div className='button'>
        <button  type="button">Period Tracker</button>
        <button  type="button">Your Growth</button>
      </div> */}
      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-light" type="button">Period Tracker</button>
  <button class="btn btn-light" type="button">Your Growth</button>
</div>
    </div>
  )
}
