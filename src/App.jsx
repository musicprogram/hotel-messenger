
import { RecoilRoot } from 'recoil'
import './App.css'
import { MainDashboard } from './components/MainDashboard'
import { MainLandBoard } from './components/land/MainLandBoard'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainLandBoard />
      </RecoilRoot>
    </>
  )
}

export default App
