import React from 'react'
import art2 from "../../images/art2.webp"
import art3 from "../../images/art3.webp"



const SMmarketing = () => {
    return (
        <section className=" smmmarketing" data-aos="fade-up" data-aos-duration="900">
        <div className="particles_4 gt3_rotated_element">
                  <img src={art2} alt="" width="41" height="53" />
        </div>
        <div className="particles_5 gt3_rotated_element">
                  <img src={art3}alt="" width="41" height="53" />
        </div>
      <div className="container" >
        <div className="row smmmarketingrow">
          <div className="col-md-6 smmmarketingleft">
            <h3>Discover the Power of
              Social Media Marketing</h3>
                <p>Even if you are offering a dedicated customer service, it will not always help you gain real insights into how your consumer thinks. To make your communication effective, you have to understand what your consumers prefer, and for that, social media is the key.</p>
              
              <p>Social Media Marketing allows you to engage with your customer in real time and respond to them as if you are actually present in front of them. In today’s fast paced world, quick results are everything. Remember, the more you communicate, the better it gets. </p>
            <div className="SMMbtnsection d-flex">
              <button type="button" className="btn   SMMbtn1    " >LIVE CHAT</button>
              <button type="button" className="btn   SMMbtn2   " >Get Started</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row" >
              <div className="col SMMcol"  >
                <div   className="card  SMM socialmediarightcard w-100 shadow aligh-items-center justify-content-center"  >
                  <div className="card-body " >
                    <div className="d-flex "   >
                      <div className="SMMimg"      style={{width:"50%",height:"56px"}}    > </div>
                      <h4 >Social Media Management</h4>
                    </div>
                    <p>With Marketing Blink's social media services, you can get a return on investment (ROI) with platforms like Facebook, Twitter, Instagram, and LinkedIn.</p>
                  </div>
                </div>
              </div>
              <div className="col SMMcol" >
                <div className="card SMC socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >
                  <div className="card-body ">
                    <div className="d-flex  ">
                      <div className="SMCimg"  style={{width:"50%",height:"56px"}} > </div>
                      <h4 >Social Media Campaigns</h4>
                    </div>
                    <p>Based on your marketing goal, consumer profile, and further research, Marketing Blink will develop a focused approach suited to your business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" >
              <div className="col SMMcol"  >
                <div   className="card  SMS socialmediarightcard w-100 shadow aligh-items-center justify-content-center"  >
                  <div className="card-body " >
                    <div className="d-flex "   >
                      <div className="SMSimg" style={{width:"50%",height:"56px"}}  > </div>
                      <h4 >Social Media Management</h4>
                    </div>
                    <p>Marketing Blink devises a
                      social media strategy based on your target audience and your business goals.</p>
                  </div>
                </div>
              </div>
              <div className="col SMMcol" >
                <div className="card CSS socialmediarightcard w-100 shadow aligh-items-center justify-content-center" >
                  <div className="card-body ">
                    <div className="d-flex  ">
                      <div className="CSSimg" style={{width:"50%",height:"56px"}}  > </div>
                      <h4 >Customer Centric Strategy</h4>
                    </div>
                    <p>Being customer-centric implies prioritising the needs and expectations of customers over all other considerations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SMmarketing
