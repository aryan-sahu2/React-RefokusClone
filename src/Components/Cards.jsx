import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-20 flex gap-4">
            <Card width={"basis-1/3"} head={false} para={true}></Card>
            <Card width={"basis-2/3"} head={true} para={true} hoverProp="true"></Card>
        </div>
    </div>
  )
}

export default Cards