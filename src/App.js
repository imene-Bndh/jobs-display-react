
import './App.css';
import Info from "./components/Info.js"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <div className = "header"></div>
      
      { 
        data.map((ele)=>(
          <Info dt={ele} key = {ele.id}/>
        ))
      }
    </div>
  );
}

export default App;
