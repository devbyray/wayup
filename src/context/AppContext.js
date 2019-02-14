import { createContext } from 'react'

const AppContext = createContext({
    electron: true
})

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer