
import './App.css';
import ColorItem from './component/ColorItem';
import { useState } from 'react';

function App() {
  const   colors = ['red','yellow','green']
  const [changle,setChangle] = useState('red');
  return (
    <div className="App">
      {colors.map((color,index) => {
        return <ColorItem color={color} changle={changle} setChangle={setChangle}/>;
      })}
      
    </div>
  );
}

export default App;
