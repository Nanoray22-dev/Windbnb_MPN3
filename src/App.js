import CardsList from './components/CardsList'
import Header from './components/Header'
import { AppProvider } from './components/Context'

function App() {
  return (
    <AppProvider>
      <div className='container md:container md:mx-auto'>
        <Header />
        <CardsList />
        <footer className='m-4 text-center'>
          created by-{' '}
          <a
            href='https://github.com/jyotip101/windbnb-project-in-react'
            className='text-[#eb5757]  underline hover:no-underline hover:transition-al'
            target='_blank'
            rel='noopener noreferrer'
          >
            jyoti-p
          </a>{' '}
          -devChallenges.io
        </footer>
      </div>
    </AppProvider>
  )
}

export default App
