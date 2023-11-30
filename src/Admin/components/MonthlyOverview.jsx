import { AccountBalanceOutlined, CurrencyRupeeOutlined, InstallDesktop, MoreVertSharp, TrendingUp } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const salesData=[
    {
        stats:'245k',
        title:'Sales',
        color:'#283593',
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'5k',
        title:'Customers',
        color:'#76ff03',
        icon:<AccountBalanceOutlined sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'1.54k',
        title:'Products',
        color:'#ffab40',
        icon:<InstallDesktop sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'$88k',
        title:'Revenue',
        color:'#ec407a',
        icon:<CurrencyRupeeOutlined sx={{fontSize:"1.75rem"}}/>
    },
]

const renderStats=()=>{
    return salesData.map((item,index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",alignItems:"center"
            }}>
                <Avatar variant="rounded" sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"common.white",
                    backgroundColor:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="caption">{item.title}</Typography>
                    <Typography variant="h6">{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
    return (
        <Card sx={{position:"relative"}}>
            <CardHeader title="Monthly Overview"
            action={
                <IconButton size="small">
                    <MoreVertSharp/>
                </IconButton>
            }
            subheader={
                <Typography variant="body2">
                    <Box component="span" sx={{fontWeight:600, mx:1}}>
                        Total 48.5% Growth
                    </Box>
                    this month
                </Typography>
            }
            titleTypographyProps={{
                sx:{
                    mb:2.5,
                    lineHeight:'2rem !important',
                    letterSpacing:'.15px !important'
                }
            }}
            />
            <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5,0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview