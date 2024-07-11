import { Link } from 'react-router-dom';
import React from 'react';


const PopularProductData = [
    {
        id:'1',
        product_name:'LG Flex Carvas',
        product_thumbnail:'https://unsplash.com/photos/body-of-water-during-sunset-Xbf_4e7YDII',
        product_price:'$678.00',
        product_stuck:59
    },
    {
        id:'2',
        product_name:'Apple Magic Touch',
        product_thumbnail:'https://unsplash.com/photos/round-white-watch-with-white-band-2cFZ_FB08UM',
        product_price:'$678.00',
        product_stuck:0
    },
    {
        id:'3',
        product_name:'LG Flex Earbuds',
        product_thumbnail:'https://unsplash.com/photos/white-and-black-polaroid-one-step-2-instant-camera-on-white-board-KsLPTsYaqIQ',
        product_price:'$678.00',
        product_stuck:99
    },
    {
        id:'4',
        product_name:'Nike Sneakers',
        product_thumbnail:'https://unsplash.com/photos/unpaired-red-nike-sneaker-164_6wVEHfI',
        product_price:'$678.00',
        product_stuck:19
    },
    {
        id:'5',
        product_name:'LG Televsion',
        product_thumbnail:'https://unsplash.com/photos/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8',
        product_price:'$678.00',
        product_stuck:90
    },
]

const PopularProducts=() =>{
    return (
    
       <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
         <strong className='text-gray-700 font-medium'>popular products</strong>
         <div className="mt-4 flex flex-col gap-3">
            {PopularProductData.map((product)=>(
                <Link key={product.id} to={`/product/${product.id}`} className='flex hover:no-underline'>
                    <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
                        <img className='w-full h-full object-cover' src={product.product_thumbnail} alt={product.product_name} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='text-sm text-gray-800'>{product.product_name}</p>
                        <span 
                        className={`text-sm font-medium ${
                            product.product_stuck === 0 ? 'text-orange-500':'text-green-400'
                        }`}
                        > 
                         {product.product_stuck === 0 ? 'out of stock': product.product_stuck + 'in stock'}
        
                        </span>
                    </div>

                    <div className="text-xs text-gray-400 pl-2">{product.product_price}</div>

                </Link>
            ))}
         </div>
      </div>
        
    
    )
};
export default PopularProducts;




