import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { getAccountUser } from './utils/users.api'
import { useAuth } from './hooks/useAuth'

function App() {
  const { setAuth, appLoading, setAppLoading } = useAuth();

  useEffect(() => {
    const fetchAccountUser = async () => {
      setAppLoading(true);

      const res = await getAccountUser();

      if (res && res.account) {
        setAuth({
          isAuthenticated: true,
          user: {
            username: res.account.username,
            email: res.account.email,
            role: res.account.role,
          }
        })
      }

      setAppLoading(false);
    }

    fetchAccountUser();
  }, [])

  return (
    <div className='min-h-screen flex bg-slate-50'>
      {appLoading === true ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* Header */}
          < Header />

          <main className='flex-1 mt-20 py-5'>
            <Outlet />

            {/* Footer */}
            {/* <Footer /> */}
          </main>
        </>
      )}
    </div>
  )
}

export default App