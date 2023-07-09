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

  interface MyObject {
    id: number;
    name: string;
    sex: string;
  }

  function sortObjectsByName(arr: MyObject[]): MyObject[] {
    const sortedArr = [...arr];
    sortedArr.sort((a, b) => a.name.localeCompare(b.name));
    return sortedArr;
  }
  
  
  return(
    <div>
      <p>Baby Names App</p>
      
      {sortObjectsByName(namesData).map((item, index) => (
        <span className={classForNames(item.sex)} key={index}>{item.name} </span>
    )) 
    }
   </div>
  ) 
  
}

export default App;
