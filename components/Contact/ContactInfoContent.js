import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Address</span>
                        27 Division St, New York, NY 10002, USA
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span> 
                        <a href="mailto:infohaiper@haiper.com">infohaiper@haiper.com</a>  
                        <a href="mailto:fax@haiper.com">fax@haiper.com</a>
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>Phone</span> 
                        <a href="tel:+(321)984754">+ (321) 984 754</a>
                        <a href="tel:+1-212-9876543">+1-212-9876543</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;