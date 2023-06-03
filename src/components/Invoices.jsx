import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom'


const Invoices = () => {
  return (
    <>
    
    
    <div className="box2 bg-slate-300 py-[20px] px-[115px] flex items-center justify-between  ">
        <h1 className=' text-[32px] font-bold text-black ' >Invoices</h1>
        <Link to="/newinvoice" > 
        <div className=' flex items-center bg-[#0652DD] py-[15px] px-[20px] rounded-lg  '> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
         
          <button className=' ml-[5px]  font-bold text-white text-[16px] ' >Create invoice</button> 
        </div> </Link>
        
    </div>

    
     
    
    <Table/>

    {/* <div className=' text-center mt-[90px] ' >
        <h1 className=' text-[22px] font-bold ' >You have no invoices</h1>
        <h2 className=' mt-[20px] text-[18px] text-[#808087] ' >All invoices will be listed here</h2>
        <div className='mt-[20px] max-w-[190px] m-auto flex items-center bg-[#0652DD] py-[15px] px-[20px] rounded-lg  '> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

        <button className='ml-[5px]  font-bold text-white text-[16px] ' >Create invoice</button>
        </div>
    </div> */}

    
    
    </>
  )
}

export default Invoices