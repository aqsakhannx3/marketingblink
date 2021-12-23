import React from 'react'
import logo from "../../images/logo-marketingblink.png"

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (




<section class="navbarsection navigation-wrap start-header start-style"  >
  <div class="container">
	   <div class="row">
		   <div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
						<Link class="navbar-brand" to="/" target="_blank"><img src={logo} alt="marketingblink logo" width="160" class="logo"/></Link>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link active" to="/">Home</Link>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link" to="/">Plans</Link>
								</li>
							
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link" to="/">Social Media Marketing</Link>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link" to="/">SEO Services</Link>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link" to="/">Paid Marketing</Link>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link" to="/">Content Marketing</Link>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link class="nav-link btn-success" to="/">Let's Connect</Link>
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
