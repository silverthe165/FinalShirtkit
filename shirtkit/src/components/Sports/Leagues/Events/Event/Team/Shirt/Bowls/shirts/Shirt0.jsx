import React from 'react'

export default function Shirt0({color}) {
    const [color1, color2, color3, color4, color5, color6,color7] = color.split(',')

  return (
  
            <svg className="tk-TeamKit_SVG" width={48} height={44} viewBox="0 0 48 44" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M36 4l12 11.636-6.384 6.717L36 17.48V44H12V17.48l-5.374 4.6L0 15.525 12 4l5.892-1.406 1.24-2.001C20.799.305 21.835 0 23.859 0c2.063 0 2.308.21 4.662.448l1.586 2.226L36 4z" id="K10-1-path-1" /><mask id="K10-1-mask-2" x={0} y={0} width={48} height={44} fill="#fff"><use xlinkHref="#K10-1-path-1" /></mask><mask id="K10-1-mask-3" x={0} y={0} width={48} height={44} fill="#fff"><use xlinkHref="#K10-1-path-1" /></mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K10-1"><path d="M36 4l12 11.636-6.384 6.717L36 17.48V44H12V17.48l-5.374 4.6L0 15.525 12 4l5.892-1.406 1.24-2.001C20.799.305 21.835 0 23.859 0c2.063 0 2.308.21 4.662.448l1.586 2.226L36 4z" id="color1" fill={color1} /><g id="hires-detail"><g id="Outline7"><g id="hires-detail"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K10-1-mask-2)" strokeWidth={4} xlinkHref="#K10-1-path-1" /><use stroke="#272727" mask="url(#K10-1-mask-3)" strokeWidth={2} xlinkHref="#K10-1-path-1" /></g></g></g></g></g></svg>
          );
        }
