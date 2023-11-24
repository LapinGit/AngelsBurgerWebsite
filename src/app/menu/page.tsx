import Image from 'next/image'
import React from 'react'


const page = () => {
  return(
    <div className="  grid	grid-row-6
                        justify-items-center ">
        <div className=" 
                      text-amber-300   
                        lg:static flex items-center gap-2 
                        bg-red-500 px-10 rounded-md mx-5 my-5
                        ">
          <span>Bacon Sandwich Menu</span>
          <Image src="/BaconHead.png" alt="" width={100} height={30} />
          
        </div>
   {/* BACON SANDWICH MENU */}
<table className='w-2/6 '>
  <tbody className='  text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 '> 
    <tr>
      <td className='text-2xl py-4 px-4 '> Bacon Sandwich </td>
      <td >₱25</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Bacon & Cheese Sandwich		</td>
      <td>₱30</td>    
    </tr >
    <tr>
      <td className='text-2xl py-4 px-4 '>Bacon & Egg Sandwich		</td>
      <td>₱37</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Bacon, Cheese & Egg Sandwich		</td>
      <td>₱42</td>    
    </tr>
   </tbody>
</table>     

        <div className=" 
                      text-amber-300  
                        lg:static flex items-center gap-2 
                        bg-red-500 px-10 rounded-md mx-5 my-5
                        ">
          <span>Buy 1 Take 1 Burger Menu</span>
          <Image src="/BurgerHead.png" alt="" width={113} height={30} />
        </div>
{/* BUY 1 TAKE 1 BURGER MENU */}
<table className='w-2/6 '>
  <tbody className='  text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 '> 
    <tr>
      <td className='text-2xl py-4 px-4 '> Beef Burger Sandwich	 </td>
      <td >₱30</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Cheeseburger Sandwich		</td>
      <td>₱40</td>    
    </tr >
    <tr>
      <td className='text-2xl py-4 px-4 '>Buy 1 Take 1 Hotdog Sandwich			</td>
      <td>₱40</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Jumbo Cheese Footlong Sandwich			</td>
      <td>₱45</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Jumbo Cheese Footlong Sandwich			</td>
      <td>₱55</td>    
    </tr>
   </tbody>
</table> 
        
        <div className=" 
                      text-amber-300  
                        lg:static flex items-center gap-2 
                        bg-red-500 px-10  rounded-md mx-5 my-5
                        ">
          <span>Ham Sandwich Menu</span>
          <Image src="/HamHead.png" alt="" width={130} height={30} />
        </div>

        <table className='w-2/6 '>
  <tbody className='   text-gray-700 uppercase  bg-gray-200 dark:bg-gray-700 dark:text-gray-400 '> 
    <tr>
      <td className='text-2xl py-4 px-4 '> Ham Sandwich	</td>
      <td >₱25</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Ham & Cheese Sandwich		</td>
      <td>₱30</td>    
    </tr >
    <tr>
      <td className='text-2xl py-4 px-4 '>Ham & Egg Sandwich			</td>
      <td>₱37</td>    
    </tr>
    <tr>
      <td className='text-2xl py-4 px-4  '> Ham, Cheese & Egg Sandwich		</td>
      <td>₱42</td>    
    </tr>
   </tbody>
</table>     

</div>
  )
}

export default page