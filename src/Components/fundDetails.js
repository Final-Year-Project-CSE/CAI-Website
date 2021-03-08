import React, { Component } from 'react';

class FundDetails extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="CAI" />
               </div>
               <div className="nine columns main-col">
                  <h2>Fund Details</h2>

                  <p>{bio}</p>

                  <div className="row">
                     <div className="columns scheme-details">
                        <h2>Scheme Details</h2>
                        <form action="" method="post" id="contactForm" name="contactForm">
                           <fieldset>

                              <div>
                                 <label htmlFor="Legislation">Legislation <span className="required">*</span></label>
                                 <select model="Legislation" name="Legislation">
                                    <option>Central Governemnt</option>
                                    <option>State Government</option>
                                 </select>
                              </div>

                              <div>
                                 <label htmlFor="department">Department <span className="required">*</span></label>
                                 <select model="department" name="department">
                                    <option>Ministry of Earth Sciences</option>
                                    <option>Ministry of Agriculture and Farmers Welfare</option>
                                    <option>Ministry of Chemicals and Fertilizers</option>
                                    <option>Ministry of Commerce and Industry</option>
                                    <option>Ministry of Communications</option>
                                    <option>Ministry of Consumer Affairs, Food and Public Distribution</option>
                                    <option>Ministry of Electronics and Information Technology</option>
                                    <option>Ministry of Environment, Forest and Climate Change</option>
                                    <option>Ministry of Health and Family Welfare</option>
                                    <option>Ministry of Law and Justice</option>
                                 </select>
                              </div>

                              <div>
                                 <label htmlFor="typeOfDetail">Query Type <span className="required">*</span></label>
                                 <select model="typeOfDetail" name="typeOfDetail">
                                    <option>All</option>
                                    <option>Active Projects/Schemes</option>
                                    <option>Sanctioned Funds</option>
                                    <option>Status</option>
                                    <option>Population Affected</option>
                                 </select>
                              </div>
                              <div>
                                 <label htmlFor="Year">Year of Inception<span className="required">*</span></label>
                                 <select model="FinancialYear" name="FinancialYear">
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                 </select>
                              </div>


                              <div>
                                 <button className="submit">Fetch Details</button>
                                 <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                 </span>
                              </div>
                           </fieldset>
                        </form>

                     </div>
                  </div>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Fund Details</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>

      );

   }
}

export default FundDetails;
