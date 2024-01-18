import React, { useState } from 'react'
import FormInput from './FormInput'
import { useGlobalContext } from './Context'

const Submenus = ({ items }) => {
  const { closeSubMenu, isSubMenuLinkCityOpen, isSubMenuLinkGuestOpen } =
    useGlobalContext()

  let guestsNumber
  const [city, setCity] = useState('')
  const [childNumber, setChildNumber] = useState(0)
  const [adultsNumber, setAdultsNumber] = useState(0)

  return (
    <>
      <div className='flex flex-col h-46 absolute top-0 left-0 w-full z-10 shadow  pt-8 bg-[#fff] p-4 transition-all '>
        <p className='md:hidden visible  m-4 mt-[-1rem] ml-[0.5rem]  transition-all cursor-pointer z-20'>
          Edit your search
        </p>
        <button
          className=' md:hidden visible absolute top-[1rem] right-[2rem] transition-all cursor-pointer z-20'
          onClick={closeSubMenu}
        >
          <i className='material-icons  font-bold '>close</i>
        </button>
        <FormInput
          city={city}
          setCity={setCity}
          guestsNumber={(guestsNumber = adultsNumber + childNumber)}
        />
        <div className='flex sm:flex-row flex-col ml-4 '>
          <div className='w-[50%] transition'>
            {isSubMenuLinkCityOpen && (
              <div className=''>
                {items.map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setCity(item)
                      }}
                      key={index}
                      className='text-[#4F4F4F] transition  my-8 w-max   flex cursor-pointer hover:text-[#eb5757]'
                    >
                      <i className='material-icons  '>location_on</i>
                      {item},
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <div className='md:w-[100%]   '>
            {isSubMenuLinkGuestOpen && (
              <>
                <div className=' '>
                  <h1 className='font-medium text-[20px]'>Adults</h1>
                  <p className='text-[#0000004d]  '>13 or above</p>
                  <div className='my-4 flex w-fit items-center justify-center'>
                    <button
                      className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex '
                      onClick={() =>
                        setAdultsNumber(
                          adultsNumber >= 10
                            ? (adultsNumber = 10)
                            : adultsNumber + 1
                        )
                      }
                    >
                      <i className='material-icons'>add</i>
                    </button>
                    <p className='m-2'>{adultsNumber}</p>
                    <button
                      className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex'
                      onClick={() =>
                        setAdultsNumber(
                          adultsNumber <= 0
                            ? (adultsNumber = 0)
                            : adultsNumber - 1
                        )
                      }
                    >
                      <i className='material-icons'>remove</i>
                    </button>
                  </div>
                </div>
                <div className=''>
                  <h1 className='font-medium text-[20px]'>Children</h1>
                  <p className='text-[#0000004d]'> Ages 2-12</p>
                  <div className='my-4 flex w-fit items-center justify-center'>
                    <button
                      className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex '
                      onClick={() =>
                        setChildNumber(
                          childNumber >= 10
                            ? (childNumber = 10)
                            : childNumber + 1
                        )
                      }
                    >
                      <i className='material-icons'>add</i>
                    </button>
                    <p className='m-2'>{childNumber}</p>
                    <button
                      className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex'
                      onClick={() =>
                        setChildNumber(
                          childNumber <= 0 ? (childNumber = 0) : childNumber - 1
                        )
                      }
                    >
                      <i className='material-icons'>remove</i>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Submenus
