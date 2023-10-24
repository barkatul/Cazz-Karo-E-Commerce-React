import React from "react";
import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
const { default: MainCarousel } = require("../../component/HomeCarousel/MainCarousel")

const HomePage = () => {
    return (
        <div>
            <MainCarousel></MainCarousel>

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurta"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Children's Kurta"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Old's Kurta"}></HomeSectionCarousel>
            </div>
        </div>
    )
}
export default HomePage;


