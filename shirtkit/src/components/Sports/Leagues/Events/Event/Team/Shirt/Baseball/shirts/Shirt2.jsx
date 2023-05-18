import React from 'react'

export default function Shirt2({color}) {




  const [color1, color2, color3, color4, color5, color6] = color.split(',')


  return (

    
          <svg className="tk-TeamKit_SVG" width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
            <path d="M8 47.998v-26.97l-8-2.541s1.54-3.835 1.976-4.782c1.246-2.708 2.677-5.416 4.277-7.95A48 48 0 0 1 8.785 2.11l.13-.17.186-.11c.84-.498 2.138-.877 3.822-1.195.928-.176 1.917-.32 2.904-.436a47.794 47.794 0 0 1 1.324-.136l.668-.054.367.548c.084.126.262.369.525.688.444.538.956 1.078 1.524 1.58 1.258 1.109 3.579 2.105 3.579 2.105l.216.064.2-.064s2.32-.996 3.579-2.106c.568-.501 1.08-1.04 1.524-1.58.263-.318.44-.56.525-.687l.368-.548.667.054a47.794 47.794 0 0 1 1.324.136c.987.116 1.976.26 2.904.436 1.684.318 2.982.697 3.822 1.195l.185.11.131.17a48 48 0 0 1 2.532 3.645c1.6 2.534 3.031 5.242 4.277 7.95.436.947 1.976 4.782 1.931 4.782L40 21.029v26.97H8z" id="K12-2-path-1" /><mask id="K12-2-mask-2" x={0} y={0} width={48} height="47.99" fill="#fff">
              <use xlinkHref="#K12-2-path-1" /></mask>
              <mask id="K12-2-mask-3" x={0} y={0} width={48} height="47.99" fill="#fff"><use xlinkHref="#K12-2-path-1" />
              </mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K12-2"><path d="M8 47.998v-26.97l-8-2.541s1.54-3.835 1.976-4.782c1.246-2.708 2.677-5.416 4.277-7.95A48 48 0 0 1 8.785 2.11l.13-.17.186-.11c.84-.498 2.138-.877 3.822-1.195.928-.176 1.917-.32 2.904-.436a47.794 47.794 0 0 1 1.324-.136l.668-.054.367.548c.084.126.262.369.525.688.444.538.956 1.078 1.524 1.58 1.258 1.109 3.579 2.105 3.579 2.105l.216.064.2-.064s2.32-.996 3.579-2.106c.568-.501 1.08-1.04 1.524-1.58.263-.318.44-.56.525-.687l.368-.548.667.054a47.794 47.794 0 0 1 1.324.136c.987.116 1.976.26 2.904.436 1.684.318 2.982.697 3.822 1.195l.185.11.131.17a48 48 0 0 1 2.532 3.645c1.6 2.534 3.031 5.242 4.277 7.95.436.947 1.976 4.782 1.931 4.782L40 21.029v26.97H8z" id="color1" fill={color1} />
              <path d="M1.473 14.877L9 17.345V21.3l-1-.271-7.999-2.542c.015-.04.861-2.147 1.472-3.61zM39 21.3v-3.955l7.527-2.468c.616 1.477 1.473 3.61 1.473 3.61l-8 2.542-1 .271z" id="color2" fill={color2} />
              <g id="hires-detail"><g id="Outline9"><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K12-2-mask-2)" strokeWidth={4} xlinkHref="#K12-2-path-1" />
              <use stroke="#272727" mask="url(#K12-2-mask-3)" strokeWidth={2} xlinkHref="#K12-2-path-1" />
              </g><path d="M9 14h1v12H9V14zm29 0h1v12h-1V14zM23 47h1V8l2.76-3.293-1.658.51L23 8v39z" id="shadow" fill="#000" opacity=".2" />
              </g></g></g></g></svg>
        );
      }

