
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const id = ({ params,foods }) => {
    const router = useRouter();
    const food = foods?.data
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  const [name,setName] = useState(food.name)
  const [description,setDescription] = useState(food.description)
  const [imageUrl,setImageUrl] = useState(food.imageUrl)
  const [ingredients,setIngredients] = useState(food.ingredients)
 
  const updateFood = async() =>{
    
    fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`,
    {
        method:'POST',
        headers:new Headers({
            apiKey:'w05KkI9AWhKxzvPFtXotUva-',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
            'Content-Type':'application/json',
        }),
        body:JSON.stringify({
            name:name,
            description:description,
            imageUrl:imageUrl,
            ingredients:ingredients
        })
    })
    alert('sucees mengupdateData')
    router.push(`/makanan`)
  }
  const addInputs =() =>{
    setIngredients([...ingredients,''])
  }
  const handleChangeInputs = (index,event) =>{
    const newArray = [...ingredients];
    newArray[index]=event.target.value
    setIngredients(newArray)
  }
    return (
      <div className='mt-20'>
        <h1 className='text-center font-semibold'>Update Foods</h1>
<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input defaultValue={name} onChange={(e)=>setName(e.currentTarget.value)}  name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input defaultValue={description} onChange={(e)=>setDescription(e.currentTarget.value)} name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Description</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input defaultValue={imageUrl} onChange={(e)=>setImageUrl(e.currentTarget.value)}   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url </label>
      <img className='mt-2 w-48' src={imageUrl} width={120} height={200}/>
  </div>

  <div class="relative z-0 w-full mb-5 group">
        {ingredients.map((value,index)=>(
            <div>
            <input key={index} defaultValue={value}  onChange={(e)=>handleChangeInputs(index,e)}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          </div>
            
        ))}
<div>

     <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Ingredients </label>
     <div className='flex w-full justify-end mt-2 mr-1'>
     <button onClick={addInputs} className='bg-gray-400 py-1 rounded-full px-2'>+ </button>       
     </div>
</div>
  </div>
        <div className='flex items-center gap-6 '>
  <button onClick={updateFood} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <p  className='text-gray-400'>confirm changes to product information</p>
        </div>
</form>
      </div>
    );
  };


export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
  
    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`,
        {headers:{
            apiKey:'w05KkI9AWhKxzvPFtXotUva-'}
        },
      );
      const foods = await res.json();
  
      return {
        props: {
          foods,
        },
      };
    } catch (error) {
      console.error("Error fetching food:", error);
      return {
        notFound: true,
      };
    }
  }
  export default id