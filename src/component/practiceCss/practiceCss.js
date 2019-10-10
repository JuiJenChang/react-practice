import React, { Component } from 'react';
import './practiceCss.css';
import { IoMdSpeedometer } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { GoTools } from "react-icons/go";

class PersonPage extends Component {
    render() {
        return (
            <div>
                <div className="practiceCss-body">
                    <div className="practiceCss-header">
                        <div>
                            <img
                                className="practiceCss-img"
                                src="https://avatars1.githubusercontent.com/u/46315679?s=460&v=4" />
                            <h2 className="practiceCss-h2">Jui-Jen Chang</h2>
                        </div>
                        <ul className="practiceCss-ul">
                            <li className="practiceCss-li">
                                <IoMdSpeedometer className="practiceCss-icon"/>
                                <span className="practiceCss-li-span">Dashboard</span></li>
                            <li className="practiceCss-li">
                                <MdWork className="practiceCss-icon"/>
                                <span className="practiceCss-li-span">Customers</span></li>
                            <li className="practiceCss-li">
                                <GoOrganization className="practiceCss-icon"/>
                                <span className="practiceCss-li-span">Users</span></li>
                            <li className="practiceCss-li">
                                <GoTools className="practiceCss-icon"/>
                                <span className="practiceCss-li-span">Settings</span></li>
                        </ul>
                    </div>
                    <div className="practiceCss-main">
                        <div>
                            <p className="practiceCss-p">RESIZE THE WINDOW</p>
                            <span className="practiceCss-span">Breakpoints on 900px and 400px</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonPage;