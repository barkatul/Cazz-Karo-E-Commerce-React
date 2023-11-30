import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import ControlPointDuplicateSharpIcon from '@mui/icons-material/ControlPointDuplicateSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from './components/CreateProductForm';
import CustomersTable from './components/CustomersTable';
import Dashboard from './components/Dashboard';
import OrdersTable from './components/OrdersTable';
import ProductsTable from './components/ProductsTable';

const menu = [
    {name: "Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name: "Products",path:"/admin/products",icon:<CategoryIcon/>},
    {name: "Customers",path:"/admin/customers",icon:<AccountCircleIcon/>},
    {name: "Orders",path:"/admin/orders",icon:<CheckCircleOutlineSharpIcon/>},
    {name: "AddProduct",path:"/admin/product/create",icon:<ControlPointDuplicateSharpIcon/>},
]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}
        >

            {/*{{isLargeScreen && <Toolbar/>}}*/}
            <>
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>
            </>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon></AccountCircleIcon>
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <div>
            <div className='flex h-[100vh]'>
                <CssBaseline/>

                <div className='shadow-lg shadow-gray-600 w-[15%] border border-r-gray-300 h-full fixed top-0'>
                {drawer}
                </div>

                <div className='w-[85%] h-full ml-[15%]'>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}></Route>
                        <Route path='/product/create' element={<CreateProductForm/>}></Route>
                        <Route path='/customers' element={<CustomersTable/>}></Route>
                        <Route path='/orders' element={<OrdersTable/>}></Route>
                        <Route path='/products' element={<ProductsTable/>}></Route>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin