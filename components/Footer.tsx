import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = memo(() => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="text-muted">4 Character Internet License Project by 398noe © 2022 All Rights Reserved</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
            </footer>
        </div>
    );
});

export default Footer;