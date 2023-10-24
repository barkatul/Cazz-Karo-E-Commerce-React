import AdjustIcon from '@mui/icons-material/Adjust';
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom/dist';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-l hover:shadow-yellow-200 border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://www.filmyvastra.com/wp-content/uploads/2019/06/Black-Wide-tshirt-without-hanger-Recovered-scaled.jpg"
                        alt=""/>
                        <div className="ml-5 space-y-2">

                            <p className="">Men's Black T shirt</p>
                            <p className="opacity-50 text-xs font-semibold">Size:L</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>

                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>Rs.1099</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                        <AdjustIcon sx={{ width:"15px", height:"15px"}}
                        className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered on March 03
                        </span>
                    </p>
                    <p className='text-sm'>
                        Your Item has been Delivered
                    </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivered on March 03
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard