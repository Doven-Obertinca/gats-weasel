import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Button from "react-bootstrap/Button";
//import h5 class={ card-title } from "react-bootstrap/Card";
import {
  hover,
  hover1,
  hover2,
  hover3,
  hover4,
  overlay,
  hoverMe,
  text,
  container,
} from "./about.module.scss";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className={container}>
        {/* <div className={hoverMe}> */}
          <div className="row">
            <div className="col-sm-4">
              <div className={hover}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Marco, the only man on a team"
                    src="../images/team/Marco/marco.jpg"
                    layout="fixed"
                    width={410}
                    height={300}
                  />

                  <div className="card-body">
                    <div class={overlay}>
                      <h5 class={text}>Marco</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          {/* <div className={hoverMe}> */}
            <div className="col-sm-4">
              <div className={hover1}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Karo, CEO of mindchase"
                    src="../images/team/Karo/karo.JPG"
                    layout="fixed"
                    width={410}
                    height={400}
                  />

                  <div className="card-body">
                    <div class={overlay}>
                      <h5 class={text}>Karo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          <div className="col-sm-4">
            <div className={hover2}>
              <div className="card" style={{ width: "26rem" }}>
                <StaticImage
                  alt="Phyllis"
                  src="../images/team/Phyllis/phyllis.JPG"
                  layout="fixed"
                  width={410}
                  height={400}
                />

                <div className="card-body">
                  <h5 class="card-title">Phyllis</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className={hover3}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Kathleen"
                    src="../images/team/Kathleen/kathleen.JPEG"
                    layout="fixed"
                    width={400}
                    height={300}
                  />
                  <div className="card-body">
                    <h5 class="card-title">Kathleen</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={hover4}>
                <div className="card" style={{ width: "26rem" }}>
                  <StaticImage
                    alt="Franzi, second CEO of mindchase"
                    src="../images/team/Franzi/franzi.jpg"
                    layout="fixed"
                    width={400}
                    height={300}
                  />

                  <div className="card-body">
                    <h5 class="card-title">Franzi</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

};
    console.log(hover4)
export default AboutPage;
