import React from 'react';

import {Link } from 'react-router-dom';

import { FaPeopleGroup } from "react-icons/fa6";
import { GiRadioactive, GiNurseMale } from "react-icons/gi";
import { FaFemale } from "react-icons/fa";





const DashboardStats=()=>{
    return(
        <div className='flex gap-2 w-[100%] mt-0 cell-stats-container'>
           
            <BoxWrapper className=''>
                <div className='rounded-full h-10 w-10 flex  items-center justify-center bg-sky-500'>
                    <FaPeopleGroup className='text-2xl text-white'/>
                </div>
                <div className="pl-2 membership">
                    <span className="text-sm text-gray-500 font-light">Membership</span>
                    <div className="flex items-center ">
                        <strong className="text-ml text-gray-500 font-semibold">3425</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
            <div className='rounded-full h-10 w-10 flex items-center justify-center bg-green-600'>
                    <GiRadioactive className='text-2xl text-white'/>  
                </div>
                <div className="pl-2 membership">
                    <span className="text-sm text-gray-500 font-light act-mem">Active Members</span>
                    <div className="flex items-center">
                        <strong className="text-ml text-gray-500 font-semibold">3425</strong>
                        <span className="text-sm text-red-500 pl-2">-30</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
            <div className='rounded-full h-10 w-10 flex items-center justify-center bg-yellow-400'>
                    <GiNurseMale className='text-2xl text-white'/>
                </div>
                <div className="pl-2 membership">
                    <span className="text-sm text-gray-500 font-light">Male</span>
                    <div className="flex items-center">
                        <strong className="text-ml text-gray-500 font-semibold">16432</strong>
                        <span className="text-sm text-red-500 pl-2">-43</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
            <div className='rounded-full h-10 w-10 flex items-center justify-center bg-orange-600'>
                    <FaFemale className='text-2xl text-white'/>
                </div>
                <div className="pl-2 membership">
                    <span className="text-sm text-gray-500 font-light">Female</span>
                    <div className="flex items-center">
                        <strong className="text-ml text-gray-500 font-semibold">3425</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </BoxWrapper>
        
        </div>
    )
    
}
function BoxWrapper({children}){
    return(
        
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center cell-stats-box w-full sm:w-1/4">
            {children}
            </div>
           
        
    )
}

export default DashboardStats


