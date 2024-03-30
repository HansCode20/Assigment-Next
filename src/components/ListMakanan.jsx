import { useRouter } from "next/router";
import ModalConfirm from "./ModalConfirm";
import { useState } from "react";
import Link from "next/link";

const ListMakanan = ({ foods }) => {
  if (!Array.isArray(foods)) {
    return <div className="text-red-500">Data makanan tidak valid</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      
      {foods.map((food) => (
        <div key={food.id} className="p-4 bg-gray-100 rounded-lg">
          <Link href={`/makanan/${food.id}`}>
          <img
            src={food.imageUrl}
            alt={food.name}
            className="w-full rounded-md h-64 object-cover"
            />
            </Link>
          <h2 className="text-xl font-bold mt-2 text-black text-center">
            {food.name}
          </h2>
          <div className="flex justify-between items-center flex-col gap-4">
            <div className="flex gap-2">
              <div className="z-10 fixed flex w-full top-[50%]">
      </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMakanan;
