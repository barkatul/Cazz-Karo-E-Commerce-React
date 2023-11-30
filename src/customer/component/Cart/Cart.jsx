import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { get } from "../../../State/Cart/Action";
import CartItem from "./CartItem";

const Cart = () => {

    const naviagte = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);

    const handleCheckOut = () => {
        naviagte("/checkout")
    };
    
    useEffect(()=>{
        dispatch(get())
    },[cart.updateCartItem,cart.deleteCartItem])

    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {cart.cart?.cartItems.map((item)=> <CartItem item={item}/>)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="p-5 shadow-lg border rounded-md">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 mb-10 font-semibold">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>Rs.{cart.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">-Rs.{cart.cart?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delievery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600 font-bold">{cart.cart?.totalDiscountedPrice}</span>
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