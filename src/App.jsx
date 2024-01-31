
import { RecoilRoot } from 'recoil'
import './App.css'
import { MainDashboard } from './components/MainDashboard'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainDashboard />
      </RecoilRoot>
    </>
  )
}

export default App
