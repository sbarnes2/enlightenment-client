'use client';

import Link from "next/link";
import { useForm } from 'react-hook-form'; 
import React from "react";
import {useRouter} from 'next/navigation';



function ManageTeamRoles(params:any){

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    type team = {id:number,teamname:string};
    type job = {id:number,jobname:string};

    const router = useRouter();


    const teams:team [] = params.teams===undefined?[{id:0,teamname:'no teams yet'}]:params.teams;
    const jobs:job [] = params.jobs===undefined?[{id:0,jobname:'no jobs yet'}]:params.jobs;;

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

    return(


        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-header"><div className="text-2xl">Manage Team Roles</div></div>
                    <div className="card-body card-actions grid">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-6">
                                <div className="MB-3 Grid grid-cols-3">
                                    <label className="form-label col-span-1">UserName</label>
                                    <input {...fields.username} type="text" className={`form-control ${errors.firstName ? 'is-valid' : ''}`} />
                                    <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                                </div>
                                <div className="MB-3 Grid grid-cols-3">
                                    <label className="form-label col-span-1">Team Name</label>
                                    <select name="teamnames" className="ms-8">
                                        {teams.map(
                                            team=><option key={team.id} value={team.id}>{team.teamname}</option>)
                                            }
                                    </select>
                                    <input {...fields.teamname} type="text" className={`form-control ${errors.firstName ? 'is-valid' : ''}`} />
                                    <div className="invalid-feedback">{errors.team?.message?.toString()}</div>
                                </div>
                                <div className="MB-3 Grid grid-cols-3">
                                    <label className="form-label col-span-1">Job Title</label>
                                    <select name="jobnames" className="ms-16">
                                        {jobs.map(
                                                job=><option key={job.id} value={job.id}>{job.jobname}</option>)
                                            }
                                    </select>
                                    <input {...fields.JobTitle} type="text" className={`form-control ${errors.firstName ? 'is-valid' : ''}`} />
                                    <div className="invalid-feedback">{errors.title?.message?.toString()}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <button disabled={formState.isSubmitting} className="btn btn-primary">
                                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                                    Update
                                </button>
                                  <Link href="/" className="btn btn-link">Cancel</Link>
                                </div>
                            </form>
                            <div className="space-y-3 py-6">

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="btn btn-secondary" onClick={()=>{}}>Add Role Title</button>
                                    <button className="btn btn-secondary" onClick={()=>{}}>Add Team</button>
                                </div>
                            </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}




export default ManageTeamRoles;