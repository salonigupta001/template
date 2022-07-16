import './App.css';
import Header from './MyComponents/Header';
import {OurService} from './MyComponents/OurService';
import {Team} from './MyComponents/Team';
import {Footer} from './MyComponents/Footer';
import {Main} from './MyComponents/first';
// import {PeriodTracker} from './MyComponents/PeriodTracker';
// import {ChatApp} from './MyComponents/ChatApp';
// import {YourGrowth} from './MyComponents/YourGrowth';

function App() {
  return (
   <>
      <Header title="FIKA"/>
      <Main/>      
      {/* <PeriodTracker/> 
      <ChatApp/>
      <YourGrowth/> */}
      <OurService/>
      <Team/>
      <Footer/>   
   </>
  );
}

export default App;
