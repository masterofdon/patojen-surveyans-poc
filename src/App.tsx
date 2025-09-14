import './App.css'
import { AppLayout } from './components/AppLayout'
import { Provider } from './provider'
import { AppRoutes } from './routes'


function App() {


  return (
    <Provider>
      <AppLayout
        collapsed={false}
      >
        <AppRoutes />
      </AppLayout>
    </Provider>
  )
}

export default App
