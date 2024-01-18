import React, { useState, useContext } from 'react'
import Data from './stays.json'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isSubMenuLinkCityOpen, setIsSubMenuLinkCityOpen] = useState(true)
  const [isSubMenuLinkGuestOpen, setIsSubMenuLinkGuestOpen] = useState(false)
  const [data, setData] = useState(Data)

  const openSubMenu = () => {
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
    setIsSubMenuLinkGuestOpen(false)
    setIsSubMenuLinkCityOpen(true)
  }

  const openSubMenuCityLinks = () => {
    if (isSubMenuLinkGuestOpen) {
      setIsSubMenuLinkGuestOpen(false)
    }
    setIsSubMenuLinkCityOpen(true)
  }

  const openSubMenuGuestLinks = () => {
    if (isSubMenuLinkCityOpen) {
      setIsSubMenuLinkCityOpen(false)
    }
    setIsSubMenuLinkGuestOpen(true)
  }

  const filterData = (CityName, Guests) => {
    if (CityName !== '' && Guests === 0) {
      let filterData = Data.filter(
        (item) => item.city === CityName.split(', ')[0]
      )
      setData(filterData)
    }
    if (CityName === '' && Guests !== 0) {
      let filterData = Data.filter((item) => item.maxGuests <= Guests)
      setData(filterData)
    }

    if (CityName !== '' && Guests !== 0) {
      let filterData = Data.filter((item) => {
        return item.city === CityName.split(', ')[0] && item.maxGuests <= Guests
      })
      setData(filterData)
    }
  }

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuLinkCityOpen,
        openSubMenuCityLinks,
        isSubMenuLinkGuestOpen,
        openSubMenuGuestLinks,
        data,
        filterData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
