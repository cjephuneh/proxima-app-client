// import { useSelector } from "react-redux";
// import DashNav from "./DashNav";
// import UserInteractions from "./UserInteractions";
// import IssuesWindow from "./home/IssuesWindow";

// export default function DashLayout({children}){
//         const searchWindowVisible = useSelector((state) => state.search.isSearchWindowVisible)

//     return (
//         <div className="flex">
//             <DashNav />
//             <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
//                 <UserInteractions />
//                 <div className="py-3 px-12 bg-gray-100 h-screen overflow-y-scroll">
//                     {
//                         searchWindowVisible ?
//                         <IssuesWindow /> :
//                         children
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
import { useSelector } from "react-redux";
import DashNav from "./DashNav";
import UserInteractions from "./UserInteractions";
import IssuesWindow from "./home/IssuesWindow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BounceLoader from 'react-spinners/BounceLoader'

export default function DashLayout({ children }) {
  const searchWindowVisible = useSelector((state) => state.search.isSearchWindowVisible);
  const user = useSelector((state) => state.auth.user)
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay of 5 seconds
      
      const isAuthenticated = !!localStorage.getItem("proxima_admin_details"); // Check if a admin details exist in local storage

      if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        router.replace("/auth/login");
      } else {
        setLoading(false); // Set loading to false when authentication check is complete
      }
    };

    checkAuthentication();
  }, [user]);

  if (loading) {
    return <div className="h-screen w-screen overflow-hidden flex items-center justify-center"> <BounceLoader color="#36d7b7" />; </div> // Render a loading state while authentication check is in progress
  }

  return (
    <div className="flex">
      <DashNav />
      <div className="flex flex-col flex-1 h-screen overflow-y-hidden">
        <UserInteractions />
        <div className="py-3 px-12 bg-gray-100 h-screen overflow-y-scroll">
          {searchWindowVisible ? <IssuesWindow /> : children}
        </div>
      </div>
    </div>
  );
}
