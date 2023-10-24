import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../HomeSectionCard/Card";


const HomeSectionCarousel = ({data, sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3.5 },
    };

    const slidePrev = ()=>{
        console.log('slideprev clicked')
        setActiveIndex(activeIndex-1);
    }
    const slideNext=()=>{
        console.log('slideNext clicked')
        setActiveIndex(activeIndex+1);
    }

    const syncActiveIndex=({item}) => setActiveIndex(item)

  const items = data.slice(0,10).map((item) => <Card product={item}></Card>);
  return (
    <div className="m-5 px-4 lg:px-8 border">
    <Typography variant="h2" gutterBottom>
        {sectionName}
      </Typography>
      <div className="relative p-5">
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          animationType="fade"
          duration={800}
        />
        {activeIndex !== items.length-4 && <Button
          onClick={slideNext}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "12rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "whitesmoke",
          }}
          aria-label="prev"
        >
          <ArrowBackIosTwoToneIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        { activeIndex!==0 && <Button
          onClick={slidePrev}
          variant="contained"
          className="z-49"
          sx={{
            position: "absolute",
            top: "12rem",
            left: "-4.5rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor: "whitesmoke",
          }}
          aria-label="next"
        >
          <ArrowBackIosTwoToneIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
