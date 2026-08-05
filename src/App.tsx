import { useState } from 'react'
import Card from './components/Card.tsx'
import Footer from './components/Footer.tsx'
import baseToBase from './scripts/converter.ts';

function App() {
  const [startN, setStartN] = useState("0");
  const [startB, setStartB] = useState(2);
  const [finalB, setFinalB] = useState(10);

  return (
    <>
      <div className='font-mono'>
        <div className=''>
          <h1 className='text-center text-2xl bg-white text-gray-900 p-4 m-8 rounded-xl'>
            Binary Converter
          </h1>
        </div>

        <div className="flex flex-row flex-wrap gap-4 m-4">
          <div className="w-40 flex-1">
            <Card title="Input" value={startN} onChange={setStartN}></ Card>
          </div>
          <div className="w-40 flex-1">
            <Card title="Output" value={baseToBase(startN, startB, finalB)} onChange=''></ Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
