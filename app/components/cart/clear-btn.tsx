"use client"
import { clearCartItem } from "@/app/service/basket-service";
import { userId } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Loader from "../loader";

export default function ClearBtn() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleClearCart = async () => {
        setIsLoading(true)
        await clearCartItem(userId)
        router.refresh()
        setIsLoading(false)
    }
    return (
        <button disabled={isLoading}
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm cursor-pointer">
                {isLoading? (
                    <Loader designs="text-red-600" />):(
              <>
            <FaTrash />
            <p>Sepeti Boşalt</p>
            </>
    )}

        </button>
    )
}