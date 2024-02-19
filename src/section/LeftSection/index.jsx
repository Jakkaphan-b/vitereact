import Headers from "../Header";
import Navber from "../Navbar";
import Contact from "../Contact";
const Leftsection = () => {
    return (
<div>
        <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh]'>
          <Headers />
          <Navber />
         <Contact/>
         </div>
      </div>
    );
}
export default Leftsection;