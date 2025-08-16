import React from "react";

export default function FoodCarousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

    
      <div className="carousel-inner">

        
        <div className="carousel-item active" data-bs-interval="4000">
          <img
            src="https://wallpapers.com/images/hd/fantastic-stagioni-pizza-toxdmwcsg37qfhw3.jpg"
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover", filter: "brightness(70%)" }}
            alt="Pizza"
          />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2 className="fw-bold">Hot & Cheesy Pizza</h2>
            <p>Freshly baked with premium toppings just for you!</p>
            <button className="btn btn-warning fw-bold px-4 py-2">Order Now 🍕</button>
          </div>
        </div>

        
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://wallpapercat.com/w/full/2/2/2/585069-3840x2160-desktop-4k-hamburger-background.jpg"
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover", filter: "brightness(70%)" }}
            alt="Burger"
          />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2 className="fw-bold">Juicy & Tasty Burgers</h2>
            <p>Loaded with fresh veggies and crispy fries!</p>
            <button className="btn btn-danger fw-bold px-4 py-2">Grab a Bite 🍔</button>
          </div>
        </div>

      
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740&q=80"
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover", filter: "brightness(70%)" }}
            alt="Pasta"
          />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2 className="fw-bold">Creamy Italian Pasta</h2>
            <p>Indulge in rich flavors of authentic Italy!</p>
            <button className="btn btn-success fw-bold px-4 py-2">Taste Now 🍝</button>
          </div>
        </div>
      </div>

  
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
