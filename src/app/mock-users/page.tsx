import React from 'react'

import { revalidatePath } from 'next/cache';

import { auth, currentUser } from '@clerk/nextjs/server';

type MockUser = {
    id: number,
    name: string
}

const Page = async () => {

    const authObject = await auth();
    const userObj = await currentUser();

    console.log(authObject, userObj);

    const res = await(fetch("https://67e957e6bdcaa2b7f5b92407.mockapi.io/users"));

    const users = await res.json();

    async function addUser(formData: FormData) {
        "use server"

        const name = formData.get("name")

        const res = await fetch("https://67e957e6bdcaa2b7f5b92407.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {name} )
        });

        const newUser = await res.json();

        revalidatePath('/mock-users');

        console.log(newUser);
    }

  return (
    <div className='py-10'>
        <form className='mb-4' action={addUser}>
            <input type='text' name='name' required className='border p-2 mr-2'>
            </input>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Add User
            </button>
        </form>
        <div className='grid grid-cols-4 gap-4 py-10'>
            {users.map(( user: MockUser ) => (
                <div key={user.id} className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
                    {user.name}
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Page