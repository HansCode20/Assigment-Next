  import ListMakanan from "../../components/ListMakanan";
  import Navbar from "../../components/Navbar";
  import { useState, useEffect } from "react";
  import axios from "axios";

  const ListMakananPage = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const getFoods = async () => {
        try {
          const resp = await axios.get(
            "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
            {
              headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
            }
          );
          setFoods(resp.data.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching foods:", error);
          setLoading(false);
        }
      };

      setTimeout(() => {
        getFoods();
      }, 2000);
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
      <div>
        <Navbar />
        <h1 className="text-2xl font-bold mb-4 mt-[50px] text-center">
          List Makanan
        </h1>
        {loading ? (
          <div class="spinner center">
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
         </div>
        ) : (
          <ListMakanan foods={foods} />
        )}
      </div>
    );
  };

  export default ListMakananPage;
