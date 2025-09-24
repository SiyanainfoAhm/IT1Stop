import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'

function App() {
  console.log('App component is rendering');
  
  return (
    <div>
      <h1>IT1Stop Application</h1>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App