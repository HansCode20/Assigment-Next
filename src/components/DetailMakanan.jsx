import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const DetailMakanan = () => {
  const router = useRouter();
  const { id } = router.query;
  const [food, setFood] = useState(null);

  const handleDeleteClick = async () => {
    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
        {
          method: "DELETE",
          headers: new Headers({
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          }),
        },
        console.log("success")
      );
      if (res.ok) {
        router.push("/makanan");
      } else {
        console.error("Failed to delete food");
      }
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch(
          `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`,
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch food");
        }
        const data = await res.json();
        setFood(data.data);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    if (id) {
      fetchFood();
    }
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/makanan">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[20px]">
          Back
        </button>
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-center mt-4 ">{food.name}</h1>
      <img
        src={food.imageUrl}
        alt={food.name}
        className=" w-1/2 mx-auto rounded-lg"
      />
      <p className="text-center mt-5">"{food.description}"</p>
      <p className="mt-4 text-center  text-lg">
        Ingredients: {food.ingredients.join(", ")}
      </p>
      <div className="grid grid-cols-2 mx-2 gap-2 ">
        <Link
          href={`/makanan/update/${id}`}
          className="bg-blue-400 text-center text-white px-4 py-2 rounded-md mt-4"
        >
          Update
        </Link>
        <button
          onClick={handleDeleteClick}
          className="bg-orange-700 text-white px-4 py-2 rounded-md mt-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DetailMakanan;
