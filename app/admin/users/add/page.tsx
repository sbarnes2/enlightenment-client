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
        username: register('username', { required: 'Username is required' })/* ,
        password: register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
        }) */
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

    return (
        <div className="card items-center">
            <h4 className="card-header">Add New User</h4>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="MB-3">
                        <label className="form-label">First Name</label>
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
                    <button disabled={formState.isSubmitting} className="btn btn-primary">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                        Add User
                    </button>
                    <Link href="/" className="btn btn-link">Cancel</Link>
                </form>
            </div>
        </div>
    );
};


export default AddNewUser;

