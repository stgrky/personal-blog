// import React, { useState, useEffect, useRef } from "react";
// import { NextPage } from "next";

// interface CommentsFormWidgets {
//   slug: any;
// }

// const CommentsForm: NextPage<CommentsFormWidgets> = ({ slug }) => {
//   const [error, setError] = useState(false);
//   const [localStorage, setLocalStorage] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const commentElement: any = useRef();
//   const nameElement: any = useRef();
//   const emailElement: any = useRef();
//   const storeDataElement = useRef(null);

//   const handleCommentSubmission = () => {
//     setError(false);

//     const { value: comment }: any = commentElement.current;
//     const { value: name }: any = nameElement.current;
//     const { value: email }: any = emailElement.current;
//     const { checked: storeData }: any = storeDataElement.current;

//     if (!comment || !name || !email) {
//       setError(true);
//       return;
//     }

//     const commentObj = {
//       name,
//       email,
//       comment,
//       slug,
//     };

//     if (storeData) {
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//     } else {
//       localStorage.removeItem("name", name);
//       localStorage.removeItem("email", email);
//     }

//     if (
//       !commentElement.current.value ||
//       !nameElement.current.value ||
//       !emailElement.current.value
//     ) {
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
//       <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
//       <div className="grid grid-cols-1 gap-4 mb-4">
//         <textarea
//           ref={commentElement}
//           className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="drop a line here"
//           name="comment"
//         />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
//         <input
//           type="text"
//           ref={nameElement}
//           className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Name"
//           name="name"
//         />
//         <input
//           type="text"
//           ref={emailElement}
//           className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Email"
//           name="email"
//         />
//       </div>
//       <div className="grid grid-cols-1 gap-4 mb-4">
//         <div>
//           <input
//             ref={storeDataElement}
//             type="checkbox"
//             id="storeData"
//             name="storeDllllata"
//             value="true"
//           />
//           <label
//             className="text-gray-500 cursor-pointer ml-2"
//             htmlFor="storeData"
//           >
//             Save my email for next time ;)
//           </label>
//         </div>
//       </div>
//       {error && <p className="text-xs text-red-500">All fields required!</p>}
//       <div className="mt-8">
//         i
//         <button
//           className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
//           type="button"
//           onClick={handleCommentSubmission}
//         >
//           Submit
//         </button>
//         {showSuccessMessage && (
//           <span className="text-xl float-right font-semibold mt-3 text-blue-500">
//             Comment submitted, waiting for review
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentsForm;
