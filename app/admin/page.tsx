import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Administration = () => {
  return (

    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
    
        <div className='grid gap-4 grid-flow-row grid-cols-2'>
          <div className='card w-96 bg-base-100 shadow-xl image-full'>
            {/* <figure><img src='team.png' alt='team'/></figure> */}
            <figure><Image src='/team.png' alt='team' width='200' height='200'/></figure>
            <div className='card-body card-actions justify-end items-center'><Link className='px-3 btn btn-outline' href='./admin/team'>Team</Link></div>
          </div>
          <div className='card w-96 bg-base-100 shadow-xl image-full'>
            {/* <figure><img src='users.png' alt='users'/></figure> */}

            <figure><Image src='/users.png' alt='user' width='200' height='200'/></figure>
            <div className='card-body card-actions justify-end items-center'><Link className='px-3 btn btn-outline' href='./admin/users'>Users</Link></div>
          </div>

        </div>
      </div>
  </div>
  </div>
  )
};

export default Administration