import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
        <div>
            <h2>Freatured Product Section</h2>
        </div>
    </div>
  )
}

export default layout