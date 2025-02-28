
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import Row from './Components/Row'
import requests from './request'

function App() {


  return (
    <>
    {/* <Nav/> */}
    <Banner fetchURL={requests.fetchHorrorMovies}/>
    <Row title={"NETFLIX ORGINALS"} fetchURL={requests.fetchNetflixOriginals}/>
    <Row title={"TRENDING"} fetchURL={requests.fetchTrending}/>
    <Row title={"TOP RATED"} fetchURL={requests.fetchTopRated}/>
    <Row title={"ACTION MOVIES"} fetchURL={requests.fetchActionMovies}/>
    <Row title={"COMEDY MOVIES"} fetchURL={requests.fetchComedyMovies}/>
    <Row title={"HORROR MOVIES"} fetchURL={requests.fetchHorrorMovies}/>
    <Row title={"ROMANCE MOVIES"} fetchURL={requests.fetchRomanceMovies}/>
    <Row title={"DOCUMENTRIES"} fetchURL={requests.fetchDocumentaries}/>
   
    
    </>
  )
}

export default App
