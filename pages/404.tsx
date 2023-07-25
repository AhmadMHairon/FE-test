import { Button } from '@/components/common/button';
import Link from 'next/link';
import React from 'react';

const Custom404Page = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col gap-9">
            <div className=" text-center">
                <h1 className="text-6xl font-bold text-primary-light">404</h1>
                <h2 className="text-2xl font-bold text-primary-light">Page Not Found</h2>
            </div>
            <Button
                href={'/'}
                as={Link}
                color={'secondary'}
                size={'medium'}
                className="text-2xl text-center w-[220px] py-3">
                Go Back Home
            </Button>
        </div>
    );
};

export default Custom404Page;
