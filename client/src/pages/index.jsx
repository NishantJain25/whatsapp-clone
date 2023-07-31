import Main from "@/components/Main";
import { useStateProvider } from "@/context/StateContext";
import React, { useEffect } from "react";


function index() {
    const [{userInfo}, dispatch] = useStateProvider()
    useEffect(() => {
        console.log(userInfo)
    },[])
    return <Main />;
  }
  
export default index;