import React from "react";

export default function FoodCards() {
  const foods = [
    {
      img: "https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg",
      title: "Cheesy Pizza",
      desc: "Hot & cheesy with fresh toppings.",
      price: "$120.99",
    },
    {
      img: "https://www.mashed.com/img/gallery/only-14-percent-of-people-consider-this-the-best-fast-food-burger/intro-1624562493.jpg",
      title: "Juicy Burger",
      desc: "Loaded with fresh veggies & cheese.",
      price: "$100.99",
    },
    {
      img: "https://wallpapercat.com/w/full/b/5/d/584884-1920x1080-desktop-full-hd-pasta-background-photo.jpg",
      title: "Creamy Pasta",
      desc: "Italian style creamy delight.",
      price: "$80.49",
    },
    {
      img: "https://media.istockphoto.com/id/1161711740/photo/greek-salad-with-fresh-vegetables-feta-cheese-and-kalamata-olives-healthy-food-top-view.jpg?s=612x612&w=0&k=20&c=pQy_0z1-a4YqY1bGc2JpVLgEL3oDYLJqEsQNNVwQ5SQ=",
      title: "Fresh Salad",
      desc: "Healthy & refreshing.",
      price: "$40.99",
    },
    {
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Testy Nuddles",
      desc: "Spicy & flavorful noddles.",
      price: "$50.99",
    },
    {
      img: "https://media.istockphoto.com/id/1267018755/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=pdc4_DRm_f0pm2dNhBHUabGLUVEzejGobJnGnNXLimU=",
      title: "Vada Pav",
      desc: "Spicy potato fritter vada in a bun.",
      price: "$40.99",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {foods.map((food, index) => (
          <div key={index} className="col-md-4 col-lg-4 col-sm-6">
            <div
              className="card shadow-lg border-0 h-100"
              style={{
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={food.img}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
                alt={food.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{food.title}</h5>
                <p className="card-text text-muted">{food.desc}</p>
                <h6 className="text-success fw-bold">{food.price}</h6>
                <button className="btn btn-warning fw-bold mt-2">
                  Order Now 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
