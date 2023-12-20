import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Series = () => {
    const [series, setSeries] = useState([
        {
            id:1,
            name: "Dark",
            imgsrc: "https://wallpapercave.com/wp/wp4056410.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80100172"
        },
        {
            id:2,
            name: "Extra Curricular",
            imgsrc: "https://wallpapercave.com/wp/wp7418499.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80990668"
        },
        {
            id:3,
            name: "Stranger Things",
            imgsrc: "https://wallpapercave.com/wp/wp1917154.jpg",
            title: "A Netflix Original Series",
            link: "https://www.netflix.com/in/title/80057281"
        }
    ]);
  return (
    <>
    <h1>SERIRS</h1>
    <div className="main">
        
      <div className="container">
        {
            series?.map((ser)=>{
                return(<div className="box">
                        <h5>NAME : {ser.name}</h5>
                        <img  src={ser.imgsrc} alt="img" />
                        <h5>TITLE : {ser.title}</h5>
                        <a href={ser.link} target="_blank">{ser.link}</a> <br/>
                        <Link to = {`/series/detail/${ser.id}/${ser.name}`} className="btn btn-info">DETAIL</Link>
                        {/* <Link to = {`detail/${ser.id}`} className="btn btn-info">DETAIL</Link> */}
                        
                </div>)
            })
        }
        {/* <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div> */}
      </div>
    </div>
    </>
  );
};
