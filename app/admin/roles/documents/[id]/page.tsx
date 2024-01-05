import React from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form'; 




function ManageRoleDocuments({params}:any){
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;


    const fields ={
        firstName: register('firstName', { required: 'First Name is required' }),
        lastName: register('lastName', { required: 'Last Name is required' }),
        username: register('username', { required: 'Username is required' })
    }

    async function onSubmit(user:any) {
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
                    <div className="card-header">
                        <div className="text-2xl">Manage Role Documents</div>
                    </div>
                    <div className="card-body card-actions grid">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default ManageRoleDocuments;