import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// import { NavLink, Route } from 'react-router-dom';


// import styling 
import './HomePage.scss';
import '../styling/form-master.scss';

// images

//import application components

export default class HomePage extends Component {

    sendEmail(e) {
        e.preventDefault();
        let message = e.target.message.value;
        let reason = e.target.selectorReason.value;

        console.log('type of activity:', message, 'classification:', reason);
        

        // emailjs.send('angel_mortgage_monitor', 'angel-monitor', {user_name, user_email, user_telephone, reason, message}, user)
        // .then((result) => {
        //   console.log(result.text);
        //   // clear the form
        //     let clearInputName = document.querySelector('.monitor__name-field');
        //     clearInputName.value = " ";
        //     let clearInputEmail = document.querySelector('.monitor__email-field');
        //     clearInputEmail.value = " ";
        //     let clearInputTelephone = document.querySelector('.monitor__telephone-field');
        //     clearInputTelephone.value = "";
        //     let clearInputSelector = document.querySelector('.monitor__selector-field');
        //     clearInputSelector.value = " ";
        //     let clearInputMessage = document.querySelector('.monitor__message-field');
        //     clearInputMessage.value = "Thank you for your query! ";

        // }, (error) => {
        //     console.log(error.text);
        // });
    }
    render() {
        return (
            <>
            <header className="header__container">
              {/* <div className="header__corp">
                <img className="header__corp-logo" src={logo} alt="company Logo" width='200' />
                <p className="header__corp-info">License No 12036</p>
                <p className="header__corp-info2">Independently Owned and Operated Franchise</p>
              </div> */}
                <div className="header__title-container">
                  <h1 className="header__title">Work-Life Balance Monitor</h1>
                </div>
            </header>
                <form className="monitor__form form-layout" id="inputCapture" onSubmit={this.sendEmail}>   
                    <section className="monitor__intro">
                        <p>We are here to help you determine if your work-life balance is out of whack. Please update what you are doing every time you switch tasks.</p>
                    </section>
                    <div className="monitor__selector form-div">
                        <label className="monitor__selector-label form-label" htmlFor="selectorReason">Time Classification:</label>
                        <select className="monitor__selector-field form-field" id="selectorReason" required>
                            <option>Please select one of the following</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Family">Family</option>
                        </select>
                    </div>
                    <div className="monitor__message">
                        <label className="monitor__message-label form-label">Optional type of task:</label>
                        <textarea className="monitor__message-field form-field" name="message"/>
                    </div>
                    <button className="monitor__button" name="monitor-button">Send</button>
                </form>
            </>
        );
    }
}

