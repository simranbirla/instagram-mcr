import { Route, Routes, useLocation } from 'react-router';
import './App.css'
import Stories from './Stories'
import Story from './Story';

function App() {
  const location = useLocation();


  return (
    <Routes location={location} key={location.pathname} >
      <Route path='/' element={<Stories />} />
      <Route path="/stories/:username/:storyId" element={<Story />} />
    </Routes>


  )
}

export default App
