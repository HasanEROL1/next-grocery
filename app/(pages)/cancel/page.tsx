import Link from "next/link";
import { IoIosCloseCircle as Close } from "react-icons/io";

export default function Cancel() {
    return (
        <div className="h-[80vh]">
            <div className="h-[50%] bg-red-600 text-white grid place-items-center">
                <div className="flex flex-col items-center">
                    <Close className="text-[70px]" />
                    <p className="font-semibold text-center text-4xl cursor-default">Ödeme Başarısız Oldu</p>
                </div>
            </div>

            <div className="h-[50%] text-black/90 p-10 mt-1 text-center  ">
                <p className="text-xl text-zinc-700">Ödeme İşlemi Sırasında Bir Hata Oluştu</p>
                <p className="mt-5 mb-7 text-zinc-700">
                    Lütfen Daha Sonra Tekrar Deneyiniz
                </p>
                        <br />
           

              

                <Link href="/"
                    className="bg-red-800/90 text-white font-medium py-3 border shadow-lg px-8 rounded-3xl text-lg hover:shadow-red-300"
                >Anasayfaya Git</Link>


                
            </div>
        </div>
    )
}