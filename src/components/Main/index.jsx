import React from 'react';
import NavBar from '../NavBar';
import NavBarHor from '../NavBarHor';

function Main(props) {
    return (
        <div className="row ">
            <div className="col-lg-2 border border-right-0">
                <NavBar></NavBar>
            </div>
            <div className="col lg-10 border p-2 pl-5 pr-5">
                <NavBarHor></NavBarHor>
                {props.children}
            </div>
        </div>
    )
}

export default Main;