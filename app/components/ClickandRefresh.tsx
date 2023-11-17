'use client'
import { useRouter } from 'next/navigation';



const ClickandRefresh = (name:string) => {

   
    const router = useRouter();
    
    const handleRefresh = () =>{
        router.refresh();
    }
    
    return (
        <>
            <button onClick={()=>handleRefresh()}>${name}</button>
        </>
    );
}


export default ClickandRefresh;