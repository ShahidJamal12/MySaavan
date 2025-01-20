import { useState } from 'react'
import './App.css'
import LandingPage from './Components/MainComponents/LandingPage'
import { useEffect } from 'react'
import { createContext } from 'react'
const landingSongs = createContext()
function App() {
  const [songs,setSongs] = useState()
  const getData =  async () =>{
    let data = await fetch("https://v1.nocodeapi.com/shahid12/spotify/hLEqqlsWDJInecWv/browse/new?country=India&perPage=20")
    let jsonData = await data.json()
    console.log(jsonData.albums.items)
    setSongs(jsonData.albums.items)
  }
  useEffect(() => {
    
    return () => {
      getData()
    };
  }, []);
  return (
    <>
     <landingSongs value={songs}>
     <LandingPage/>
     </landingSongs>
    </>
  )
}

export default App
export {landingSongs};