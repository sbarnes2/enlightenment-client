import React from 'react'
import Usercard  from '../../../components/TeamUserCard';
import TeamUserCardContainer from '@/app/components/TeamUserCardContainer';


    
const UsersPage  = async ({params}:any) => {

    type teamname = {name:string};

    type currentUserType = {
        name:string,
        team_id:string,
        userid:string,
        username:string,
        manager: boolean,
        target_team_id?:string,
    };
    interface datavars  {data_users: currentUserType[], data_target_team_id:string } 

    const team_id = params.id;



    const res = await fetch('http://localhost:8080/api/users/all', { cache: 'no-store' });
    var users : currentUserType [] = await res.json();

    
    const team_res = await fetch('http://localhost:8080/api/team/getname/'+team_id,{cache:'no-store'});
    var team_name : teamname = await team_res.json(); 

    for(const element of users) {
        element.target_team_id = team_id;
    }

    return(    
        <div className='pt-10'>
            <p className='text-5xl font-bold'>{team_name.name}</p>
            <TeamUserCardContainer userdata={users}/>
        </div>
    );

}


export default UsersPage