import React, { createContext, useContext } from 'react'

const BaseContext = createContext('')
const BaseDomainContext = ({children}) => {

  
  const value ='https://academics.newtonschool.co/'
  return (
    <div>
     <BaseContext.Provider value={value}>
        {children}
     </BaseContext.Provider>
    </div>
  )
}

export const useBaseApi = ()=> useContext(BaseContext)

export default BaseDomainContext;