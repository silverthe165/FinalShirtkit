import generateString from "../../../../../../../../../random";

export const DefaultShirt = ({home,name}) => {

  const regex = /\((w)\)/; // finding if it is woman to put a woman t shirt in volleball
  const result = name.match(regex);
  let t;
  let p;

  if (result) {
   t= <svg className="tk-TeamKit_SVG" width={48} height={56} viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"><defs><path d="M28 41V16.293c.026 0-.818-1.945-1.267-2.952-.45-1.006-1.053-3.043-1.122-3.601-.096-.768-.102-2.042-.033-3.656.033-.773.082-1.596.143-2.441.042-.578.086-1.132.13-1.642.027-.306.21-2.001.21-2.001h-3.573s-5.451 7.563-6.456 7.702C15.027 7.84 9.567 0 9.567 0H5.833s.176 1.695.202 2c.045.51.09 1.065.13 1.643.061.845.11 1.668.143 2.441.07 1.614.064 2.888-.032 3.656-.07.565-.582 2.454-1.045 3.594-.463 1.139-1.201 2.96-1.231 2.96V41h24z" id="K4-2-path-1" /><mask id="K4-2-mask-2" x={0} y={0} width="24.001" height={41} fill="#fff"><use xlinkHref="#K4-2-path-1" /></mask><mask id="K4-2-mask-3" x={0} y={0} width="24.001" height={41} fill="#fff"><use xlinkHref="#K4-2-path-1" /></mask><path id="K4-2-path-4" d="M28 40l-24 .011-4 15.93h14l1.882-6.345L18 55.94h14z" /><mask id="K4-2-mask-5" x={0} y={0} width={32} height="15.941" fill="#fff"><use xlinkHref="#K4-2-path-4" /></mask><mask id="K4-2-mask-6" x={0} y={0} width={32} height="15.941" fill="#fff"><use xlinkHref="#K4-2-path-4" /></mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K4-2"><path id={generateString(20)} fill="#ffffff" d="M37 40l-24 .011-4 15.93h14l1.882-6.345L27 55.94h14z" /><path d="M37 40V16.293c.026 0-.818-1.945-1.267-2.952-.45-1.006-1.053-3.043-1.122-3.601-.096-.768-.102-2.042-.033-3.656.033-.773.082-1.596.143-2.441.042-.578.086-1.132.13-1.642.027-.306.21-2.001.21-2.001h-3.573s-5.451 7.563-6.456 7.702C24.027 7.84 18.567 0 18.567 0h-3.734s.176 1.695.202 2c.045.51.09 1.065.13 1.643.061.845.11 1.668.143 2.441.07 1.614.064 2.888-.032 3.656-.07.565-.582 2.454-1.045 3.594-.463 1.139-1.201 2.96-1.231 2.96V40h24z" id={generateString(20)} fill="#ffffff" /><g id="hires-detail" transform="translate(9)"><g id="Outline2"><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-2-mask-2)" strokeWidth={4} xlinkHref="#K4-2-path-1" /><use stroke="#272727" mask="url(#K4-2-mask-3)" strokeWidth={2} xlinkHref="#K4-2-path-1" /></g><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-2-mask-5)" strokeWidth={4} xlinkHref="#K4-2-path-4" /><use stroke="#272727" mask="url(#K4-2-mask-6)" strokeWidth={2} xlinkHref="#K4-2-path-4" /></g></g></g></g></g></svg>
    
    p= <svg className="tk-TeamKit_SVG" width={48} height={56} viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"><defs><path d="M28 41V16.293c.026 0-.818-1.945-1.267-2.952-.45-1.006-1.053-3.043-1.122-3.601-.096-.768-.102-2.042-.033-3.656.033-.773.082-1.596.143-2.441.042-.578.086-1.132.13-1.642.027-.306.21-2.001.21-2.001h-3.573s-5.451 7.563-6.456 7.702C15.027 7.84 9.567 0 9.567 0H5.833s.176 1.695.202 2c.045.51.09 1.065.13 1.643.061.845.11 1.668.143 2.441.07 1.614.064 2.888-.032 3.656-.07.565-.582 2.454-1.045 3.594-.463 1.139-1.201 2.96-1.231 2.96V41h24z" id="K4-2-path-1" /><mask id="K4-2-mask-2" x={0} y={0} width="24.001" height={41} fill="#fff"><use xlinkHref="#K4-2-path-1" /></mask><mask id="K4-2-mask-3" x={0} y={0} width="24.001" height={41} fill="#fff"><use xlinkHref="#K4-2-path-1" /></mask><path id="K4-2-path-4" d="M28 40l-24 .011-4 15.93h14l1.882-6.345L18 55.94h14z" /><mask id="K4-2-mask-5" x={0} y={0} width={32} height="15.941" fill="#fff"><use xlinkHref="#K4-2-path-4" /></mask><mask id="K4-2-mask-6" x={0} y={0} width={32} height="15.941" fill="#fff"><use xlinkHref="#K4-2-path-4" /></mask></defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K4-2"><path id={generateString(20)} fill="#000000" d="M37 40l-24 .011-4 15.93h14l1.882-6.345L27 55.94h14z" /><path d="M37 40V16.293c.026 0-.818-1.945-1.267-2.952-.45-1.006-1.053-3.043-1.122-3.601-.096-.768-.102-2.042-.033-3.656.033-.773.082-1.596.143-2.441.042-.578.086-1.132.13-1.642.027-.306.21-2.001.21-2.001h-3.573s-5.451 7.563-6.456 7.702C24.027 7.84 18.567 0 18.567 0h-3.734s.176 1.695.202 2c.045.51.09 1.065.13 1.643.061.845.11 1.668.143 2.441.07 1.614.064 2.888-.032 3.656-.07.565-.582 2.454-1.045 3.594-.463 1.139-1.201 2.96-1.231 2.96V40h24z" id={generateString(20)} fill="#000000" /><g id="hires-detail" transform="translate(9)"><g id="Outline2"><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-2-mask-2)" strokeWidth={4} xlinkHref="#K4-2-path-1" /><use stroke="#272727" mask="url(#K4-2-mask-3)" strokeWidth={2} xlinkHref="#K4-2-path-1" /></g><g id="outline"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-2-mask-5)" strokeWidth={4} xlinkHref="#K4-2-path-4" /><use stroke="#272727" mask="url(#K4-2-mask-6)" strokeWidth={2} xlinkHref="#K4-2-path-4" /></g></g></g></g></g></svg>
  }
  else{
    t=   <div><svg className="tk-TeamKit_SVG" width={48} height={56} viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
    <path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id="K4-1-path-1" />
  <mask id="K4-1-mask-2" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K4-1-path-1" />
  </mask><mask id="K4-1-mask-3" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K4-1-path-1" />
  </mask><path id="K4-1-path-4" d="M7 52l5-17h24l5 17H26.4L24 45.81 21.6 52z" /><mask id="K4-1-mask-5" x={0} y={0} width={34} height={17} fill="#fff">
    <use xlinkHref="#K4-1-path-4" /></mask><mask id="K4-1-mask-6" x={0} y={0} width={34} height={17} fill="#fff"><use xlinkHref="#K4-1-path-4" /></mask>
    </defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K4-1">
      <path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id={generateString(20)} fill="#ffffff" />
    <path id={generateString(20)} fill="#ffffff" d="M7 52l5-16h24l5 16H26.4L24 45.81 21.6 52z" />
    <g id="hires-detail"><g id="Outline1"><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-1-mask-2)" strokeWidth={4} xlinkHref="#K4-1-path-1" />
    <use stroke="#272727" mask="url(#K4-1-mask-3)" strokeWidth={2} xlinkHref="#K4-1-path-1" />
    </g><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-1-mask-5)" strokeWidth={4} xlinkHref="#K4-1-path-4" />
    <use stroke="#272727" mask="url(#K4-1-mask-6)" strokeWidth={2} xlinkHref="#K4-1-path-4" />
    </g><path d="M13 36h22v1H13v-1zm11 1h1v6h-1v-6zM34 7h1v10.818h-1V7zM13 7h1v10.818h-1V7z" id="shadow" fill="#000" opacity=".2" /></g></g></g></g></svg></div>



 
 p=   <div> <svg className="tk-TeamKit_SVG" width={48} height={56} viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
<path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id="K4-1-path-1" />
<mask id="K4-1-mask-2" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K4-1-path-1" />
</mask><mask id="K4-1-mask-3" x={0} y={0} width={48} height={36} fill="#fff"><use xlinkHref="#K4-1-path-1" />
</mask><path id="K4-1-path-4" d="M7 52l5-17h24l5 17H26.4L24 45.81 21.6 52z" /><mask id="K4-1-mask-5" x={0} y={0} width={34} height={17} fill="#fff">
<use xlinkHref="#K4-1-path-4" /></mask><mask id="K4-1-mask-6" x={0} y={0} width={34} height={17} fill="#fff"><use xlinkHref="#K4-1-path-4" /></mask>
</defs><g id="SVG-Team-Kits-Separated" fill="none" fillRule="evenodd"><g id="K4-1">
  <path d="M24 3.714C27.874 3.64 30 0 30 0l6.554.997L48 13.685l-6.6 7.588L36 17v19H12V17l-5.387 4.273L0 13.68 11.377 1.238 18 0s2.126 3.79 6 3.714z" id={generateString(20)} fill="#000000" />
<path id={generateString(20)} fill="#000000" d="M7 52l5-16h24l5 16H26.4L24 45.81 21.6 52z" />
<g id="hires-detail"><g id="Outline1"><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-1-mask-2)" strokeWidth={4} xlinkHref="#K4-1-path-1" />
<use stroke="#272727" mask="url(#K4-1-mask-3)" strokeWidth={2} xlinkHref="#K4-1-path-1" />
</g><g id="Shape"><use strokeOpacity=".07" stroke="#FFF" mask="url(#K4-1-mask-5)" strokeWidth={4} xlinkHref="#K4-1-path-4" />
<use stroke="#272727" mask="url(#K4-1-mask-6)" strokeWidth={2} xlinkHref="#K4-1-path-4" />
</g><path d="M13 36h22v1H13v-1zm11 1h1v6h-1v-6zM34 7h1v10.818h-1V7zM13 7h1v10.818h-1V7z" id="shadow" fill="#000" opacity=".2" /></g></g></g></g></svg></div> 


  }


  
  
 
  
    return (
  <div style ={{position:"flex"}}>{home?t:p}</div> 
);}
