import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { itemType } from '@/constants/food';

const FoodCard = ({ item }: { item: itemType }) => {
    return (
        <div className=" h-[400px] min-w-[280px] sm:min-w-[300px] flex flex-col rounded-md overflow-hidden bg-[#292524]">
            <div className="flex-1 relative">
                <Image alt="" src={item.image} priority fill={true} className=" object-cover" />
            </div>
            <div className=" flex justify-between p-5 items-start flex-wrap">
                <div className="text-primary-light min-w-[220px]  text-start max-w-full text-ellipsis overflow-hidden pl-4">
                    {item.title}
                </div>
                <Link className="underline" href={'/'}>
                    How is it made?
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;
