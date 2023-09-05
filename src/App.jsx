import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import TvShows from "./components/TvShows"
import Movies from "./components/Movies"
import MyList from "./components/MyList"
import RecentlyAdded from "./components/RecentlyAdded"

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme
} from "darkreader"

enableDarkMode({
  brightness: 100,
  contrast: 90,
  sepia: 10
})

disableDarkMode()

// followSystemColorScheme(false)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/recentlyadded" element={<RecentlyAdded />} />
      </Routes>
    </Router>
  )
}

export default App
