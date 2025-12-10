import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen flex bg-slate-50'>
      {/* Header */}
      <Header />

      <main className='flex-1 mt-20 py-5'>
        <Outlet />

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  )
}

export default App