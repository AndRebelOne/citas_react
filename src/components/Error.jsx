import React from 'react'
import { useState } from 'react'

export const Error = ({children}) => {
    return (
        <div className='bg-red-800 border-red-400 text-white px-4 py-3 rounded uppercase text-center font-bold mb-3' role='alert'>
            <span className='block sm:inline'>{children}</span>
        </div>

    )
}
