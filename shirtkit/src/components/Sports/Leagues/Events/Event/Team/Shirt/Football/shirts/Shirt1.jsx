import React from 'react'
import generateString from "../../../../../../../../../random"

export const Shirt1 = ({color ,cr,so}) => {

   
  const [color1, color2, color3, color4, color5, color6,color8,color9,color10,color11] = color.split(",")
  const color7=so
  return (
    
  

 <div>
    
          <svg className={generateString(20)} width={48} height={52} viewBox="0 0 48 52" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id="K1-1-path-1" /><mask id="K16-1-mask-2" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K1-1-path-1" /></mask><mask id="K16-1-mask-3" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K1-1-path-1" /></mask><path id="K16-1-path-4" d="M7 52l5-17h24l5 17H26.4L24 45.81 21.6 52z" /><mask id="K16-1-mask-5" x={0} y={0} width={34} height={17} fill="#fff"><use xlinkHref="#K1-1-path-4" /></mask><mask id="K16-1-mask-6" x={0} y={0} width={34} height={17} fill="#fff"><use xlinkHref="#K1-1-path-4" /></mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K16-1"><path id={generateString(20)} fill={color7} d="M7 52l5-16h24l5 16H26.4L24 45.81 21.6 52z" /><path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id="color1" fill={color1}/><path id={generateString(20)} fill={color3} d="M36 36H12.65l23.9-35L48 13.68l-6.584 7.611L36 17z" /><path id={generateString(20)} fill={color2} d="M36.55 1l2.476 2.708L16.984 36H12v-8.83L31.276.184z" /><g id="hires-detail"><g id="Outline1"><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K1-1-mask-2)" strokeWidth={4} xlinkHref="#K1-1-path-1" /><use stroke="#272727" mask="url(#K1-1-mask-3)" strokeWidth={2} xlinkHref="#K1-1-path-1" /></g><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K1-1-mask-5)" strokeWidth={4} xlinkHref="#K1-1-path-4" /><use stroke="#272727" mask="url(#K1-1-mask-6)" strokeWidth={2} xlinkHref="#K1-1-path-4" /></g><path d="M13 36h22v1H13v-1zm11 1h1v6h-1v-6zM34 7h1v10.818h-1V7zM13 7h1v10.818h-1V7z" id="shadow" fill="#000" opacity=".2" /></g></g></g></g></svg>
          </div> );
      }



