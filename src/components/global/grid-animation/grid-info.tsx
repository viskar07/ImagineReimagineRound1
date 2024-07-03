import React from 'react'

type Props = {
    heading:string,
    description:string
}

const Heading = (props: Props) => {
  return (
    <div className="absolute  w-full flex flex-col items-start justify-center gap-1 z-50">
    <h1 className='card-heading'>{props.heading}</h1>
    <p className='card-paragraph font-satoshi-medium break-words w-[350px]'>{props.description}</p>
</div>
  )
}

export default Heading