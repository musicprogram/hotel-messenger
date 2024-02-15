
import { RecoilRoot } from 'recoil'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { ChatMainDashboard } from './components/chatUX/ChatMainDashboard'
import { MainLandBoard } from './components/land/MainLandBoard'
import { AdminDashboard } from './components/admin/AdminDashboard';
import { IndexComponents } from './components/IndexComponents';

function App() {

  return (
    <RecoilRoot>
      <IndexComponents />
    </RecoilRoot>
  )
}

export default App
