import React from 'react'
import Userdocument from '../components/Userdocument'

interface userdocumentitem{
    username:string
    documentid:number;
    documentnumber:string;
    documentversion:string;
    training_complete_date:string;
}
interface u {
    id: number;
    username: string;
    email_address:string;
    firstname:string;
    surname:string;
    }


const DocumentsPage  = async () => {
    
    const user_c = await fetch(`http://localhost:8080/api/users/user/21`,);
    const current_user : u = await user_c.json();

    const res = await fetch(`http://localhost:8080/api/documents/getdocumentsbyuserid/21`,);
    const docs : userdocumentitem [] = await res.json();

   // tslint:disable-next-line:no-console  
    console.log(user_c.json());

    return (
    <div className='name'><b>{current_user.firstname}'s Documents List</b><div/>
        <ul>
            {/* {users.map(user =><li key= {user.id}>{user.username}</li>)} */}
            {docs.map(doc =>
            <li key={doc.documentid}>
                <Userdocument documentid={doc.documentid} documentnumber={doc.documentnumber} training_complete_date={doc.training_complete_date} 
                documentversion={doc.documentversion}/> 
            </li>)}
        </ul>
    </div>
  )
}  

export default DocumentsPage;