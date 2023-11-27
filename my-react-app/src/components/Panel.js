import React from "react";
import './Panel.css';

import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import jsIcon from '../img/js.png';
import tsIcon from '../img/ts.png';
import reactIcon from '../img/react.png';
import vsIcon from '../img/vs.png';

function Panel() {
    return (
        <div className="panel">
            <div className="panel-icons">
                <img src={htmlIcon} alt="html" />
                <img src={cssIcon} alt="css" />
                <img src={jsIcon} alt="js" />
                <img src={tsIcon} alt="ts" />
                <img src={reactIcon} alt="react" />
                <img src={vsIcon} alt="vs" />
            </div>
        </div>
    );
}

export default Panel;