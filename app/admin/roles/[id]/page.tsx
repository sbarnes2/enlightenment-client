
import react from 'react';
import { useRouter } from 'next/navigation';

async function UserRoles({params}:any)  {

   
    type usertype = {id:Number,username:String,email_address:String,firstname:String,surname:String};
    const call = await fetch('http://localhost:8080/api/users/user/'+params.id);
    const user:usertype [] = await call.json();
    console.log(user);
    return(
        <div>
            <h5 className='text-5xl bold pt-10 items-center'>
                {user[0].firstname}{`'s Roles`}
            </h5>
            <div className='grid grid-cols-2'>
                
            </div>
        </div>
    );
}

export default UserRoles;