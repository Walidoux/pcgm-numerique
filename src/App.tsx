import { Route, Routes } from 'react-router-dom'

import { NavigationBar } from './components/NavigationBar'
import { About, Home, Savings, Settings, Search } from './pages'
import { routes } from './routes'

const App: React.FC = () => {
  const pageComponents = { About, Home, Savings, Settings, Search }

  return (
    <main className='m-3 max-w-[525px]'>
      <Routes>
        {routes.map((item, index) => {
          const Currentcomponent = pageComponents[item.title]
          return (
            <Route
              key={index}
              path={item.redirect}
              element={<Currentcomponent />}
            />
          )
        })}
      </Routes>

      <NavigationBar />
    </main>
  )
}

export default App
