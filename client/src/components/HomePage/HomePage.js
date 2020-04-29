import React, { Component } from 'react';
import axios from 'axios';
import Chart from 'chartjs';
// import emailjs from 'emailjs-com';
// import { NavLink, Route } from 'react-router-dom';


// import styling 
import './HomePage.scss';
// import '../styling/Header.scss';
import '../styling/form-master.scss';

// images
import logo from '../images/user2.png';
// import graph from '../images/graph.JPG';


//import application components

export default class HomePage extends Component {

    captureTask(e) {
        e.preventDefault();
        let message = e.target.message.value;
        let reason = e.target.selectorReason.value;

        let timestamp = Date.now();

        axios
            .post('http://localhost:5000/tasks', {
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    time: timestamp,
                    classification: reason,
                    message: message
                }
            })
            .then(result => {
                let response = result.data[0];
                console.log('Work:', (response.Work).toFixed(0), 'Personal:', (response.Personal).toFixed(0), 'Family:', (response.Family).toFixed(0), 'Exercise:', (response.Exercise).toFixed(0));

                var labels = ["Work", "Personal", "Family", "Exercise"];
                var data = [(response.Work).toFixed(0), (response.Personal).toFixed(0), (response.Family).toFixed(0), (response.Exercise).toFixed(0)];
                var pie = document.getElementById("header__pieChart");
                var workChart = new Chart(pie, {
                // var pieChart = new Chart(canvas) {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: 
                            {
                                data: data,
                                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 0, 0, 1)', 'rgb(0, 153, 51, 1)', 'rgb(0, 0, 0, 1)'],
                                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(192, 0, 0, 0.2)', 'rgb(0, 153, 51, 0.2)', 'rgb(0, 0, 0, 0.2)']
                            }
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Your work-life balance"
                        }
                    }
                })
                // var c = document.getElementById("header__pieGraph");
                // var ctx = c.getContext('2d');
                // ctx.drawImage(pie, 0, 0);
            })
            .catch(err => {
                console.log(err);
            })
    };



    render() {
        return (
            <>
                <header className="header__container">
                    <div className="header__corp">
                        <img className="header__corp-logo" src={logo} alt="company Logo" width='200' />
                    </div>
                    <div className="header__title-container">
                        <h1 className="header__title">Footprints</h1>
                    </div>
                    {/* <div className="header__corp">
                        <img className="header__graph" src={graph} alt="company Logo" width='200' />
                    </div> */}
                    <div className="header__graph">
                        <canvas id="header__pieGraph"></canvas>
                    </div>
                </header>
                <form className="monitor__form form-layout" id="inputCapture" onSubmit={this.captureTask}>
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
                        <textarea className="monitor__message-field form-field" name="message" />
                    </div>
                    <button className="monitor__button" name="monitor-button">Send</button>
                </form>
            </>
        );
    }
}

