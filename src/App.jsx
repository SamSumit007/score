//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [scr, setScr] = useState({
  Score: 76,
Wicket: 2,
Ball: 50,

});
const Score= scr.Score
const Wicket= scr.Wicket
const Ball= scr.Ball
var overs =  (Ball/6).toFixed(1)
console.log(overs)

const Change=(value,title)=>{
  if(title==="Score"){
    if(Score<=0&&value===-1)
    {
      return 
    }else{
      setScr(prevState =>{
        return {...prevState,Score:prevState.Score+value}
      })
    }
  }else if(title==="Wicket")
  {
    if(Wicket<=0&&value===-1)
    {
      return 
    }else{
      setScr(prevState =>{
        return {...prevState,Wicket:prevState.Wicket+value}
      })
    }
    
  }else if(title==="Ball")
  {
    if(Ball<=0&&value===-1)
    {
      return 
    }else{
      setScr(prevState =>{
        return {...prevState,Ball:prevState.Ball+value}
      })
    }
  }
}

if(Score === 100){
  return  <h1>India won the match</h1>
}

if(Wicket=== 12){
  return <h>All Out</h>
}

if(overs > 50){
  return <h1> All Over ends</h1>
}





  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{Score}
          <h1 className="scoreCount">
            {
              // show "score" here
              Score.scr
            }
          </h1>
        </div>
        <div>
          Wicket:{Wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
              Wicket.scr
            }
          </h1>
        </div>

        <div>
          Over:{overs}
          <h1 className="overCount">
            { 
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          Change(1,"Score")
        }}>Add 1</button>
        <button className="addScore4"onClick={()=>{
          Change(4,"Score")
        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
          Change(6,"Score")
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          Change(1,"Wicket")
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */
          Ball.scr

        }
        <button onClick={()=>{
          Change(1,"Ball")
        }}>Add 1</button>
      </div>
      <div>
   <h1 className="scoreCount"></h1>
</div>
      
    </div>
  );
}

export default App;
