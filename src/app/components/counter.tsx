'use client'

import React, { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

const Counter = () => {

    // const { isLoaded, userId, sessionId, getToken } = useAuth();

    const { isLoaded, isSignedIn, user } = useUser();
    console.log("counter COmponent");

    const [count, setCount] = useState(0);

    if (!isLoaded || !user) {
      return null;
    }


  return (
 
    <button onClick={() => setCount(count +1 )}>
        Clicked {count} times.
    </button>
  )
}

export default Counter