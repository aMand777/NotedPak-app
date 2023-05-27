import React from 'react'
import Image from 'next/image';

const LoadingSpin = ({validation}) => {
    if (validation) {
        return (
            <div className="w-screen h-screen fixed top-0 left-0">
                <div className="w-full h-full flex justify-center items-center">
                    <Image src="/img/loading-spin01.png" alt="loading-icon" width={100} height={100} className="animate-spin duration-1000" />
                </div>
            </div>
        );
    }
}

export default LoadingSpin;