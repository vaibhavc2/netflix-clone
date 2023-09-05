import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import TvShows from "./components/TvShows"
import Movies from "./components/Movies"
import MyList from "./components/MyList"
import RecentlyAdded from "./components/RecentlyAdded"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/RecentlyAdded" element={<RecentlyAdded />} />
      </Routes>
    </Router>
  )
}

export default App
