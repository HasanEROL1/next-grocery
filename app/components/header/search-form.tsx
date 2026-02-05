import { CiSearch } from "react-icons/ci";


export default function SearchForm() {
  return (
 <form className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2">
    <button className= {`text-xl max-md:text-xs text-zinc-700`}> 
        <CiSearch  className=""/>
        </button>
        <input type="text" placeholder="Bir Ürün veya Kategori Arayın"
              className="outline-none text-zinc-800 w-full max-md:placeholder:text-[14px]    lg:max-w-68 lg:placeholder:text-xl  md:placeholder:text-center
              " />
        </form>
  )
}