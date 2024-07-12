import './App.css'
import Component1 from './components/Component1'
import AuthState from './context/AuthState'

function App() {

  return (
    <>
    <AuthState>
      <Component1/>
    </AuthState>
    </>
  )
}

export default App
