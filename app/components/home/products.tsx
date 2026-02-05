import {getProducts} from "@/app/service/product-service"
import { Product } from "@/app/types"
import Card from "./card"

export default async function Products() {
  const{ groceries} = await getProducts()

  // diziyi gruplandırmak için
  const groupedProducts = groceries.reduce<Record<string, Product[]>>((groups,products) => {
    const category = products.category

    if (!groups[category]) {
      groups[category] = []
    }

    groups[category].push(products)
      return groups
    
  }, {} )
  
 
  return (
    <div className="text-black flex flex-col gap-10">
      {Object.keys(groupedProducts).map((category) =>{
        return(
          <div key={category}>
            <h2 className="text-black text-2xl font-bold">{category}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >{groupedProducts[category].map((product) => (
            <Card key={product._id} product={product} /> 
            ))}
          </div>
          </div>
        )
      })}
    </div>
  )
}