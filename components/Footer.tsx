import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

export const Footer = memo(() => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 bg-light">
            <Container>
                <div className="col-md-12 d-flex">
                    <span className="col-md-10 text-muted">4 Character Internet License Project by 398noe © 2022 All Rights Reserved</span>
                    <ul className="col-md-2 list-unstyled mb-0 d-flex justify-content-end">
                        <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>

            </Container>
        </footer>
    );
});

export default Footer;