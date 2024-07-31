  import { useRouter } from "next/router";
  import ModalConfirm from "./ModalConfirm";
  import { useState } from "react";
  import Link from "next/link";

  const ListMakanan = ({ foods }) => {
    const [hoveredFood, setHoveredFood] = useState(null);


    if (!Array.isArray(foods)) {
      return <div className="text-red-500">Data makanan tidak valid</div>;
    }
    return (  
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
        {foods.map((food) => (
          <div 
          key={food.id} 
          className="p-4 bg-gray-100 rounded-lg relative"
          onMouseEnter={() => setHoveredFood(food.id)}
          onMouseLeave={() => setHoveredFood(null)}>
            <Link href={`/makanan/${food.id}`}>
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-full rounded-md h-64 object-cover"
              />
              </Link>
            <h2 className="text-black font-semibold text-xl text-center mt-5">
              {food.name}
            </h2>
            {hoveredFood === food.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="bg-white text-black px-4 py-2 rounded hover:bg-black/90 hover:text-white">
                    <Link href={`/makanan/${food.id}`}>Detail Makanan</Link>
                  </button>
                </div>
              )}
          </div>
        ))}
      </div>
    );
  };

  export default ListMakanan;
