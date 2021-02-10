import React from 'react';
import {withRouter} from "react-router-dom";
import Category from "./Category/Category";
import './Menu.css';

const Menu = () => {
    return(
        <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-shaped">
                {/* Background circles */}
                <div className="custom-style"/>
            </section>
            <Category/>
        </div>
    );
}

export default withRouter(Menu);
