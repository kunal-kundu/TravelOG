import logo from './logo.svg';
import NavBar from "./NavBar"
import Destination from "./Destination"
import data from "./data"
import "./style.css"

function App() {
  const create = data.map(item => {
    return (
        <Destination
        location ={item.location}
        startDate={item.startDate}
        endDate = {item.endDate}
        googleMapsUrl ={item.googleMapsUrl}
        imageUrl={item.imageUrl}
        title={item.title}
        description ={item.description}
        />
    )
})

return (
    <div >
    <NavBar />
    <div>
    {create}
    </div>   
    </div>
)
}

export default App;
