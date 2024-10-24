import React from 'react'
import "@/app/globals.css"
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout