
import './App.css'
import CARDS from './components/card.jsx'

function App() {
  const users=[{img: '#',name:'harsh'},{img: '#',name:'ansh'},{img: '#',name:'vuraj'}]

  return (
    <>
   {users.map((Element,idx)=>{
    return <div key={idx}>
      <CARDS img={Element.img} name={Element.name}/>
    </div>
        })}
    </>
  )
}

export default App
