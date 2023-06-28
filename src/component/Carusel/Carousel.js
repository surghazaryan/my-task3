import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
import { images } from "./Helpers/CarouselData"

export default function Carousel() {
    const [currImg, setcurImg] = useState(0)
    return (
        <>
            <div className="left">
                <ChevronLeft onClick={() => { currImg > 0 && setcurImg(currImg - 1) }} />
            </div>
            <img src={images[currImg].img} />
            <div className="right">
                <ChevronRight onClick={() => { currImg < images.length - 1 && setcurImg(currImg + 1) }} />
            </div>
        </>
    )
}
