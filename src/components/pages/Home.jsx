import React, {useState, useContext, useEffect }from 'react';
import Axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';
import * as moment from 'moment';


const Home = () => {



    // setting up a function calculateTimeLeft
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-12-31`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };

        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
        const [year] = useState(new Date().getFullYear());
    



  
        // hooks

        useEffect(() => {
            setTimeout(() => {
              setTimeLeft(calculateTimeLeft());
            }, 1000);
          });
        
    
          // custom functions
        // using obecjt.keys
        // First, create a new variable under the useEffect hook called timerComponents:
    
        const timerComponents = [];
        
        Object.keys(timeLeft).forEach((interval) => {
            if(!timeLeft[interval]) {
                return;
            }
    
            timerComponents.push(
                <span>
                    {timeLeft[interval]} {interval} { " " }
                </span>
    
            );
        })

    return (
        <>
                <section className="hero hero-home ui-full-bg-norm" style={{ backgroundImage: 'url("../../../images/assets/bg@newyear.jpg")' }}> 
                    <div className="container">
                         <div className="ui-wrapper-large">
                            <div className="row">
                                <div className="col-md-7 mx-auto">
                                    <div className="counter text-center">
                                        
                                        {/* Displaying the time left */}
                                        <h1 className=""> Count down to the End of {year} </h1>
                                        <h2 className="">New year in a bit!</h2>
                                        {timerComponents.length ? timerComponents : <span>Happy New Year!</span>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Home