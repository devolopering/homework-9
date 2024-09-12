'use client';
import React, { useEffect, useState } from 'react';

// Foydalanuvchi uchun interfeys yaratamiz
interface User {
  id: number;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<null | string>(null); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        console.log("error");
        
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    }

    fetchUsers();
  }, []);
  
  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
        {loading &&            
<div role="status" className="max-w-md mt-5 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-between">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

        }
    <div className='flex flex-col gap-5 my-5'>
      {users.map(user => (
        <div key={user.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
          </svg>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {user.name.firstname} {user.name.lastname}
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Email: {user.email}
          </p>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            City: {user.address.city}
          </p>
        </div>
      ))}
    </div>
    </div>
    
  );
}
