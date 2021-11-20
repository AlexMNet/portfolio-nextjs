export default function Projects() {
  return (
    <div
      class='bg-gray-100 py-20 px-10 h-screen'
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}
      id='projects'
    >
      <h1 className='text-6xl text-white font-bold leading-normal mt-0 mb-2 text-center'>
        Projects
      </h1>
      <hr class='border-0 bg-blue-500 text-blue-500 h-px max-w-md mx-auto' />
      {/* Card */}
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 mt-5 '>
        <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
          <img
            src='https://images.unsplash.com/photo-1627751476653-e954179b174a'
            alt=''
            class='rounded-t-lg w-full'
          />
          <div class='p-6'>
            <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
              This is Amazing for people to visit.
            </h1>
            <p class='text-gray-700 my-2 hover-text-900 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quis.
            </p>
          </div>
        </div>
        {/* Card */}
        <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
          <img
            src='https://images.unsplash.com/photo-1505881502353-a1986add3762'
            alt=''
            class='rounded-t-lg w-full'
          />
          <div class='p-6'>
            <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
              This is Amazing for people to visit.
            </h1>
            <p class='text-gray-700 my-2 hover-text-900 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quis.
            </p>
          </div>
        </div>
        <div class='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
          <img
            src='https://images.unsplash.com/photo-1544473244-f6895e69ad8b'
            alt=''
            class='rounded-t-lg w-full'
          />
          <div class='p-6'>
            <h1 class='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
              This is Amazing for people to visit.
            </h1>
            <p class='text-gray-700 my-2 hover-text-900 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quis.
            </p>
          </div>
        </div>
      </div>
    </div>
    // <section class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-10' id='projects'>
    //   <div class='text-center pb-12'>
    //     <h1 className='text-6xl font-normal leading-normal mt-0 mb-2'>
    //       Projects
    //     </h1>
    //     <hr class='border-0 bg-blue-500 text-blue-500 h-px max-w-md mx-auto' />
    //   </div>
    //   <div class=' md:grid-flow-col md:auto-cols-auto gap-6'>
    //     {/* Card */}
    //     <div class='w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col  border-2'>
    //       <div>
    //         <img
    //           class='object-center object-cover h-auto w-full'
    //           src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    //           alt='photo'
    //         />
    //       </div>
    //       <div class='text-center py-8 sm:py-6'>
    //         <p class='text-xl text-gray-700 font-bold mb-2'>Dany Bailey</p>
    //         <p class='text-base text-gray-400 font-normal'>Software Engineer</p>
    //         <div>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             Javascript
    //           </span>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             Express
    //           </span>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             React
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Card */}
    //     <div class='w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col  border-2'>
    //       <div>
    //         <img
    //           class='object-center object-cover h-auto w-full'
    //           src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    //           alt='photo'
    //         />
    //       </div>
    //       <div class='text-center py-8 sm:py-6'>
    //         <p class='text-xl text-gray-700 font-bold mb-2'>Dany Bailey</p>
    //         <p class='text-base text-gray-400 font-normal'>Software Engineer</p>
    //         <div>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             Javascript
    //           </span>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             Express
    //           </span>
    //           <span class='text-xs font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1'>
    //             React
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
