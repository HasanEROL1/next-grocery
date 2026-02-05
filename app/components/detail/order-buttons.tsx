"use client"

import { addToBasket, checkoutSingleItem } from "@/app/service/basket-service"
import { Product } from "@/app/types"
import { useEffect, useState } from "react"
import { FaMinus, FaPlus, FaShoppingCart, FaSpinner } from "react-icons/fa"
import { toast } from "react-toastify"
import { userId } from '@/app/utils/constants';


const OrderButtons = ({ grocery }: { grocery: Product }) => {
  const [quantity, setQuantity] = useState(1)
  const [loading, setIsLoading] = useState(false)
 

  // Sepete Ekle

  useEffect(() => {
    if (quantity > grocery?.stock) {
      setQuantity(grocery.stock)
    }
  }, [grocery?.stock])
  const handleAddToCart = async () => {
    if (quantity < 1 || grocery.stock < quantity) return
    setIsLoading(true)
    try {
      await addToBasket(userId, grocery._id, quantity)
      toast.success(`${quantity} ${grocery.unit} ${grocery.name} Sepete Eklendi`)
      setQuantity(1)
    } catch (error) {
      console.log(error)
      toast.error("Ürün Sepete Eklenemedi")
    }
    finally {
      setIsLoading(false)
    }
  }
  // Hemen satın al
  const handleBuyNow = async () => { 
    if(quantity<1 ||grocery.stock< quantity) return;

    setIsLoading(true)
    // backend'den satın alım sayfasının url'ini al
    try {
   const {url} =  await checkoutSingleItem(grocery,quantity)
   // sayfayı yeni sekmede aç
  window.open(url, "_blank")
  // state i sıfırla
  setQuantity(1)
    } catch(error) {
      console.error(error)
      toast.error("Ödeme İşlemi Başlatılamadı")
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <button onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            <FaMinus />
          </button>
          <span className="px-3 py-2 border-x border-gray-300 min-w-10 text-center">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}
            disabled={quantity >= grocery?.stock}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            <FaPlus />
          </button>
        </div>
        <span
          className="text-gray-500">Stok: {grocery?.stock}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button disabled={loading}
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-100 h-10 transition py-2 px-4 rounded-md font-medium cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>
              <FaShoppingCart />
              Sepete Ekle</>
          )}
        </button>

        <button disabled={loading}
          onClick={handleBuyNow}
          className="flex-1 flex justify-center bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md disabled:opacity-85 cursor-pointer disabled:cursor-not-allowed">
          {loading ? <FaSpinner className="animate-spin" />: "Hemen Satın Al"}</button>
      </div>
    </div>
  )
}

export default OrderButtons
