import { GetBasketResponse } from '@/app/types'
import React from 'react'
import CheckoutButton from './checkoutbtn'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const CartSummary = ({cart}: GetBasketResponse) => {
    const shipping:number = 20
  return (
    <div className='lg:w-1/3'>
    <div className='bg-white rounded-lg shadow overflow-hidden p-6 sticky top-4'>
              <h2 className='flex items-center border-b border-zinc-500 pb-1 text-lg font-semibold'>
                  <FaShoppingCart className='mr-2 text-green-600' /> Sipariş Özeti</h2>

        <div className='space-y-3 mt-3'>
            <div className='flex justify-between text-gray-600 mt-1'>
                <span>Ürünler Toplamı </span>
                <span>{cart.totalAmount}₺</span>
            </div>

                  <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                      <span>{cart.totalAmount > 300 ?"bedava" :
                      `${shipping}₺`}</span>
            </div>
                  <div className='border-t border-zinc-300 pt-3 mt-3 '>
                <div className='flex justify-between font-bold text-xl text-green-800'>
                    <span>Toplam</span>
                    <span>{cart.totalAmount<300? cart.totalAmount + shipping : cart.totalAmount}</span>
                </div>
            </div>
        </div>

        <CheckoutButton  />

        <Link href="/" className='block text-center mt-4 text-green-600'>
        Alışverişe Devam Et
        </Link>
    </div>
    </div>
  )
}

export default CartSummary
