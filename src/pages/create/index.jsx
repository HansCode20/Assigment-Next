import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const index = () => {
  const [foodName, setFoodMName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [inputs, setInputs] = useState([""]);
  const router = useRouter();
  const validateInput = () => {
    const trimInputName = foodName.trim();
    const trimInputDescription = deskripsi.trim();
    const trimInputImageUrl = imageUrl.trim();
    if (
      trimInputName !== "" &&
      trimInputDescription !== "" &&
      trimInputImageUrl !== ""
    ) {
      newFoods();
      router.push("/makanan");
    } else {
      alert("please input value on name,description and imageUrl");
    }
  };
  const newFoods = async () => {
    await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/create-food", {
      method: "POST",
      headers: new Headers({
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: foodName,
        description: deskripsi,
        imageUrl: imageUrl,
        ingredients: inputs,
      }),
    });
  };
  const addInputs = () => {
    setInputs([...inputs, ""]);
  };
  const handleChangeInputs = (index, event) => {
    const newArray = [...inputs];
    newArray[index] = event.target.value;
    setInputs(newArray);
  };
  return (
    <div className="bg-gray-800 h-svh pt-8">
      <div className="border-b border-white pb-12 mx-14">
        <h2 className="text-base font-semibold leading-7 text-white">
          Tambahkan Makanan
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Tambahkan makanan untuk kebutuhan restoran
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-white">
              Nama Makanan
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setFoodMName(e.currentTarget.value)}
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-white">
              Dekrsipsi
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setDeskripsi(e.currentTarget.value)}
                type="text"
                name="last-name"
                id="last-name"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-white">
              ImageUrl
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setImageUrl(e.currentTarget.value)}
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <img src={imageUrl} className="w-40" />
            </div>
          </div>

          <div className="col-span-full">
            <div className="flex w-full justify-between items-center">
              <label className="block text-sm font-medium leading-6 text-white">
                Igridients
              </label>
              <div>
                <span className="text-sm text-gray-500/95 mr-4">
                  Click this to add more input for ingridients
                </span>
              </div>
            </div>
            <div className="mt-2  flex flex-wrap gap-2">
              {inputs.map((value, index) => (
                <input
                  defaultValue={value}
                  key={index}
                  onChange={(e) => handleChangeInputs(index, e)}
                  type="text"
                  name="street-address"
                  id="street-address"
                  className=" relative mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ))}
              <button
                onClick={addInputs}
                className="py-2 bg-gray-600 px-4 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="text-end mt-4 mr-4 justify-end">
        <Link href="/makanan"> 
          <button className="px-2 py-2 rounded-md bg-red-700 mr-4">
            Cancel
          </button>
        </Link>
          <button
            className="px-2 py-2 rounded-md bg-green-700"
            onClick={validateInput}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
