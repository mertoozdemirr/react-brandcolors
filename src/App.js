import './App.css';
import './_assets/scss/reset.scss'
import { useEffect, useState } from 'react';
import MainContext from './MainContext';
import BrandsData from './Data/json/brands.json'
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Copied from './components/Copied/Copied'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Collection from './components/Collection/Collection';

function App() {

  let BrandsArray = []
  Object.keys(BrandsData).map(key => {
    BrandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(BrandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [copiedFadeIn, setCopiedFadeIn] = useState(false)
  const [search, setSearch] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toogleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopiedFadeIn(false)
    }, 1300)
    let setCopyTimer = setTimeout(() => {
      setCopied(false)
    }, 1500)
    return () => {
      clearTimeout(setCopyTimer)
      clearTimeout(timer)
    }
  }, [copied])


  useEffect(() => {
    setBrands(BrandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    copiedFadeIn,
    setCopiedFadeIn,
    search,
    setSearch,
    modalIsOpen,
    toogleModal
  }

  return (
    <div className='page-wrap'>
      <MainContext.Provider value={data}>
        {copied && (
          <Copied color={copied} />
        )}
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" exact element={<Content />} />
            <Route path="/collection/:slugs" element={<Collection />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
