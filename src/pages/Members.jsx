import React from 'react'

const Members = () => {
  return (
    <div className='h-full'>
        <div className='flex p-10'>
            <div className='border w-full rounded-md overflow-hidden'>
                <div className='bg-gray-300 flex justify-between items-center p-6 font-bold'>
                    <div className='text-gray-500'>
                        <h1>Member</h1>
                    </div>
                    <div className='text-gray-500'>
                        <h1>Membership</h1>
                    </div>
                    <div className='text-gray-500'>
                        <h1>Payment method</h1>
                    </div>
                </div>
                
                <div className="flex">
                    <div className='flex'>
                        <div><img src="" alt="" /></div>
                        <div>
                            <h1 className='font-bold text-sm'>Fname Lname</h1>
                            <h3 className='text-xs'>Active Member</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members