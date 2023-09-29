import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs' >
            &copy; 2023 Racim. All Rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website: </span> 
            Built with React & Next.Js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend & Vercel. 
        </p>
    </footer>
  )
}
