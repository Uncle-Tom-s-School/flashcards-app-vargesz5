import type { CardTpye } from "../App"

export async function GetData() 
{
    try{
        const res = await fetch("cards.json")
        if(!res.ok)
        {
            console.error("hibas")
            return[]
        }
        return await res.json() as CardTpye[]

    }catch(error){
        console.error("hiba")
        return[]
    }
}