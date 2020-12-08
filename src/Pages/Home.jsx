import React from "react";
import Header from "../Components/Header/Header";
import Catagory from "../Components/Catagory";
import Products from "../Components/Products/Products";
import Offer from "../Components/Offer";
import Testimonials from "../Components/Testimonials";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer/Footer";


function Home() {
    return (

        <div>

            <Header />            {/* Section-1 : Header  */}
            <hr className="dotted" />
            <Catagory />          {/* Section-2 : Catagory  */}
            <Products />          {/* Section-3 : featured products  */}
            <Offer />             {/* Section 4 : Offer */}
            <hr className="dotted" />
            <Testimonials />      {/* Section 5 : Testimonials  */}
            <Brands />            {/* Section 6 - Brands  */}
            <Footer />            {/* Section - 7 : footer  */}

        </div>
    );
}

export default Home;
