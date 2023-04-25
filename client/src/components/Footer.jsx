import React from 'react';
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaSmileBeam, FaRegCopyright} from "react-icons/fa"
import {GrLinkedinOption}  from "react-icons/gr"

function Footer() {
  return (
//     <footer className="bg-gray-800 text-gray-300 py-4">
//   <div className="container mx-auto flex justify-between items-center">
//     <div>
//       <p>&copy; 2023 shoplite. All rights reserved.</p>
//     </div>
//     <div>
//       <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <li>
//           <ol className="list">
//             <li>Shopping Guide</li>
//             <ul className="list-disc pl-4">
//               <li><a href="#">How to pay on this platform</a></li>
//               <li><a href="#">Flash Sale</a></li>
//               <li><a href="#">How to apply aftersale/refund?</a></li>
//               <li><a href="#">How long does it take for my order to arrive?</a></li>
//               <li><a href="#">How to shop in this platform</a></li>
//               <li><a href="#">Flash Sale</a></li>
//             </ul>
//           </ol>
//         </li>
//         <li>
//           <ol className="list">
//             <li>Help Centre</li>
//             <ul className="list-disc pl-4">
//               <li><a href="#">Email</a></li>
//               <li><a href="#">Phone</a></li>
//             </ul>
//           </ol>
//         </li>
//         <li>
//           <ol className="list">
//             <li>Business</li>
//             <ul className="list-disc pl-4">
//               <li><a href="#">Our Story</a></li>
//               <li><a href="#">Our Team</a></li>
//             </ul>
//           </ol>
//         </li>
//         <li>
//           <ol className="list">
//             <li>Contact us</li>
//             <ul className="list-disc pl-4">
//               <li><a href="#">General</a></li>
//               <li><a href="#">Technical</a></li>
//             </ul>
//           </ol>
//         </li>
//       </ul>
//     </div>
//   </div>
// </footer>


<footer className='bg-gray-600 text-white min-h-[30vh] pt-7'>
       <div className='uppercase flex-wrap flex justify-center my-4 gap-6'>
         <a href='#'>About us</a>
         <a href='#'>Blog</a>
         <a href='#'>Questions</a>
         <a href='#'>Faqs</a>
         <a href='#'>Login</a>
       </div>
         <hr className='border-4' />
       <p className='text-center mt-5 leading-tight'>
         
       </p>
       <div className='flex gap-8 justify-center my-10 '>
          <FaYoutube size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <GrLinkedinOption size={25} className="hover:text-orange-600 hover:cursor-pointer" />
          <FaFacebookF size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaTwitter size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaInstagram size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaSmileBeam size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
       </div>
       <div className='bg-gray-500 p-7 flex items-center justify-center'>
          <FaRegCopyright /> <span className='ml-5'>Copyright 2023</span>
       </div>
    </footer>


  );
}

export default Footer;

