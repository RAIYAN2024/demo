import Banner from "@/components/Banner";
import Footer from "@/components/Fotter";
import Image from "next/image";

export default async function App() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <>
      <Banner />
      <div className="container mx-auto mt-20 p-2 xl:px-36">
        <div className="grid 2xl:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 mb-10">
          {data?.map((item: Product) => (
            <div className="shadow-[0 0 10 #f5f5f5] bg-white" key={item.id}>
              <Image
                src={item.image}
                width={2500}
                height={2500}
                quality={100}
                alt={item.image}
                priority
                className="aspect-square"
              />
              <p className="mx-2 line-clamp-2 text-xs font-bold h-8">
                {item.title}
              </p>
              <p className="mx-2 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
