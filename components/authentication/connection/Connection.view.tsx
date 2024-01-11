import React from 'react'
import ConnectionForm from './Connection.form'
import Image from 'next/image'
import bg from '@/public/image/6026984.png';
import phenix from '@/public/svg/phenix.svg';

export default function ConnectionView () {
    return (
        <>        <div className=" h-screen shadow-lg flex flex-col justify-center sm:px-6 lg:px-8 px-6" style={{backgroundImage: "url(image/6026984.png)"}}>
            <div className="absolute top-5 mx-14">
                <Image src="image/phenix.svg" alt="phenix"/>
                <h1 className="text-start text-white text-xl italic font-extrabold">P<span className="text-orange-300">H</span>ÉN<span
                    className="text-orange-300">I</span>X</h1>
            </div>
            <div className="sm:mx-auto mb-6 sm:w-full sm:max-w-md">
                <h2 className="mt-4 text-center text-white text-4xl leading-9 font-extrabold">
                    BIENVENUE !
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" >
                <div className=" py-8 px-4 bg-gray-50 shadow sm:rounded-lg sm:px-10">
                    <ConnectionForm />
                        </div>
                    </div>
                </div>
        </>
    )
}