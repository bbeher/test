import React, { Component } from 'react';
// import  AppTest from "./pages.test";
import BasicExample from "./test";
import FlavorForm from "./layoutCreation/selectCombo";


export const Home = () => (
    <div>
        <div className="box-component">
            <h2>Disclaimer</h2>
            <p>UK became an adequate jurisdiction on 17/02/18. Entity ID 3876 became active on 12/02/18</p>
        </div>
        <div className="box-component">
            <h2>Announcements</h2>
            <ul>
                <li>
                    UK became an adequate jurisdiction on 17/02/18
            </li>
                <li>
                    Entity ID 3876 became active on 12/02/18
            </li>
                <li>
                    Entity ID 6759 consent information changed on 09/02/18
            </li>
            </ul>
        </div>
    </div>
)

export const Page1 = ({ match }) => (
    <div>
        <BasicExample match={match} />
        <h1>Page1</h1>
    </div>
)

export const Page2 = () => (
    <div>
        <h1>Legal Input Details</h1>
    </div>
)

export const Page3 = () => (
    <div>
        <FlavorForm />
    </div>
)

export const Administration = () => (
    <div>
        <h1>Administration Details</h1>
    </div>
)
export const Report = () => (
    <div>
        <h1>Report Details</h1>
    </div>
)