import email_img from "../assets/email.svg"
import tel_img from "../assets/tel.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="footer__contacts">
            <div className="footer__email">
                <img src={email_img} alt="icon email"/>
                Contact@cloud.com
            </div>
            <div className="footer__telephone">
                <img src={tel_img} alt="icon telephone"/>
                00000-000-00
            </div>                        
            </div>
        </footer> 
    )
}

export default Footer;