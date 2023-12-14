import Dashboard from "./Dashboard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"


function App() {

  return (
    <div className="bg-[#F3F3F380] flex">
      <Navbar />
      <div className="flex flex-col">
        <SearchBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
