import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
//import React and styled components 

//define the styled components for a div
const StyledWrapper = styled.div`
    background-image: url('');
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    display: flex;
    flex-direction: center;
    padding: 10%;
    border: double 8px red;
    `;

//define a function that takes props as an argument
    function Home(props) {
        return (
            <div className="home-wrapper">
                <header>
                    <h1>Bloomtech Eats</h1>
                    <div className="nav">
                        <Link to="/"><button>Home</button></Link>
                        <button>Help</button>
                    </div>
                </header>
                <StyledWrapper className="buy-pizza">
                    <h1>Your favorite food, delivered while coding</h1>
                    <Link to="/pizza"><button id="order-pizza">Pizza!</button></Link>
                </StyledWrapper>
                <div>
                    <h3>Food Delivery Available!</h3>
                </div>
            </div>
        )
    }

    //export default
    export default Home;