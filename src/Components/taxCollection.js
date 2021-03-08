import React, { Component } from 'react';

class TaxCollection extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Pay Taxes.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Tax Slab <span className="required">*</span></label>
						   <select model="contactSubject" name="contactSubject">
                                        <option>1. Less than 5 lpa</option>
                                        <option>2. Between 5 and 10</option>
                                        <option>3. Between 10 and 15</option>
                                        <option>4. Between 15 and 25</option>
                                        <option>5. Above 25</option>
                                    </select>
                  </div>
                  <div>
						   <label htmlFor="FinancialYear">Financial Year <span className="required">*</span></label>
						   <select model="FinancialYear" name="FinancialYear">
                                        <option>2017-18</option>
                                        <option>2018-19</option>
                                        <option>2019-20</option>
                                    </select>
                  </div>

                  <div>
                     <label htmlFor="Income">Enter Annual Income<span className="required">*</span></label>
                     <input type="text" defaultValue="" size="35" id="Income" name="Income" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Enter Amount <span className="required">*</span></label>
                     <input type="text" defaultValue="" size="35" id="contactMessage" name="contactMessage" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


      </div>
   </section>
    );
  }
}

export default TaxCollection;
