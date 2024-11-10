
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

createRoot(document.getElementById('root')).render(<>
    <GlobalStyle/>
    <Router>
      <App />
    </Router>
</>)
