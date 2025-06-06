import React from 'react'
import moment from 'moment'
function CardBody({ emailBody, data, selectedId, handleFavouriteClick }) {

    return (
        <>
            <section className='border-2 border-gray rounded-lg text-[#636363] shadow-md shadow-slate-400'>
                <ul>
                    {data.map((item, index) => {
                        const isSelected = item.id === selectedId;
                        return isSelected ? (
                            <li key={index} className='p-6 '>
                                <div className='flex justify-between'>
                                    <div className="flex ">
                                        <div className="border-2 p-1  w-11 h-11  text-center text-2xl font-bold rounded-full bg-[#E54065] text-white">{item.from.name.slice(0, 1).toUpperCase()}</div>
                                        <div className='text-2xl  ml-5'><strong>{item.subject}</strong></div>
                                    </div>
                                    <div onClick={() => handleFavouriteClick(item.id)} className='text-sm h-8 p-2 text-white bg-[#E54065] rounded-2xl mr-20 mt-1 shadow-md shadow-slate-500'>{item.isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</div>
                                </div>
                                <div className='ml-16'>{moment(item.date).format("DD/MM/YYYY h:mma")}</div>
                            </li>
                        ) : null
                    })}
                </ul>
                {/* <div  dangerouslySetInnerHTML={{ __html: emailBody }} className="leading-relaxed text-gray-800 pr-20 pl-20 pt-3 pb-10" /> */}
                <div className="leading-relaxed text-gray-800 pr-20 pl-20 pt-3 pb-10">
                    {emailBody
                        .replace(/<\/?div>/g, '') 
                        .split(/<\/?p>/) 
                        .filter(text => text.trim() !== '') 
                        .map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p> 
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default CardBody




