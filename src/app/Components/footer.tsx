import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <main className='flex-grow'>

        </main>

        <footer className='bg-green-900 py-7 text-center text-white text-2xl'>&copy; MobileHub

       <ul className='flex gap-3 justify-center font-serif'>
            
        <Link href="https://github.com/AishaKhalid786">Github</Link>
        <Link href="https://www.linkedin.com/in/aisha-khalid-756501340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</Link>
        
        </ul>
        </footer>

      
    </div>
  )
}

export default Footer
