
import { useState } from "react";
import Footer from "./components/Footer";
import Input  from "./components/Input";
import Item from "./components/Item";
function App() {
  const [data,setData] = useState('')
  const [item,setItem] = useState([
    'Clean up bedroom',
    'Buy some milk',
    'Jogging',
    'Learn React',
    'Doing Excercies'    
  ])

  return (
    

    <div className="App">
      <Input 
        data={data} 
        setData={setData} 
        setItem={setItem}
      />
      <Item item = {item} data={data}/>
      <Footer item={item}/>
    </div>
  );
}

export default App;
