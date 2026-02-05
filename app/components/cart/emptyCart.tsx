import Link from "next/link"
import { MdRemoveShoppingCart } from "react-icons/md"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const EmptyCart = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-[60vh] flex flex-col justify-center items-center gap-10">
      <MdRemoveShoppingCart className="text-7xl text-red-800 " />
      <h3 className="text-4xl px-2 font-bold text-gray-700 mb-2 bg-amber-100">Sepetiniz Boş <span className="text-black/75">!</span></h3>

      <p className="text-gray-600 mb-6 mt-2 bg-amber-100">
        Sepetinizde Henüz Ürün Bulunmamaktadır.
      </p>

      <div className="flex items-center  mt-2">
        <div className="flex items-center text-2xl bg-amber-500/45  rounded-md shadow-xl">
          <Link href="/">
         <p className="flex items-center gap-3  py-1 px-2 text-blue-800 mt-2 ">   <FaArrowRight className="text-zinc-700 " /> Hemen Alışverişe Başla<FaArrowLeft className="text-zinc-700" />  </p>
            <span className="text-[15px] text-red-400 hover:text-red-600 hover:text-[17px]">Anasayfaya gitmek için tıklayınız</span>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyCart
