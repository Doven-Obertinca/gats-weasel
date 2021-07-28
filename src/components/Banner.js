import * as React from "react";
import "./Banner.module.scss";
import { StaticImage } from "gatsby-plugin-image";

//import { Link } from "gatsby";

export default function Banner() {
  return (
    <div className="container-md">
      <div className="row">
        <div className="col-sm col-lg-4">
          <h3 className="title">Our Partners</h3>

          <a
            href="https://digitalcareerinstitute.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../images/logos/partners/dci-logo-blue.png"
              alt="DCI it is a shortcut for Digital Career Institute, logo is in blue color."
              layout="fixed"
              width={200}
              height={200}
            />
          </a>
        </div>
        {/* <div className="col">
        <p>---place for your logo---</p>
      </div> */}
      </div>
    </div>
  );
}
