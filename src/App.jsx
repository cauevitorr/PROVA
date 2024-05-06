import './App.css'
import Estrela from '../images/icon-star.svg'
import Buttons from "./Buttons/Buttons"
import React from 'react'

const App = () => {

 const [cor, setCor] = React.useState(null)

 return(
  <div>
   <img src={Estrela} alt="" />
   <h1>How did we do?</h1>
   <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
  <Buttons setValue='hsl(217, 12%, 63%)'  text='1' value='1' />
  <Buttons setValue='' text='2' value='2'/>
  <Buttons setValue='' text='5' value='5'/>
  <Buttons setValue='' text='6' value='6'/>
  <Buttons setValue='' text='5' value='5'/>
  <Buttons setValue='' text='6' value='6'/>
  <Buttons setValue='' className="submit" text='Submit' value='submit'/>
  </div>
 )
}

export default App
