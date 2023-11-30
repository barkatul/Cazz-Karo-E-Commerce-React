import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";


function OrderSummary(){

    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    const { order } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrderById(orderId))
    },[orderId])

    const handleCheckout=()=>{
        dispatch(createPayment(orderId))
    }
    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard address = {order.order?.shippingAddress}></AddressCard>
            </div>
            <div>
            <div className="lg:grid grid-cols-3 relative">
                <div className="col-span-2">
                    {order.order?.orderItems.map((item)=> <CartItem item={item}/>)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="p-5 shadow-lg border rounded-md">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 mb-10 font-semibold">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>Rs.{order.order?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">-Rs.{order.order?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delievery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600 font-bold">Rs.{order.order?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant="contained" className="w-full" sx={{marginTop:"30px" ,px:"2.5rem", py:".7rem", bgcolor:"#9155fd",}}>
                            CHECKOUT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OrderSummary

