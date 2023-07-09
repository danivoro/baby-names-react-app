import namesData from "./babyNamesData.json";
import "./App.css"

function App(): JSX.Element {

  const classForNames = (gender: string) => {
    if (gender === 'f'){
      return 'girl'
    } else {
      return 'boy'
    }
  }
  
  return(
    <div>
      <p>Baby Names App</p>
      
      {namesData.map((item, index) => (
        <span className={classForNames(item.sex)} key={index}>{item.name} </span>
    )) 
    }
   </div>
  ) 
  
}

export default App;
