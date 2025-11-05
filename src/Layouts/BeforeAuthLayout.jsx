// BeforeAuthLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// useOutletContext to pass props to child ( eg. const '(isLoggedIn , setIsLoggedIn)' = useOutletContext(); )

export default function BeforeAuthLayout({setIsLoggedIn , isLoggedIn}) {
  const location = useLocation();

  return (
    <div className={`min-h-screen flex flex-col ${location.pathname === '/' && 'backgroundone'}`}>   
      <Navbar setIsLoggedIn={setIsLoggedIn}/>
      <main className="flex-1 min-h-screen">                  
        <Outlet context={{ isLoggedIn, setIsLoggedIn }}/>  
      </main>
      <Footer />                                  
    </div>
  );
}
