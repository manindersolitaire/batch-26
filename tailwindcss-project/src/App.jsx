import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex gap-5 mt-10 mx-auto'>
     {/* <h1 className='text-center text-white bg-gray-700 p-10'>Hello Everyone</h1> */}
     <Card imageUrl='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Black Cat with glasses'/>
     <Card imageUrl='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card imageUrl='https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
