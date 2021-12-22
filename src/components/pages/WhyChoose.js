import React from 'react'
import whyimg from "../../images/whychooseman.png"
const WhyChoose = () => {
    return (
<section className="whychoose">
	<div className="container">
	  <div className="row whyrow">
		<div className="col-md-6 whychooseright" > <img src={whyimg} /> </div>
		<div className="col-md-6 whychooseleft " >
		  <h3>Why Choose Us?</h3>
		  <p> Anyone can blow their own trumpet and make themselves
			sound super qualified for the job of bringing your brand up. So, at <span className="marketingblink">Marketing Blink</span>, we don’t do just that. We let our work speak
			for ourselves. Before you give us the chance to do our magic, we open our doors for you to take a look at our previous works so you know what you are signing up for. We gain your trust first and then sing our praises. </p>
		</div>
	  </div>
	</div>
</section>
      
    )
}

export default WhyChoose
