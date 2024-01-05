'use client';

import Link from "next/link";
import { useForm } from 'react-hook-form'; 
import React from "react";
import {useRouter} from 'next/navigation';


type team = {id:number,name:string};
type job = {id:number,team_id:number,name:string};

let teams:team[] = [{id:0,name:'none'}];
let jobs:job[] = [{id:0,team_id:0,name:'none'}]; 
let _team:team = {id:0,name:'none'};

async function getData(teamid:number = 4){

    const team_res = await fetch(`http://localhost:8080/api/team/getname/${teamid}`,{cache:'no-store'});
    _team = teams[0] = await team_res.json();

    console.log(JSON.stringify(teams))

    const jobs_res = await fetch('http://localhost:8080/api/team/roles/all',{cache:'no-store'});
    jobs = await jobs_res.json();
}

function ManageTeamRoles(params:any){

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const router = useRouter();
    console.log(JSON.stringify(params));

    const fields ={
        username: register('username', { required: 'Username is required' }),
        teamname: register('team', { required: 'Team name is required' }),
        JobTitle: register('title', { required: 'Job title is required' })
    }

    async function onSubmit(user:any){
        const response = await fetch(process.env.API_HOST_BASE+'/api/users/createuser',{
            method:'POST',
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers:{
                "content-type":"application/json"
            },
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body:JSON.stringify(user)
        });

        return response.json();
    }

    getData(params.id);

    return(

        

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                <div className="card w-96 bg-base-100 shadow-xl items-center">
                    <div className="card-header"><div className="text-2xl">Manage Team Roles</div></div>
                    <div className="card-body card-actions grid"> 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="container grid mx-auto px-10">
                                <div className="MB-3 col-span-1">
                                    <label className="form-label col-span-1">Team Name </label>
                                    <label className="col-span-2"> : </label>
                                    <label className="col-span-3"> {_team.name}</label>
                                    <div className="invalid-feedback">{errors.team?.message?.toString()}</div>
                                </div>
                                <div className="MB-3 py-5">
                                    <label className="form-label col-span-1">Role Title</label>
                                    <label className="col-span-2"> : </label>
                                    <select name="jobnames" className="ms-16 col-span-3">
                                        {jobs.map(
                                                job=><option key={job.id} value={job.id}>{job.name}</option>)
                                            }
                                    </select>
                                    {/* <input {...fields.JobTitle} type="text" className={`form-control ${errors.firstName ? 'is-valid' : ''}`} /> */}
                                    <div className="invalid-feedback">{errors.title?.message?.toString()}</div>
                                </div>
                            </div>
                            <div className="container mx-auto py-10 px-10">
                            <div className="space-y-3 py-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="btn btn-secondary" onClick={()=>{}}>Create new role</button>
                                    <button disabled={formState.isSubmitting} className="btn btn-primary">
                                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                                        Update
                                    </button>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTeamRoles;