import namesData from "./babyNamesData.json";
import React, { useState } from "react";
import "./App.css";

interface KeyboardControlledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function KeyboardControlledInput(props: KeyboardControlledInputProps): JSX.Element {
  return (
    <>
      <input
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}


function App(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedMessage(event.target.value);
  };
  
  const classForNames = (gender: string) => {
    if (gender === "f") {
      return "girl";
    } else {
      return "boy";
    }
  };

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

  function filterObjectByInput(arr: MyObject[]): MyObject[] {
    const filteredArr = arr.filter((item) => item.name.toLowerCase().startsWith(typedMessage.toLowerCase()))
    return filteredArr
  }

  return (
    <div>
      <p>Baby Names App</p>
      <div className="searchBar">
        <KeyboardControlledInput 
          value={typedMessage}
          onChange={handleInputChange}
        />
      </div>
      
      {filterObjectByInput(sortObjectsByName(namesData)).map((item, index) => (
        
        <span className={classForNames(item.sex)} key={index}>
          {item.name}{" "}
        </span>

      ))}
    </div>
  );
}

export default App;
