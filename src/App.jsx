import './App.css'
import Leftsection from './section/LeftSection'
import RightSection from './section/RightSection'
function App() {
  return (
    /* 3 columns */
    /*<div className='grid grid-cols-3'>*/
    /*แบ่งเป็น 2 ส่วน ซ้าย-ขวา*/
    <div className='mt-14 mx-auto max-w-6xl grid gap-5 lg:grid-cols-[40%_60%]'>
      <Leftsection/>
      <RightSection/>
    </div>
  )
}

export default App
