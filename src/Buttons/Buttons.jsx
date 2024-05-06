import './Buttons.css'
import React from 'react'
const Buttons = ({setValue,className,value,color,backgroundColor,text, ...props}) => {
 
 const [cor, setCor] = React.useState(null)

 return(
  <button onChange={({target})=>setValue(target.backgroundColor)} className={className} value={value} style={{backgroundColor:backgroundColor, color:color}}>{text}</button>
 )
}

export default Buttons
