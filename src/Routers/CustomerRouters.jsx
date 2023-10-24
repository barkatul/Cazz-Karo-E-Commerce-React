import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/component/Cart/Cart";
import Checkout from "../customer/component/Checkout/Checkout";
import Footer from "../customer/component/Footer/footer";
import Order from "../customer/component/Order/Order";
import OrderDetails from "../customer/component/Order/OrderDetails";
import Product from "../customer/component/Product/Product";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Navigation from "../customer/component/navigation/Navigation";

const CustomerRoutes = () => {
    return (
        <div>

            <div>
            <Navigation></Navigation>
            </div>

            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
                <Route path="/product/:productId" element={<ProductDetails/>}></Route>
                <Route path="/account/order" element={<Order></Order>}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails></OrderDetails>}></Route>

            </Routes>

            <div>
            <Footer></Footer>
            </div>
        </div>
    )
}

export default CustomerRoutes