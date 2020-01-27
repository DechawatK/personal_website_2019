import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "../styles/header.scss";
import { FaWhatsapp } from "react-icons/fa";

class Header extends Component {

  toggleHambugerMenu = () => {
    const hamburgerMenu = this.refs.hamburgerMenu
    const mobileNaviModal = this.refs.mobileNaviModal
    const header = this.refs.header
    hamburgerMenu.classList.toggle("open")
    mobileNaviModal.classList.toggle("open")
    header.classList.toggle("fix")
  }

	render() {
		return (
			<header ref="header">
				<div className="wrapper ui-header__inner mx-auto">
					<div className="ui-header__headline">
						<p>Kesornchan.com</p>
						<div className="ui-header__whatsapp">
							<FaWhatsapp color="#E59B36" />
							&emsp;{" "}
							<a href="tel:123-456-7890">+49 151 5989 0113</a>
						</div>
					</div>
					<ul className="ui-navigation">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/">Competences</a></li>
						<li><a href="/">Blog</a></li>
						<li><a href="/">Contact me</a></li>
					</ul>
					<div
						id="nav-icon2"
						ref="hamburgerMenu"
						onClick={this.toggleHambugerMenu}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
        <div className="mobile-navi-modal" ref="mobileNaviModal">
          <ul className="navbar-nav d-flex flex-column justify-content-end inner-wrapper mobile-navigation-link mr-4">
            <li className="nav-item" onClick={this.toggleHambugerMenu}>
              <a href="/" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={this.toggleHambugerMenu}>
              <a href="/about" className="nav-link text-white">
                About
              </a>
            </li>
            <li className="nav-item" onClick={this.toggleHambugerMenu}>
              <a href="/" className="nav-link text-white">
                Competences
              </a>
            </li>
            <li className="nav-item" onClick={this.toggleHambugerMenu}>
              <a href="/" className="nav-link text-white">
              Blog
              </a>
            </li>
            <li className="nav-item" onClick={this.toggleHambugerMenu}>
              <a href="/" className="nav-link text-white">
              Contact me
              </a>
            </li>
          </ul>
        </div>
			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
