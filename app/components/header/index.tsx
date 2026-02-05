import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md"
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./search-form";
import { getBasket } from "@/app/service/basket-service";
import { userId } from "@/app/utils/constants";
export default async function Header() {
  const { cart } = await getBasket(userId)
  const totalQuantity = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <div className="bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">

      <Link href="/"
        className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2"
      >
        <MdOutlineLocalGroceryStore />

        <h1 className="
  text-lg
  sm:text-xl
  lg:text-2xl
  font-semibold
  tracking-wide
">
          MANAV
        </h1>



      </Link>
      <SearchForm />
      <div className="flex items-center gap-5">
        <Link href="orders"
          className="text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2">
          <RiFileList3Line />
          <span className="max-md:hidden">Siparişlerim</span>
        </Link>
        <Link href="/cart"
          className="text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2">
          <div className="relative"> 
             <FaShoppingCart className="text-2xl" />
            <span className="absolute -right-5 -top-5 text-sm    shadow-sm font-bold grid place-items-center bg-green-500 text-white rounded-full size-6">
              {totalQuantity}</span>
           </div>
          <span className="max-md:hidden">Sepetim</span>
        </Link>
      </div>
    </div>
  )
}