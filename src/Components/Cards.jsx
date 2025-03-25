import React from 'react'
import CardBody from './CardBody'
import moment from 'moment'


function Cards({ data, handleOpenEmail, selectedId, emailBody, handleFavouriteClick }) {
    return (
        <>
            <section className={`${selectedId === null ? 'grid w-full' : 'grid grid-cols-[40%,60%] '}`}>
                <div className=' bg-[#F4F5F9] h-[900px] overflow-y-auto'>
                    {data.map((item) => (
                        <ul onClick={() => handleOpenEmail(item.id)} key={item.id} className=' pl-5 pr-5  pb-5 bg-[#F4F5F9] text-[#636363]'>
                            <li className={`${item.id == selectedId ? 'border-[#E54065]':'border-[#CFD2DC]'} ${item.isRead ? 'bg-[#F4F5F9]':'bg-[#F2F2F2]'} flex border-2  gap-5 p-5 rounded-md  shadow-md shadow-gray hover:border-[#E54065]  transition-all ease-in-out duration-500`}>

                                <div className='border-2 p-1  w-11 h-11  text-center text-2xl font-bold rounded-full bg-[#E54065] text-white'>{item.from.name.slice(0, 1).toUpperCase()}</div>

                                <div>
                                    <div>From: {item.from.name}  <strong>&lt;{item.from.email}&gt;</strong> </div>
                                    <div>Subject: <strong>{item.subject}</strong> </div>
                                    <div className='mt-2 mb-2'>{selectedId === null ? item.short_description : item.short_description.slice(0, 35) + ' ....'}</div>

                                    <div className='flex'>{moment(item.date).format("DD/MM/YYYY h:mma")}
                                    <div className='text-[#E54065] font-semibold pl-10'>{item.isFavourite ? 'Favourite' : ''}</div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    ))}

                </div>

                {selectedId && (
                    <section className='pr-10 pl-5 bg-[#F4F5F9]'>
                        <CardBody data={data} emailBody={emailBody} selectedId={selectedId} handleFavouriteClick={handleFavouriteClick} />
                    </section>
                )}

            </section>
        </>
    )
}

export default Cards