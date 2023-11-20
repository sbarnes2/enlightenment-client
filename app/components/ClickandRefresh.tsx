'use client'
import { useRouter } from 'next/navigation';



const ClickandRefresh = () => {

   
    const router = useRouter();
    
    const handleRefresh = () =>{
        router.refresh();
    }
    
    return (
        <>
            <button onClick={()=>handleRefresh()}></button>
        </>
    );
}


export default ClickandRefresh;