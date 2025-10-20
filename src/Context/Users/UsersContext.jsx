import { createContext ,useEffect,useState } from "react";
export let UserContext=createContext('')
export function UserContextProvider(props){

    let [userLogin,setUserLogin]=useState(null)
    let [userId,setUserId]=useState(null)
    


    useEffect(()=>{
            if(localStorage.getItem('IP')!==null){
                setUserLogin(localStorage.getItem('IP'))
            }
            if(localStorage.getItem('ID')!==null){
                setUserLogin(localStorage.getItem('ID'))
            }
    },[])
    return <UserContext.Provider value={{userLogin,setUserLogin ,userId,setUserId}}>
{props.children}

    </UserContext.Provider>
}
