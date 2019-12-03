import React, { Component } from 'react';

class Services extends Component {
  render() {

   //  if(this.props.data){
   //    var testimonials = this.props.data.testimonials.map(function(testimonials){
   //      return  <li key={testimonials.user}>
   //          <blockquote>
   //             <p>{testimonials.text}</p>
   //             <cite>{testimonials.user}</cite>
   //          </blockquote>
   //       </li>
   //    })
   //  }

    return (
      <section id="services">
         <div className="row">
            <div className="twelve columns collapsed">
               <h1>Check Out Some of Our Services.</h1>
               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  Testing
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default Services;
