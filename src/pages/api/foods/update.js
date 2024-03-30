const updateFood = async (foodId, foodData) => {
  const url = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${foodId}`;
  const apiKey = "w05KkI9AWhKxzvPFtXotUva-";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "apiKey": apiKey,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(foodData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating food:", error);
    throw new Error("Failed to update food");
  }
};
