
import react from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Atlassian from 'next-auth/providers/atlassian';

async function UserRoles({params}:any)  {
   
    type usertype = {userid:Number,username:String,email_address:String,firstname:String,surname:String,name:string,team_id:number,job_id:number,manager:boolean};
    type docstype = {team_id:number,team_name:string,job_id:number,Job_title:string,doc_id:string,documentnumber:string,documentname:string};
    
    const call = await fetch('http://localhost:8080/api/users/user/'+params.id,{cache:'no-store'});
    const user:usertype [] = await call.json();

    const getDocumentsForRole =  await fetch('http://localhost:8080/api/users/getjobdocuments/'+user[0].job_id,{cache:'no-store'});
    const docs: docstype [] = await getDocumentsForRole.json(); 

    return(
        <div>
            <h5 className='text-3xl bold pt-10 items-center'>
                {user[0].firstname}{`'s Roles - ${user[0].name}`}
            </h5>
            <h3 className='text-2xl pt-10 pb-10'>Role Documents</h3>
            <table className='table table-bordered'>
                <thead className='text-2xl'><tr><th className=''>Document Number</th><th>link</th><th>Document Name</th></tr></thead>
                <tbody>
                    {docs.map(doc=>
                        <tr key={doc.doc_id}>
                            <td>{doc.documentnumber}</td>
                            <td><Link href={{pathname:'https://mybinxhealth.qt9app1.com/documents.aspx',query: {docid: doc.doc_id}}}>link</Link></td>
                            <td>{doc.documentname}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserRoles;