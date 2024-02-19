import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin,faMedium } from "@fortawesome/free-brands-svg-icons"; 
const contact = () => {
  return (
    <div className='flex items-end gap-4 text-2xl'>
    <FontAwesomeIcon className='hover-125 hover:text-primaryTitle transition-all' icon={faGithub} />
    <FontAwesomeIcon className='hover-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
    <FontAwesomeIcon className='hover-125 hover:text-primaryTitle transition-all' icon={faMedium} />
    </div>
  );
}
export default contact;