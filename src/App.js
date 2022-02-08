
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Productscard from "./components/Products";
import img from './images/4.jpg'
import img1 from './images/5.png'
function App() {


const products = [
  {
    title: "Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 650,
    quantity: 300,
    image:img
  },
  {
    title: "Crunch Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 750,
    quantity: 400,
    image:img1
    
  },
  {
    title: " Zingar Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 850,
    quantity: 650,
    image:img
  },
  {
    title: "Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 650,
    quantity: 300,
    image:img1
  },
  {
    title: "Crunch Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 750,
    quantity: 400,
    image:img1
  },
  {
    title: " Zingar Burger",
    description:
      "4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll.",
    price: 850,
    quantity: 650,
    image:img1
  }
]



  console.log(img)
  return (
    <div className="container">
      <Navbar />
      <Slider />
      <div className="row mt-2 mb-2">
         
        
        {products.map((product,numbers) => {
          return <Productscard product={product}   />;
        })}
      </div>
    </div>
  );
}

export default App;
