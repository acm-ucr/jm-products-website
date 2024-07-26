import React from "react";
import Header from "./Header.jsx";
// import PDFLink from "../PDFLink.jsx";
import { InformationData } from "@/data/Information.js";
const Information = () => {
  return (
    <div className="w-2/3 gap-10 flex flex-col justify-center">
      <Header title="INFORMATIONS" size={"text-5xl"} />
      <div className="w-5/6 flex flex-col justify-center items-center gap-2">
        {InformationData.map((item, index) => (
          <div key={index} className="">
            <h3 className="text-bold flex flex-col text-left font-bold text-1xl font-hk">
              {item.title}
            </h3>
            {item.points && (
              <ul className="list-disc flex flex-col">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    {point.url ? (
                      <a href={point.url}>{point.text}</a>
                    ) : (
                      <p className="">{point.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* <div className= "flex justify-center items-center flex-col" >
        {InformationData.map((item, index) => (

        //   if (item.title) {
        //     <div className= "text-black font-bold">
        //     </div>
        // }

        <li key={index}> {item.title} {item.text} {item.link} </li> //just testing if something shows up on the page
        
        ))} */}
      </div>
    </div>
  );
};

export default Information;

//   {/* {index === 0 ? (
//         //     <PDFLink
//         //     text={item.text}
//         //     link={item.link}
//         //   ) : () */

// //     <p>Very Cool Very Swag I like it</p>*/}
