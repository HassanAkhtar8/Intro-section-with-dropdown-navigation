import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';

 function Footer(){

        return(
                <footer>
                       <img alt='databiz-logo' src={databiz} />
                       <img alt='audiophile-logo' src={audiophile} />
                       <img alt='meet-logo' src={meet} />
                       <img alt='maker-logo' src={maker} />
                </footer>
        );
}
export default Footer;