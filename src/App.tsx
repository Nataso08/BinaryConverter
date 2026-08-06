import { useState } from 'react'
import Card from './components/Card.tsx'
import Footer from './components/Footer.tsx'
import baseToBase from './scripts/converter.ts';

function App() {
  const [startN, setStartN] = useState("0");
  const [startB, setStartB] = useState(2);
  const [finalB, setFinalB] = useState(10);

  function swapBase() {
    let temp: number = startB;
    setStartB(finalB);
    setFinalB(temp);
  }

  return (
    <>
      <div className='font-mono'>
        <div className=''>
          <h1 className='text-center text-2xl bg-white text-gray-900 p-4 m-8 rounded-xl'><b>
            Binary Converter
          </b></h1>
        </div>

        <div className="text-black flex flex-row flex-wrap gap-4 m-4">
          <div className="w-40 flex-1">
            <Card title="Input" value={startN} onValueChange={setStartN} base={startB} onBaseChange={setStartB}></ Card>
          </div>

          <button onClick={swapBase} className="
            text-2xl 
            bg-green-600 
            flex-none 
            w-12 
            h-12 
            rounded-full 
            self-center 
            hover:bg-green-700
            hover:scale-120
            hover:shadow-lg
            ">
          <b>⇄</b></button>
          
          <div className="w-40 flex-1">
          <Card title="Output" value={baseToBase(startN, startB, finalB)} onValueChange='' base={finalB} onBaseChange={setFinalB}></ Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
