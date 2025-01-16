import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";

const BestSellers = () => {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Pizza1",
      description: "Pizza description 1",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza1",
      description: "Pizza description 1",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza1",
      description: "Pizza description 1",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza1",
      description: "Pizza description 1",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading
            subTitle={"bestSeller.checkOut"}
            title={"bestSeller.OurBestSellers"}
          />
        </div>

        <Menu items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;
