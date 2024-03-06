import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className=' flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-8'> 
                    <h5>{data.filesize}</h5>
                    {data.close ? <IoCloseSharp /> : <IoMdDownload size="1.2em"/>}
                    
                </div>
                {data.tag.isOpen && (
                <div className={`tag w-full ${data.tag.tagColor} py-4 flex items-center justify-center`}>
                    <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                </div>
                )}
        </div>
      </motion.div>
  );
}

export default Card
