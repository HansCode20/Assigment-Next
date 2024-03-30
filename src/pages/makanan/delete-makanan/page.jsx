import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";

const DeleteMakananPage = ({ food }) => {
  const router = useRouter(); 

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${food.id}`,
        {
          method: "DELETE",
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
        }
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

  return (
    <div>
      <Navbar />
      <h1>Delete Makanan</h1>
      <p>Apakah Anda yakin ingin menghapus makanan ini?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteMakananPage;
