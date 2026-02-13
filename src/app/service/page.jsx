import { services } from '@/data/service';
import Link from 'next/link';
import React from 'react';

const Service = () => {


    return (
        <div className='py-10'>
            <h2 className='text-5xl pl-5 font-bold '>Our services</h2>
            <p className='text-xs pl-5 '>Start your healthy life with..</p>
            <div className='grid grid-cols-3 gap-5 py-10 px-5'>
            {services?.map(service => 
            <div key={service?.serviceId} className=' shadow-2xl bg-white p-10 rounded-2xl space-y-5'>
                <h2 className='text-2xl font-bold '>{service.title}</h2>
                <p className='text-sm'>{service.description}</p>
      <div className='flex items-center justify-between gap-2'>          <p>{service.pricing}</p>
                <button className='btn btn-primary'><Link href={`/service/${service?.serviceId}`}>Details</Link></button>
                </div>
                </div>)}
        </div>
        </div>
    );
};

export default Service;