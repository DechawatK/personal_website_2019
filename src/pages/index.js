import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import stage_img_2 from "../assets/images/stage_img_3.png";
import {
  FaLongArrowAltRight,
  FaTwitter,
  FaLinkedinIn,
  FaXing,
  FaInstagram
} from "react-icons/fa";
import Header from "../components/header";
import ObjectMove from "../components/object-move";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="ui-index__container">
      <div className="ui-stage__container">
        <Header />
        <img src={stage_img_2} className="ui-stage__image" />
        <div className="ui-stage__presentation">
          <ObjectMove />
          <h1 className="ui-stage__name">Dechawat Kesornchan</h1>
          <p className="ui-stage__occupation">Web Application Developer</p>
          <p className="ui-stage__quote">
            There are good oppotunities for those who are searching them only.
            Be patient and positive ! Even though in reality, you will hear "No"
            more than "Yes". One day, success will come back to you.
          </p>
          <a
            href="mailto:dechawat@kesornchan.com"
            className="ui-stage__button-link"
          >
            <button className="ui-stage__button">
              CONTACT ME &nbsp;
              <FaLongArrowAltRight />
            </button>
          </a>
        </div>
        <div className="ui-stage__follow">
          <div className="wrapper mx-auto ui-stage__follow-inner">
            <div>
              <p>Follow me in:</p>
              <div className="ui-stage__social__icons">
                <span>
                  <a href="" target="_blank">
                    <FaTwitter />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/dechawat-kesornchan-1981ba157/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.xing.com/profile/Dechawat_Kesornchan/cv"
                    target="_blank"
                  >
                    <FaXing />
                  </a>
                </span>
                <span>
                  <a href="" target="_blank">
                    <FaInstagram />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
