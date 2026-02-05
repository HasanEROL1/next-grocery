"use client"

import { addToBasket } from "@/app/service/basket-service";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import { userId } from '@/app/utils/constants';
import { useRouter } from "next/navigation";

export default function CardActions({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()


  const handleAddToCart = () => {
    setIsLoading(true)

    addToBasket(userId, productId, 1)
      .then(() => {toast.success("Ürün sepete eklendi")
      router.refresh()
  })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <div>
      <button
      disabled={isLoading}
      onClick={handleAddToCart}
        className="bg-green-500 text-white rounded-full p-2 shadow-sm cursor-pointer transition hover:bg-green-600 hover:shadow-md disabled:brightness-85">
        {isLoading ? <FaSpinner className="animate-spin" /> :<FaPlus />}
      </button>
    </div>
  )
}