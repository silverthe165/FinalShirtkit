
import react from 'react'
// import svgtojsx from 'svg-to-jsx'
export  function Unique({data}) {


// console.log(svgtojsx(data).then(function(jsx){
//   return jsx
// }))

  return (
    <>
  <div dangerouslySetInnerHTML={{ __html:data}} />


    </>
  );
  
}
