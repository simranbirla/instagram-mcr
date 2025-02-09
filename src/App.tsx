import { Route, Routes, useLocation } from 'react-router';
import './App.css'
import Stories from './components/Stories'
import Story from './components/Story';
import { AnimatePresence } from 'motion/react';

function App() {
  const location = useLocation();


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Stories />} />
        <Route path="/stories/:username/:storyId" element={
          <Story />
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default App
