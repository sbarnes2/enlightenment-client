// import type {GetServerSideProps} from 'next'


type DocumentCardItem = {
    id: number;
    documentname: string; 
    documentcode: string;
    documenttype: string;
    documentnumber: string;
    risklevel: string;
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

