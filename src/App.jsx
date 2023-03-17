import AppInfo from './AppInfo/AppInfo'
import GLobalContext from './GlobalContext/GLobalContext'

function App() {
  return (
    <GLobalContext>
      <AppInfo/>
    </GLobalContext>
  )
}

export default App
