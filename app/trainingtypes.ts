// import type {GetServerSideProps} from 'next'

interface userdocumentstatusitem{
    userid:number;
/*     username:string;
    email_address:string; */
    documentqtid:string;
    documenttitle?:string;
    usercurrentrevision?:string;
    rev?:string;
};

interface u {
    id: number;
    username: string;
    email_address:string;
    firstname:string;
    surname:string;
};

interface user {
    id: number;
    username: string;
    email_address:string;
    logo:string;
    };