// import type {GetServerSideProps} from 'next'


type DocumentCardItem = {
    id: number;
    documentname: string; 
    documentcode: string;
    documenttype: string;
    documentnumber: string;
    risklevel: string;
    doc_id:number;
}

interface uAPI {
    id: number;
    username: string;
    email_address:string;
    firstname:string;
    surname:string;
    manager_id:number;
    logo:string;
    team_id:number;
    team_name:string;
    job_title:string;
};

type currentUserType = {
    name:string,
    team_id:string,
    userid:string,
    username:string,
    manager: boolean,
    target_team_id:string,
};


interface datavars  {data_users: currentUserType[], data_target_team_id:string }