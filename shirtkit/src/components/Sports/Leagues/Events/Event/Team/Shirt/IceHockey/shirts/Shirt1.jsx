import React from 'react'

export default function Shirt1({color}) {
    const [color1, color2, color3, color4, color5, color6,color7] = color.split(',')

  return (

      
            <svg className="tk-TeamKit_SVG" width={48} height={36} viewBox="0 0 48 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 36V20L8.04 31.284 0 28.546S7.844 4.636 9.017 2.715C11.218 0 18.387 0 18.387 0s2.434 3.019 5.324 3.578C26.601 3.018 29.037 0 29.037 0s7.168 0 9.37 2.715C39.578 4.637 48 28.571 48 28.571l-8 2.713L36 20v16H12z" id="K11-1-path-1" /><mask id="K11-1-mask-2" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K11-1-path-1" /></mask><mask id="K11-1-mask-3" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K11-1-path-1" /></mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K11"><path d="M12 36V20L8.04 31.284 0 28.546S7.844 4.636 9.017 2.715C11.218 0 18.387 0 18.387 0s2.434 3.019 5.324 3.578C26.601 3.018 29.037 0 29.037 0s7.168 0 9.37 2.715C39.578 4.637 48 28.571 48 28.571l-8 2.713L36 20v16H12z" id="color1" fill={color1}/><g id="hires-detail"><g id="Outline8"><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K11-1-mask-2)" strokeWidth={4} xlinkHref="#K11-1-path-1" /><use stroke="#272727" mask="url(#K11-1-mask-3)" strokeWidth={2} xlinkHref="#K11-1-path-1" /></g><path id="Rectangle-path" fill="#000" opacity=".2" d="M34 10h1v10h-1zM13 10h1v10h-1z" /></g></g></g></g></svg>
          );
        }
