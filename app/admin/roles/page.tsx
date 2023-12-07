import react from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'




async function AllRoles({params}:any){

    type roletype = {id:number,name:string,team_id:number};
    //type docstype = {team_id:number,team_name:string,job_id:number,Job_title:string,doc_id:string,documentnumber:string,documentname:string};
    
    const getrolesforteam = await fetch('http://localhost:8080/api/team/roles/all',{cache:'no-store'});
    const roles:roletype [] = await getrolesforteam.json();

    async function getTeamName(id:number){
        const result = await fetch('http://localhost:8080/api/team/getname/'+id,{cache:'no-store'});
        const team:any  = await result.json();
        console.log(JSON.stringify(team))
        return team.name;
    }

   // const getDocumentsForRole =  await fetch('http://localhost:8080/api/users/getjobdocuments/'+user[0].job_id,{cache:'no-store'});
    //const docs: docstype [] = await getDocumentsForRole.json(); 

    return(
        <div>
            <h5 className='text-5xl bold pt-10 items-center'>
                Roles
            </h5>
            <table className='table table-bordered'>
                <thead className='text-2xl'><tr><th className=''>Job Title</th><th>Team Name</th></tr></thead>
                <tbody>
                    {roles.map(role=>
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{getTeamName(role.team_id)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AllRoles;

