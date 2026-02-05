import { Product } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import ItemActions from './itemActions';
import React from 'react';

export type CartItemProps = {
    item:{
    grocery:Product | null;
    quantity:number;
    price:number;
    name:string
    _id:string
    } 
}

const CartItem = ({item}:CartItemProps) => {
    const grocery =item.grocery
    if (!grocery) return null;
  return (
   <li className='flex items-center p-4'>
    <div className='overflow-hidden rounded-md mr-4'>
        <Image 
        src={grocery.photo}
        alt={grocery.name}
        width={100}
        height={100}
        />
    </div>

    <div className='flex-1'>
              <Link href={`/grocery/${grocery._id}`}
    className='text-lg font-medium text-gray-800 hover:text-green-600'>
    {item.name}</Link>

    <p className='text-gray-600 text-sm'>{grocery.unit}</p>
         
    <p className='text-green-600 font-medium'>{item.price}₺</p>
          </div>

          <ItemActions item={item} />
   </li>
  )
}

export default React.memo(CartItem)