import React, {useState, useContext, useEffect }from 'react';
import Axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';
import * as moment from 'moment';

const Home = () => {

    // variables
    const histiory = useHistory();
    const params = useParams();

    // contexts

    // states
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [year] = useState(new Date().getFullYear());

    // hooks

    useEffect(() => {

        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

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
    // setting up a function calculateTimeLeft
    const calculateTimeLeft = () => {
            let year = new Date().getFullYear();

            // Note: You can use the JavaScript Date object to work with dates and times.

            const diff = +new Date(`10/01/${year}`) - +new Date();
   
            // First, create the empty object called timeLeft which will then be filled in with days, hours, minutes, and seconds in the if statement.
            let timeLeft = {};
            
            if( diff > 0 ){
                timeLeft = {
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60 ) % 60),
                    seconds: Math.floor((diff /1000) % 60)
                }
            }

            // Finally, you need to return timeLeft so that you can use the value elsewhere in the component.
            return timeLeft;
        }


    useEffect(() => {
    
    }, [])

    // custom functions

    return (
        <>
           <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="counter">
                            
                            {/* Displaying the time left */}
                            <h1 className="">My {year} Countdown Timer</h1>
                            <h2 className="">Using React Hooks!</h2>
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}

                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Home