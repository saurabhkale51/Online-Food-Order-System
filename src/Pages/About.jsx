import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUtensils, FaTruck, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="about-page bg-light py-5">

      
        <section className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">About Foodie</h1>
          <p className="lead text-muted mt-3">
            Bringing your favorite meals right to your doorstep! Fast, fresh, and delicious food made easy.
          </p>
          
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <img 
              src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2503,h_2503,c_limit/Smashburger-recipe-120219.jpg" 
              alt="Foodie Logo 1" 
              height="150" 
              className="rounded-circle about-image rotate-1 shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D" 
              alt="Foodie Logo 2" 
              height="150" 
              className="rounded-circle about-image rotate-2 shadow"
            />
            <img 
              src="https://w0.peakpx.com/wallpaper/659/683/HD-wallpaper-pasta-dish-breakfast-food-foody-lover.jpg" 
              alt="Foodie Logo 3" 
              height="150" 
              className="rounded-circle about-image rotate-3 shadow"
            />
          </div>
        </section>

        
        <section className="container mb-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded hover-card">
                <FaUtensils size={50} className="text-warning mb-3"/>
                <h4 className="fw-bold mb-2">Delicious Meals</h4>
                <p className="text-muted">
                  Choose from a wide variety of cuisines prepared by top chefs. Fresh and tasty food every time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded hover-card">
                <FaTruck size={50} className="text-warning mb-3"/>
                <h4 className="fw-bold mb-2">Fast Delivery</h4>
                <p className="text-muted">
                  Hot meals delivered to your doorstep quickly and safely. Your hunger, our priority!
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded hover-card">
                <FaHeart size={50} className="text-warning mb-3"/>
                <h4 className="fw-bold mb-2">Customer Care</h4>
                <p className="text-muted">
                  We value our customers! Support and assistance at every step to make your experience delightful.
                </p>
              </div>
            </div>
          </div>
        </section>

      
        <section className="container mb-5">
          <div className="row align-items-center g-4">
            <div className="col-md-6 text-center">
              <img 
                src="https://images.jdmagicbox.com/v2/comp/mumbai/q7/022pxx22.xx22.181022102519.y3q7/catalogue/round-the-plate-hotel-bandra-east-mumbai-home-delivery-restaurants-tx3qu2wxq6.jpg" 
                alt="Our Story" 
                className="img-fluid rounded-circle shadow about-image"
                style={{ maxWidth: '300px' }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold text-dark mb-3">Our Story</h2>
              <p className="text-muted">
                Foodie started with a simple mission: to make delicious food accessible to everyone, anywhere. From our humble beginnings, we’ve grown into a trusted online food delivery platform that brings joy to your meals.
              </p>
              <p className="text-muted">
                With a passion for culinary excellence and commitment to customer satisfaction, we ensure that every order is a delightful experience.
              </p>
            </div>
          </div>
        </section>

    
        <section className="text-center mt-5">
          <h3 className="fw-bold mb-3">Hungry? Let's Get Started!</h3>
          <a href="/menu" className="btn btn-warning btn-lg text-white shadow">Explore Menu</a>
        </section>

      </div>

      <Footer />

      
      <style>{`
        .about-page h1, .about-page h2, .about-page h3 {
          font-family: 'Poppins', sans-serif;
        }
        .about-page p {
          font-size: 1rem;
          line-height: 1.6;
        }
        .shadow {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .about-image {
          transition: transform 0.3s ease;
        }
        .about-image:hover {
          transform: scale(1.05);
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        }
        .rotate-1 { transform: rotate(-5deg); }
        .rotate-2 { transform: rotate(-4deg); }
        .rotate-3 { transform: rotate(-5deg); }
      `}</style>
    </>
  );
}
