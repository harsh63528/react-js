
import './App.css'

function App() {
  return (
    <>
      <div className="container flex m-0 p-0 h-screen w-screen">
        <div className="input flex flex-col justify-center items-center h-full w-1/2 bg-amber-500 ">

          <form className='flex flex-col bg-gray-500'>
            <input type="text" name="text" id="input" placeholder='enter the note' />
            <textarea></textarea>
            <input type="date" name="date" id="date" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="result bg-gray-500 w-1/2 h-full">

          <div className="cards h-8 w-4s bg-amber-600">
            <h1>hi</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
