import React, { Component } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import ObjectMove from "../components/object-move";

export default class ABout extends Component {
	render() {
		return (
			<Layout>
				<SEO title="About" />
				<Header />
				<div className="about__container">
					<div className="about__container-inner wrapper mx-auto">
						<h1 className="about__headline">About me</h1>
						<ObjectMove />
						<h2 className="about__name">Dechawat Kesornchan</h2>
						<h5 className="about__career">
							Web Application Developer
						</h5>
						<p className="about__text">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ab nihil beatae nulla provident alias, sunt
							molestias vitae ipsum dolor debitis tempore eveniet
							atque iure assumenda rerum maxime molestiae repellat
							et!
						</p>
						<p className="about__text">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ab nihil beatae nulla provident alias, sunt
							molestias vitae ipsum dolor debitis tempore eveniet
							atque iure assumenda rerum maxime molestiae repellat
							et!
						</p>
						<div className="row about__solutions-row">
							<div className="col-lg-6 col-md-12 about__solutions-col">
								<h2 className="about__solutions">Solutions</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">1</div>
                                    <div className="col-lg-6 col-md-12">2</div>
                                </div>
							</div>
							<div className="col-lg-6 col-md-12 about__solutions-col">
								<h2 className="about__solutions">
									Personal Information
								</h2>
                                <div className="row">
                                    <div className="about__personal-info">

                                    </div>
                                    <div className="about__personal-info">

                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
