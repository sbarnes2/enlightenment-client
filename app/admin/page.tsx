
import Link from 'next/link';
import React from 'react';

const Administration = () => {
  return (
    <div><h1>Administration</h1>

      <Link className='px-3' href='./admin/team'>Team</Link>
      <Link className='px-3' href='./admin/users'>Users</Link>
      <Link className='px-3' href=''>Documents</Link>
    </div>
  )
};

export default Administration