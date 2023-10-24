import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";
import CartItem from "./CartItem";

const Cart = () => {

    const naviagte = useNavigate();

    const handleCheckOut = () => {
        naviagte("/checkout")
    };
    
    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1,1,1,1].map((item)=> <CartItem/>)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="p-5 shadow-lg border rounded-md">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 mb-10 font-semibold">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>Rs.4697</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">-Rs.3419</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delievery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600 font-bold">Rs.1278</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckOut} variant="contained" className="w-full" sx={{marginTop:"30px" ,px:"2.5rem", py:".7rem", bgcolor:"#9155fd",}}>
                            CHECKOUT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;