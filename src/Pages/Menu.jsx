import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const menuItems = [
  {
    id: 1,
    name: "Paneer Masala",
    description: "Rich and creamy paneer in tomato gravy",
    price: "₹250",
    image: "https://t3.ftcdn.net/jpg/14/30/79/24/360_F_1430792488_yS3kSOVaRWfBGZ7mh2jg9Ed0c2ydZVgG.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Classic pizza with fresh basil and mozzarella",
    price: "₹200",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1d/13/98/18/margherita-pizza.jpg",
  },
  {
    id: 3,
    name: "Pav Bhaji",
    description: "Popular street food with spiced vegetable mash",
    price: "₹300",
    image: "https://www.thespicecollective.co/cdn/shop/articles/20220214182237-pav-20bhaji-20-20adobestock_547x.jpg?v=1644862961",
  },
  {
    id: 4,
    name: "Dal Makhani",
    description: "Slow-cooked black lentils with butter",
    price: "₹180",
    image: "https://thumbs.dreamstime.com/b/traditional-indian-punjabi-dish-dal-makhani-lentils-beans-black-bowl-served-naan-flat-bread-fresh-cilantro-two-spoons-290979126.jpg",
  },
  {
    id: 5,
    name: "Butter Naan",
    description: "Soft and fluffy Indian bread",
    price: "₹50",
    image: "https://img.freepik.com/premium-photo/indian-naan-bread-with-parsley-wooden-plate-black-background_934652-1031.jpg",
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Sweet and soft Indian dessert",
    price: "₹80",
    image: "https://www.govindam.co.in/wp-content/uploads/2025/01/kala-Jamun-1.webp",
  },
  {
    id: 7,
    name: "Masala Dosa",
    description: "Crispy dosa with spicy potato filling",
    price: "₹120",
    image: "https://img.freepik.com/premium-photo/masala-dosa-chutney-black-plate_1114068-63174.jpg",
  },
  {
    id: 8,
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in spices",
    price: "₹280",
    image:"https://img.freepik.com/premium-photo/paneer-tikka-is-indian-cuisine-dish-with-grilled-paneer-cheese-with-vegetables-spices-indian-food_781325-5489.jpg",
  },
  {
    id: 9,
    name: "Chole Bhature",
    description: "Spicy chickpeas with deep-fried bread",
    price: "₹150",
    image: "https://t4.ftcdn.net/jpg/12/70/22/97/360_F_1270229707_V2izDFd1jJeSnVDfX12edEeTSE8qTocE.jpg",
  },
  {
    id: 10,
    name: "Rasgulla",
    description: "Soft and syrupy Indian sweet",
    price: "₹90",
    image: "https://img.freepik.com/premium-photo/sweet-rasgulla-spongy-syrup-isolated-black-background_787273-71280.jpg",
  },
  {
    id: 10,
    name: "Kaju Masala",
    description: "Best dish in kaju masala",
    price: "₹200",
    image: "https://www.foodie-trail.com/wp-content/uploads/2022/01/PHOTO-2022-01-13-15-57-28.jpg",
  },
  {
    id: 10,
    name: "Idali Sambhar",
    description: "Soft and fluffy idlis served with spicy sambhar",
    price: "₹100",
    image: "https://www.shutterstock.com/image-photo/idly-idli-south-indian-main-260nw-1932844394.jpg",
  },
];

export default function MenuPage() {
  const containerStyle = {
    padding: "50px 20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#000",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // responsive: auto-fit columns
    gap: "25px",
    justifyItems: "center",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, boxShadow 0.3s",
    cursor: "pointer",
    width: "100%",
  };

  const imageStyle = {
    height: "150px",
    width: "100%",
    objectFit: "cover",
  };

  const infoStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const nameStyle = {
    marginBottom: "8px",
    color: "#333",
  };

  const descStyle = {
    fontSize: "0.85rem",
    color: "#666",
    marginBottom: "12px",
  };

  const priceStyle = {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#ff6347",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
  };

  return (
    <>
      <Navbar/>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Delicious Menu</h2>
        <div style={gridStyle}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.image} alt={item.name} style={imageStyle} />
              <div style={infoStyle}>
                <h3 style={nameStyle}>{item.name}</h3>
                <p style={descStyle}>{item.description}</p>
                <span style={priceStyle}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
