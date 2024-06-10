import { useEffect, useState } from "react"

const UseWork = () =>{
    const [work,setWork] =useState([])
    const [loading,setLoading] =useState(true)
    useEffect(() => {
        fetch('http://localhost:8000/work')
            .then(res => res.json())
            .then(data => {
                setWork(data),
                setLoading(false)
            })

    }, [])
    return [work,loading]

}

export default UseWork
