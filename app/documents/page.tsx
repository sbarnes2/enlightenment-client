import React from 'react'
import Userdocument from '../components/Userdocument'

interface userdocumentstatusitem{
    userid:number;
    username:string;
    email_address:string;
    documentqtid:string;
    usercurrentrevision:string;
    rev:string;
};

interface u {
    id: number;
    username: string;
    email_address:string;
    firstname:string;
    surname:string;
};

function handleClick (){
    console.log('clicked');
}


const DocumentsPage  = async () => {
    
/*     const user_c = await fetch(`http://localhost:8080/api/users/user/21`,);
    const current_user : u [] = await user_c.json();
 */
    const userid:number = 21;
    const res = await fetch(`http://localhost:8080/api/documents/getdocumentsbyuserid/${userid}`,);
    const docs : userdocumentstatusitem [] = await res.json();

    console.log('number of user documents : '+docs.length);
    console.log(docs[23]);
    return (
    <div>
        <p>Please Review the following documents :</p>
        <br></br>
            <table >
                <thead><tr><th>Document Number</th><th>Current Document Revision</th><th>Target Document Revision</th></tr></thead>
                <tbody>
                {docs.map(doc =>
                    <tr key={doc.documentqtid}>
                        <td>{doc.documentqtid}</td>
                        <td className='item-doc-version'>{doc.usercurrentrevision}</td>
                        <td className='item-doc-version'>{doc.rev}</td>
                        <td><button className='btn btn-blue' onClick={handleClick} >Reviewed</button></td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>
  )
}  

export default DocumentsPage;