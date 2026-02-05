"use client"

import { useState } from "react"
import Loader from "../loader"
import {MdOutlineShoppingCartCheckout } from "react-icons/md"
import { checkoutAllItems } from "@/app/service/basket-service"
import { userId } from "@/app/utils/constants"
import { toast } from "react-toastify"

const CheckoutButton = () => {
   const [isLoading ,setIsLoading] = useState(false)

   const handleCheckout = async () => {
    setIsLoading(true)

    try{
        const {url} = await checkoutAllItems(userId)

        window.location.href = url
    } catch (error) {
        toast.error
    }
       setIsLoading(false);
   }
  return (
      <button 
          onClick={handleCheckout}
          disabled={isLoading}
      className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transition disabled:brightness-80">
    {isLoading? (
        <Loader/>
    ):(
        <>
        <MdOutlineShoppingCartCheckout />
        Ödeme Yap
        </>
    )}
 </button>
  )
}

export default CheckoutButton
