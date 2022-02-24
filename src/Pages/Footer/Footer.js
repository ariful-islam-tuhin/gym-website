import React from 'react';
import { FaAmazon,  FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => {
	return (

		<div className=" bg-dark pt-4 pt-4 mt-4">
			<div className="row primary">
				<div className="col-lg-7">
					
					<img  style={{ width: '130px', color: 'red', marginTop:'20px' }}src="https://media.istockphoto.com/vectors/gym-icon-vector-id879812692?k=20&m=879812692&s=612x612&w=0&h=Ka1eKEw52ZtJp2fpG95UJeBMAdVH9d_U5ezsQA2pQdM=" alt="" />

				</div>
				<div className="col-lg">
					<h3 style={{ color: 'white' }}>Quick Links</h3>
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link" href="#/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#/" className="nav-link">
								Services
							</a>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link">
								Cases
							</Link>
						</li>
						<li className="nav-item">
							<a href="#/" className="nav-link">
								Bolg
							</a>
						</li>
					</ul>
				</div>
				<div className="col-lg">
					<h3 style={{ color: 'white' }}>Contact Us </h3>
					<ul className="nav flex-column">
						<li className="nav-item">
							
							<a className="nav-link" href="#/">
							<FaPhone style={{ fontSize: '30px', color: 'white' }}></FaPhone>
								01320320919
							</a>
						</li>
						<li className="nav-item">
							<a href="#/" className="nav-link">
							<FaAmazon style={{ fontSize: '30px', color: 'white' }}></FaAmazon>

								demo@example.com
							</a>
						</li>
					
					</ul>
				</div>
			</div>
			<div className="row secondary">
				<div className="col-lg-8">
					<p>Copyright &copy; 2022 | Ariful Islam </p>
				</div>
				
			</div>
		</div>

	);
};

export default Footer;
