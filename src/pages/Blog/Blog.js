import React, { useContext } from 'react'
import { Context } from '../../Store/AppContext'

export const Blog = () => {
    const {text} = useContext(Context)
    const {setText} = useContext(Context)
    return (
        <>
        <div>{text}</div>
        <div className='border' onClick={() => setText('buenas')}><p>Hola</p></div>
        </>
    
  )
}
export default Blog