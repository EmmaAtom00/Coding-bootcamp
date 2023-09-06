import img1 from '../src/assets/images/image-tanya.jpg';
import img2 from '../src/assets/images/image-john.jpg';
import quote from './assets/images/pattern-quotes.svg';
import arrL from './assets/images/icon-prev.svg';
import arrR from './assets/images/icon-next.svg';
import bot from './assets/images/pattern-curve.svg'

import { useState } from 'react';


const Persons =[
  {image:img1,
  Testimony:'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  Name:"Tenya Sinclair",
  Title:"UX Engineer"
},

  {image:img2,
  Testimony:'“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  Name:"John Tarkpor",
  Title:"Junior Front-end Developer"
},
]

function App() {

  const [value, setValue] = useState(0);

  const prevValue = () => {
    const firstValue = value === 0;
    const newValue = firstValue ? Persons.length - 1 : value - 1;
    setValue(newValue);
  }

  const nextValue = () => {
    const lastValue = value === Persons.length - 1;
    const newValue = lastValue ? 0 : value + 1;
    setValue(newValue);
  }

  return (
    <>
    <div className='w-[90%] m-auto pt-14 wrapper md:pt-0 md:align-middle md:w-[80%] lg:w-[60%]'>
    <img src={Persons[value].image} className='rounded-3xl mx-auto shadow-2xl duration-500 hero-img'/>

    <img src={quote} className='absolute -z-10 mt-10 w-[100px] left-[50%] -translate-x-[50%] md:mt-1 md:-ml-72 lg:-ml-72 lg:mt-10 quote' />

    <div className='controller absolute justify-between flex rounded-3xl lg:w-auto lg:p-6 lg:gap-10 p-5 z-10 -mt-8 w-[120px] left-[50%] -translate-x-[50%] bg-white md:mt-[37%] md:w-auto md:p-6 md:gap-10 md:justify-between'>
      <img src={arrL} onClick={prevValue} className='cursor-pointer'/>
      <img src={arrR} onClick={nextValue} className='cursor-pointer'/>
    </div>
    
    <div className='texts text-darkBlue my-20 duration-500 md:my-0'>
      <p className='tt text-center text-2xl font-light my-4 w-[95%] mx-auto md:text-left md:mx-0'>{Persons[value].Testimony}</p>
      <div className='together align-middle'>
        <p className='tt text-center font-bold text-xl md:text-left'>{Persons[value].Name}</p>
        <p className='tt ttitle text-center text-grayishBlue text-lg md:text-sm md:text-left'>{Persons[value].Title}</p>
      </div>
    </div>
  </div>
  <img src={bot} className='bot absolute -translate-y-[100%] left-0 -z-10 md:-translate-y-0'/>
  </>
  )
}



export default App
