import React from 'react';
import Image from 'next/image';
import product from "../../../../public/images/product.png";
import product2 from "../../../../public/images/product2.png";
import product3 from "../../../../public/images/product3.png";
import product4 from "../../../../public/images/product4.png";

const Products = () => {
  return (
    <div className="p-8 bg-gray-200">
      
      <div className="mb-10 text-center text-black">
        <h1 className="text-4xl font-bold mb-3">Getting into The World of Web</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Get STARTED, Be CREATIVE, Make it to the phones and pop up on the screens
        </p>
      </div>

      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        
        <div className="bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-[300px] h-[420px] mx-auto">
          <Image src={product} alt="Enterprises Messaging Solution" width={240} height={300} className="rounded-lg" />
          <h2 className="mt-6 text-xl font-semibold text-center text-gray-800">
            Enterprises Messaging Solution
          </h2>
        </div>

     
        <div className="bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-[300px] h-[420px] mx-auto">
          <Image src={product2} alt="Product Name 2" width={240} height={300} className="rounded-lg" />
          <h2 className="mt-12 text-xl font-semibold text-center text-gray-800">
            Web development
          </h2>
        </div>

        
        <div className="bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-[300px] h-[420px] mx-auto">
          <Image src={product3} alt="Product Name 3" width={250} height={350} className="rounded-lg" />
          <h2 className="mt-35 text-xl font-semibold text-center text-gray-800">
          App Solutions
          </h2>
        </div>

      
        <div className="bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-[300px] h-[420px] mx-auto">
          <Image src={product4} alt="Product Name 4" width={240} height={300} className="rounded-lg" />
          <h2 className="mt-12 text-xl font-semibold text-center text-gray-800">
            Digital Marketing
          </h2>
        </div>

      </div>
      <div className='flex '>
        <div className='bg-green'></div>
        <div className='bg-red'></div>
        <div className='bg-red'></div>
      </div>
    </div>
  );
};

export default Products;
