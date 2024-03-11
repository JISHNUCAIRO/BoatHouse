import '../../../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faXTwitter ,faRedditAlien,faWhatsapp,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className='social'>
        <h3 className='lin'>Follow us on</h3>
        <div className='soci'>
  <a href ='https://twitter.com/x'><FontAwesomeIcon icon={faXTwitter} id='x' className='soci' color='black' size='2x'/></a>
  <a href ='https://www.facebook.com/Meta/'><FontAwesomeIcon icon={faMeta} id='meta' color='black' className='soci' size='2x'/></a>
  <a href ='https://www.reddit.com/r/reddit/'><FontAwesomeIcon icon={faRedditAlien} color='black' id='reddit' className='soci' size='2x' /></a>
  <a href ='https://en.wikipedia.org/wiki/WhatsApp'><FontAwesomeIcon icon={faWhatsapp} id='what' color='black' className='soci' size='2x'/></a>
  <a href ='https://www.instagram.com/?hl=en'><FontAwesomeIcon icon={faInstagram} id='gram' color='black'className='soci' size ='2x'/></a>
  <a href='https://in.linkedin.com/'><FontAwesomeIcon icon={faLinkedin} id='link'color='black' className='soci' size='2x'/></a>
</div>

      </div>
      <div className='f1'>&copy; 2024 Boathouse Application. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
