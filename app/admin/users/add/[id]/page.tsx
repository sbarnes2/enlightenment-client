'use client';

import Link from "next/link";
import { useForm } from 'react-hook-form'; 

const AddNewUser = () =>{

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const fields ={
        firstName: register('firstName', { required: 'First Name is required' }),
        lastName: register('lastName', { required: 'Last Name is required' }),
        username: register('username', { required: 'Username is required' })
    }

    async function onSubmit({team}:any){
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
            body:JSON.stringify(team)
        });

        return response.json();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
        <div className="card w-96 bg-base-100 shadow-xl">
            <h4 className="card-header"><div className="text-2xl">Add New Team Member</div></h4>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="MB-3 Grid grid-cols-2">
                        <label className="form-label col-span-1">First Name</label>
                        <input {...fields.firstName} type="text" className={`form-control ${errors.firstName ? 'is-valid' : ''}`} />
                        <div className="invalid-feedback">{errors.firstname?.message?.toString()}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input {...fields.lastName} type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.lastName?.message?.toString()}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input {...fields.username} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
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
    );
};


export default AddNewUser;

