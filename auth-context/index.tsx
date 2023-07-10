// import React, { Children, Dispatch, SetStateAction, createContext, useState } from "react";

// // write the type 3
// export type ContextType = {
//   userDetails: string;
//   setUserDetails: 
// };

// //1 created context
// export const AuthContext = createContext<ContextType | null>(null);

// const index = ({Children}: {Children: React.ReactElement}) => {
//   //2 Declare the state to use in the entire application
//   const [userDetails, setUserDetails] = useState({
//     img: "",
//     first_name: "",
//   });

//   let storeData = {
//     userDetails,
//     setUserDetails
//   };

//   return (
//     <AuthContext.Provider value={storeData}>{Children}</AuthContext.Provider>
//   );
// };

// export default index;
