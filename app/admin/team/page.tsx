import React from "react";


interface manager  {
    id:number;
    username:string;
    email_address:string;
    firstname:string;
    surname:string;
}

interface user {
    id: number;
    username: string;
    email_address:string;
    }


const Managers = async ()=>{

    const manager_res = await fetch('http://localhost:8080/api/users/getmanagers',);
    const managers : manager [] = await manager_res.json();

    const user_c = await fetch(`http://localhost:8080/api/users/all`,);
    const current_user : user [] = await user_c.json();

return (
    <div>
        <h1>Team Administration</h1>

        <details className="dropdown">
            <summary className="m-1 btn">Managers</summary>
            <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                {
                    managers.map(manager=><li key={manager.id} className="">{manager.username}</li>)
                }
            </ul>
        </details>

        <table className="table table-bordered">
            <thead><tr><th>User Name</th><th>In Team?</th></tr></thead>
            <tbody>
                {current_user.map(n_manager =>
                <tr key={n_manager.id}>
                    <td className="">{n_manager.username}</td><td><input type='checkbox' checked={false} className='checkbox' /></td>
                </tr>)};
            </tbody>
        </table>

    </div>
);

}


export default Managers;