import React from 'react'
import logo from "../../images/logo-marketingblink.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (





<section className="navbarsection navigation-wrap start-header start-style"  >
  <div className="container">
	   <div className="row">
		  
		   
		   <div className="col-12">
					<nav className="navbar navbar-expand-md navbar-light">
					
						<Link className="navbar-brand" to="/" target="_blank">
              
              <img src={logo} alt="marketingblink logo" width="160" className="logo"/></Link>	
						
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto py-4 py-md-0">
								
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link active" to="/">Home</Link>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="/">Plans</Link>
								</li>
								
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="/">Social Media Marketing</Link>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="/">SEO Services</Link>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="/">Paid Marketing</Link>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to="/">Content Marketing</Link>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link btn-success" to="/">Let's Connect</Link>
								</li>
							</ul>
						</div>
						
					</nav>		
				</div>
	  </div>

  </div>
</section>

     
    )
}

export default Navbar
