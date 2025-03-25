import React from 'react'

function NavBar({setFilterType,filterType}) {
  return (
    <>
    <section className='flex p-10 gap-8 bg-[#F4F5F9] text-[#636363]'>
      <div>Filter By:</div>
      <button onClick={()=>setFilterType('all')} className={`${filterType == 'all'?'bg-[#E1E4EA]':null} pl-3 pr-5 border-[#636363] rounded-xl`}>All</button>
      <button onClick={()=>setFilterType('unread')} className={`${filterType == 'unread'?'bg-[#E1E4EA]':null} pl-3 pr-5 border-[#636363] rounded-xl`}>Unread</button>
      <button onClick={()=>setFilterType('read')} className={`${filterType == 'read'?'bg-[#E1E4EA]':null} pl-3 pr-5 border-[#636363] rounded-xl`}>Read</button>
      <button onClick={()=>setFilterType('favourites')} className={`${filterType == 'favourites'?'bg-[#E1E4EA]':null} pl-3 pr-5 border-[#636363] rounded-xl`}>Favourites</button>
    </section>
    </>
  )
}

export default NavBar


