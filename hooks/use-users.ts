import { useEffect, useState } from "react";
const usersMocks = [
    {
        name:'Robo Cabulausers',
        email:'marcelo@gmail.com',
        createdAt: new Date()
    },
    {
        name:'Robo Cabulausers',
        email:'marcelo@gmail.com',
        createdAt: new Date()
    },
    {
        name:'Robo Cabulausers',
        email:'marcelo@gmail.com',
        createdAt: new Date()
    },
    {
        name:'Robo Cabulausers',
        email:'marcelo@gmail.com',
        createdAt: new Date()
    }
]

export function useUsers(){
    const [users, setUsers] = useState<any[]>([])
    useEffect(()=>{
        setUsers(usersMocks)
    },[])
    return {users, setUsers}
}