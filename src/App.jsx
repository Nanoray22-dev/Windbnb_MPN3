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
            href='https://github.com/Nanoray22-dev/Windbnb_MPN3'
            className='text-[#eb5757]  underline hover:no-underline hover:transition-al'
            target='_blank'
            rel='noopener noreferrer'
          >
            Raysell
          </a>{' '}
          -devChallenges.io
        </footer>
      </div>
    </AppProvider>
  )
}

export default App
