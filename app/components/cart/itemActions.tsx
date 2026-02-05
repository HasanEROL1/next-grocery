"use client"
import { useState } from 'react'
import { CartItemProps } from './cart-item'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/navigation';
import { removeCartItem, updateCartItem } from '@/app/service/basket-service';
import { userId } from '@/app/utils/constants';
import { toast } from 'react-toastify';


const ItemActions = ({ item }: CartItemProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const grocery = item.grocery;

  if (!grocery) return null;

  const handleUpdateQuantity = async (quantity: number) => {
    try {
      setIsLoading(true)
      await updateCartItem(userId,grocery._id,quantity) 
      router.refresh()
    } catch (error) {
      toast.error
    }
    finally
   { setIsLoading(false)}
  }

  const handleRemoveItem = async() => {
    try{
      setIsLoading(true)
      await removeCartItem(userId,grocery._id)
      router.refresh()
    }catch(error) {
      toast.error
    }
    finally {
      setIsLoading(false)
    }
   
  }
  return (
    <div className='flex items-center '>
      <div className='flex items-center border border-gray-300 rounded mr-4'>
        <button disabled={item.quantity === 1 ||isLoading}
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
          className='px-2 py-1 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer'>
          <FaMinus />
        </button>
        <span className='px-3 py-1 border-x border-gray-300 min-w-9 text-center'>
          {item.quantity}</span>
        <button disabled={item.quantity === grocery.stock || isLoading}
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className='px-2 py-1 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer'>
          <FaPlus />
        </button>
      </div>

      <button disabled={isLoading}
        onClick={handleRemoveItem}
      
      className='text-red-600 hover:text-red-700 cursor-pointer disabled:opacity-50'>
        <FaTrash />
      </button>
    </div>
  )
}

export default ItemActions
