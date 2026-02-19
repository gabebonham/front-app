import { useEffect, useState } from "react";
const itemMocks = [
    {
        name:'Robo Cabulausers',
        price: 343.43,
        sales: 22
    },
    {
        name:'Robo Cabulausers',
        price: 343.43,
        sales: 22
    },
    {
        name:'Robo Cabulausers',
        price: 343.43,
        sales: 22
    },
    {
        name:'Robo Cabulausers',
        price: 343.43,
        sales: 22
    }
]

export function useBots(){
    const [bots, setBots] = useState<any[]>([])
    useEffect(()=>{
        setBots(itemMocks)
    },[])
    return {bots, setBots}
}