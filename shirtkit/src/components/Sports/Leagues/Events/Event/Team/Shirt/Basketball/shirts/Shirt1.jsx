import generateString from "../../../../../../../../../random";

export default function Shirt1({color}) {

    const [color1, color2, color3, color4, color5, color6,color7] = color.split(',')


  return (

  
            <svg className={generateString(20)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={32} height={56} viewBox="0 0 32 56" aria-hidden="true" focusable="false">
              <defs><path id="a" d="M28 36l4 20H17.655L16 51.31 14.345 56H0l4-20z" />
              <mask id="c" x={0} y={0} width={32} height={20} fill="#fff">
                <use xlinkHref="#a" /></mask><mask id="d" x={0} y={0} width={32} height={20} fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <path d="M11.237.29a13.22 13.22 0 0 0 1.618 1.406c.992.725 1.958 1.199 2.797 1.312.124.017.243.026.357.026 1.312.006 2.464-.478 3.46-1.304.353-.293.66-.609.916-.922.15-.184.246-.32.287-.385L20.969 0l3.95.35.892.092-.085.851a100.737 100.737 0 0 0-.186 2.188c-.06.807-.108 1.594-.14 2.332-.069 1.543-.063 2.76.03 3.493.07.533.249 1.204.522 1.973.166.466.362.958.583 1.468.256.591.531 1.174.807 1.722.164.328.465.887.658.887V37H4V15.568l.292-.373a36.437 36.437 0 0 0 1.093-2.455c.2-.501.38-.985.532-1.444.256-.774.427-1.45.496-1.99.094-.734.1-1.95.032-3.493a79.292 79.292 0 0 0-.14-2.332 100.738 100.738 0 0 0-.187-2.188L6.032.438 6.93.35l4-.35.308.29z" id="b" /><mask id="e" x={0} y={0} width={24} height={37} fill="#fff"><use xlinkHref="#b" />
                </mask>
                <mask id="f" x={0} y={0} width={24} height={37} fill="#fff">
                  <use xlinkHref="#b" />
                </mask>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path d="M4 36L0 56h14.345L16 51.31 17.655 56H32l-4-20V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973-.094-.734-.1-1.95-.032-3.493.033-.738.08-1.525.14-2.332a100.737 100.737 0 0 1 .187-2.188l.085-.85L24.92.35 20.97 0l-.297.423a4.25 4.25 0 0 1-.287.385c-.257.313-.563.629-.917.922-.995.826-2.147 1.31-3.459 1.304a2.79 2.79 0 0 1-.357-.026c-.839-.113-1.805-.587-2.797-1.312A13.22 13.22 0 0 1 11.237.291L10.928 0 6.93.35l-.897.088.086.855a100.738 100.738 0 0 1 .186 2.188c.06.807.108 1.594.14 2.332.069 1.543.063 2.76-.03 3.493-.07.54-.241 1.216-.497 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36z" id={generateString(20)} fill={color1} />
                  <path d="M28 36V15.356c-.193 0-.494-.559-.658-.887a33.967 33.967 0 0 1-.807-1.722c-.221-.51-.417-1.002-.583-1.468-.273-.77-.453-1.44-.521-1.973C25.337 8.572 24 12 24 12v24h4zM8 36V12S6.453 8.991 6.413 9.306c-.069.54-.24 1.216-.496 1.99-.152.459-.332.943-.532 1.444a36.437 36.437 0 0 1-1.093 2.455L4 15.568V36h4z" id={generateString(20)} fill={color2} />
                <path d="M25 36l4 20h3l-4-20h-3zM7 36L3 56H0l4-20h3z" id={generateString(20)} fill={color4}/>
                  <path d="M23 36l4 20h2l-4-20h-2zM9 36L5 56H3l4-20h2z" id={generateString(20)} fill={color3} />
                  <use strokeOpacity=".07" stroke="#FFF" mask="url(#c)" strokeWidth={4} xlinkHref="#a" />
                  <use stroke="#272727" mask="url(#d)" strokeWidth={2} xlinkHref="#a" />
                  <use strokeOpacity=".07" stroke="#FFF" mask="url(#e)" strokeWidth={4} xlinkHref="#b" />
                  <use stroke="#272727" mask="url(#f)" strokeWidth={2} xlinkHref="#b" />
                  <path d="M5 37h22v1H5v-1zm11 1h1v9h-1v-9z" fill="#000" opacity=".2" />
                  </g>
                  </svg>
                  );
   
  
}
