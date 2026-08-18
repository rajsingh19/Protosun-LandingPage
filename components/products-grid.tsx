import {
  BlisterPack,
  BottleSpoon,
  BottleCup,
  Liver,
  ShieldLeaf,
  Kidney,
  Lungs,
  Stomach,
} from "@/components/custom-icons"
import { ProductCard, type Product } from "@/components/product-card"

const PRODUCTS: Product[] = [
  {
    title: "Jollydol-P Tablets",
    description:
      "Aceclofenac + Paracetamol tablets for effective pain relief, inflammation reduction, and fever management.",
    icon: BlisterPack,
    variant: "blue",
  },
  {
    title: "Jollydol-MP Suspension",
    description:
      "Mefenamic Acid + Paracetamol suspension specially formulated for pain and fever relief in children.",
    icon: BottleSpoon,
    variant: "blue",
  },
  {
    title: "Jollypod-50 Dry Syrup",
    description:
      "Cefpodoxime Oral Suspension IP (10g/30ml). An effective antibiotic dry syrup designed for paediatric use.",
    icon: BottleCup,
    variant: "blue",
  },
  {
    title: "Sunproliv Syrup",
    description:
      "Ayurvedic proprietary medicine formulated for liver disorders, indigestion, jaundice, and flatulence.",
    icon: Liver,
    variant: "green",
  },
  {
    title: "Sunproliv-ST Syrup",
    description:
      "Sugar-free Ayurvedic proprietary medicine positioned for comprehensive liver-related support.",
    icon: ShieldLeaf,
    variant: "green",
  },
  {
    title: "Protopilesgo Capsules",
    description:
      "Ayurvedic proprietary capsules to help relieve pain, burning, and bleeding associated with piles.",
    icon: Kidney,
    variant: "green",
  },
  {
    title: "Protocough Syrup",
    description:
      "Ayurvedic cough syrup for chest congestion and cough relief, featuring a non-drowsy formula.",
    icon: Lungs,
    variant: "green",
  },
  {
    title: "Protohazma Syrup",
    description:
      "Ayurvedic digestive and appetite-support syrup crafted for indigestion and overall digestive wellness.",
    icon: Stomach,
    variant: "green",
  },
]

export function ProductsGrid() {
  return (
    <section className="relative z-10 px-6 pb-12 pt-6 md:px-12 lg:px-20 lg:pt-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}
