import Card from './components/Card.tsx'
import Footer from './components/Footer.tsx'

function App() {
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
            <Card title="Input" cardId="input" />
          </div>
          <div className="w-40 flex-1">
            <Card title="Output" cardId="output" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
