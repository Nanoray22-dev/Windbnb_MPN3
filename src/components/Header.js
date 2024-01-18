import React from 'react'
import logo from '../logos/logo.png'
import { useGlobalContext } from './Context'
import Data from './stays.json'
import Submenus from './Submenus'

const items = [...new Set(Data.map((item) => item.city + ', ' + item.country))]

const Header = () => {
  const { isSubMenuOpen, openSubMenu } = useGlobalContext()

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between m-4 bg-[#fff]'>
        <a
          href='https://jyotip101.github.io/windbnb-project-in-react/'
          className='p-3'
        >
          <img src={logo} alt='logo' />
        </a>

        <div
          onMouseOver={openSubMenu}
          className='flex   transition  rounded-2xl border-0 m-1 shadow-md hover:shadow-none focus:shadow-none'
        >
          <input
            className=' md:w-36 border-r-2 hover:w-full w-full outline-none  p-3 text-[#000] '
            type='text'
            placeholder='Helsinki, Finland'
            name='city'
          />
          <input
            className='md:w-32 w-full border-r-2 text-[#000]  outline-none  p-3 '
            type='text'
            placeholder='Add guests'
            name='guest'
          />
          <button className='flex  md:w-full justify-start outline-none  p-3  text-[#eb5757]'>
            <i className='material-icons'>search</i>
          </button>
        </div>
      </div>
      {isSubMenuOpen && <Submenus items={items} />}
    </>
  )
}

export default Header
