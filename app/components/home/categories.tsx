import { BiSolidOffer } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function Categories() {
    const options = [
        {
            icon: <MdLocalShipping className="text-4xl text-blue-600" />,
            title: "Hızlı Teslimat",
            description: "Aynı Gün Kapınızda",
            bgColor: "bg-blue-50"
        },
        {
            icon: <FaLeaf className="text-4xl text-green-600" />,
            title: "Taze Ürünler",
            description: "Günlük Taze Ürünler",
            bgColor: "bg-green-50"
        },
        {
            icon: <BiSolidOffer className="text-4xl text-orange-600" />,
            title: "İndirim",
            description: "1000₺ alışverişe 50₺ gross puan",
            bgColor: "bg-orange-50"
        },
        {
            icon: <TbTruckDelivery className="text-4xl text-purple-600" />,
            title: "Kargo Avantajı",
            description: (<>
                •Minimum sipariş 200₺  <br />• 500₺ ve üzeri kargo bedava
            </>
                ),
            bgColor: "bg-purple-50"
        },
    ]


    return (
        <section className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"  >
            {options.map((option, i) => (
                <div key={i}
                    className="flex items-center gap-3 p-4 rounded-lg bg-purple-50
             hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-default">
                    {option.icon}
                    <div>
                        <h3 className="font-medium text-gray-800">{option.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{option.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}