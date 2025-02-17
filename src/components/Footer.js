import React from "react";
import { socialicons, icon, backgroundImage } from "./Footer.module.scss";
import "./Footer.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-regular-svg-icons";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <>
      <div className={backgroundImage}>
        <div className="row">
          <div className="col-sm-2" layout="fixed justify-content-left text-center">
            <Link className="footer-logo" to="/">
              <StaticImage
                src="../images/logos/mindchase_logo_komplett_transparent.png"
                alt="later"
                layout="fixed"
                width={250}
                height={250}
              />
            </Link>
          </div>
          <div className="col-sm-7" layout="fixed justify-content-center text-center">
            <Form className="text-align:center d-flex justify-content-center">
              <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
                <h3 className="mb-2 text-center text-#FF1616 mb-3">
                  Stay in touch and up to date
                </h3>

                <Form.Control type="email" placeholder="Email*" />
                <Link
                  className="btn btn-danger btn-outline-light d-flex justify-content-center"
                  type="submit"
                >
                  submit
                </Link>
                {/* <Form.Text className="text-white">
                    This is where I want "email must be formatted correctly" to
                    render conditionally
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </div>
          <div
            className="col-sm-3"
            layout="fixed justify-content-left text-center"
          >
            <>
              <div className={socialicons}>
                <p>Follow us:</p>
                <a
                  href="https://www.instagram.com/mindchase2020/"
                  title="Instagram"
                  className={icon}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/mindchase"
                  title="LinkedIn"
                  className={icon}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6" layout="d-flex justify-content-center">
            <p>
              Site developed by The Vikings Team &copy;{" "}
              {new Date().getFullYear().toString()} mindchase. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
