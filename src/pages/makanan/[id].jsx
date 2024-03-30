// pages/makanan/[id].js

import { useRouter } from "next/router";
import DetailMakanan from "../../components/DetailMakanan";
import Navbar from "../../components/Navbar";

const DetailMakananPage = ({ food }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <DetailMakanan food={food} />
    </div>
  );
};

// Panggil API untuk mendapatkan detail makanan berdasarkan ID
export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    const res = await fetch(
      `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`
    );
    const food = await res.json();

    return {
      props: {
        food,
      },
    };
  } catch (error) {
    console.error("Error fetching food:", error);
    return {
      notFound: true,
    };
  }
}

export default DetailMakananPage;
