import navValues from "@/helpers/navValues"
import Banner from "./Banner"

import  React, { useCallback, useState } from "react"
import ComponentPicker from "./componentPicker"
//creating navigation context
const navigationContext=React.createContext(navValues.home)


const App=()=>
{
//wrapper function
//useCallback memoizes function,useMemo memoizes result of the function
//useCallback prevents component re-render unless its prop is changed
const navigate=useCallback((navTo,param)=>
{
    setNav({current:navTo,param,navigate})
},[])

    const[nav,setNav]=useState({current:navValues.home,navigate})

    return(
        <navigationContext.Provider value={nav}>
      <div>

<Banner>
    {/* <div> Providing houses all over the world!</div> */}
    </Banner>
 <ComponentPicker currentNavLocation={nav.current}/>
        </div>
        </navigationContext.Provider>
  
    
    )
}
export {navigationContext};
export default App