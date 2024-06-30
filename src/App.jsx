import './App.css'
import Navbar from './components/Navbar'
import Location from './components/Location'
import locations from './locations'

function App() {

  const locationCards = locations.map(location => 
                      <Location key ={location.id}
                                location = {location}
                      /> 
                     
    )
  return (
    <>
     <Navbar />
     {locationCards}
    </>
  )
}

export default App
