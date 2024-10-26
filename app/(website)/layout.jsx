import React from 'react'
import "@/app/globals.css"

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
                <body className='bg-default/10  font-mona text-black'>
                <main>{children}</main>
                </body>
    </html>
  )
}

export default RootLayout