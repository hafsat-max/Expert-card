// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export const isAuthenticated = async (): Promise<boolean> => {
//     try {
//       const response = await fetch("/api/auth/check");
//       const data = await response.json();
  
//       if (response.ok) {
//         return data.isAuthenticated;
//       }
//     } catch (error) {
//       console.error("Error checking authentication status:", error);
//     }
  
//     return false;
//   };
  

// const ProtectedRoute = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ) => {
//   const Wrapper: React.FC<P> =(props) => {
//     const router = useRouter();

//     useEffect(() => {
//       if (!isAuthenticated()) {
//         router.push("/signin");
//       }
//     }, []);

//     return  isAuthenticated() ? <WrappedComponent {...props} /> : null;
//   };
// a
//   return Wrapper;
// };

// export default ProtectedRoute;