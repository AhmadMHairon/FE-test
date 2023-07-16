import React from 'react';
import heroImage from '@/assets/hero-section-image.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const FoodCard = ({
    item,
}: {
    item: {
        image: StaticImageData;
        title: string;
        type: string;
    };
}) => {
    return (
        <div className=" h-[400px] min-w-[300px] flex flex-col rounded-md overflow-hidden bg-[#292524]">
            <div className="flex-1 relative">
                <Image alt="" src={heroImage} priority fill={true} className=" object-cover" />
            </div>
            <div className=" flex justify-between p-5">
                <div className="text-primary-light">{item.title}</div>
                <Link className="underline" href={'/'}>
                    How is it made?
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;
