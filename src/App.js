import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './providers/auth'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </Router>
  )
}

export default App
