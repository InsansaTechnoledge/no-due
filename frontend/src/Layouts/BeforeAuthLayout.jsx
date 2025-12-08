import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useUser } from "../contexts/UserContext";
import { use, useEffect } from "react";

export default function BeforeAuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const {user}=useUser();

  useEffect(() => {
    if(user){
      navigate('/nodue/customer-master');
    }
  }, [user,location.pathname,navigate]);

  return (
    <div className={`min-h-screen flex flex-col ${location.pathname === '/' && 'backgroundone'}`}>   
      <Navbar/>
      <main className="flex-1 min-h-screen"> 

        {(!user || location.pathname === "google-success")?

          <Outlet />
          :
          null 
         }
      </main>
      <Footer />                                  
    </div>
  );
}
