import React, { Component } from 'react';
import './practiceCss.css';
import { IoMdSpeedometer } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { GoTools } from "react-icons/go";

const sideBarList = [
    {
        icon: <IoMdSpeedometer />,
        title: 'Dashboard'
    },
    {
        icon: <MdWork />,
        title: 'Customers'
    },
    {
        icon: <GoOrganization />,
        title: 'Users'
    },
    {
        icon: <GoTools />,
        title: 'Settings'
    }
];

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
                            {
                                sideBarList.map((item, i) =>
                                    <li key={i} className="practiceCss-li">
                                        <div className="practiceCss-icon">{item.icon}</div>
                                        <span className="practiceCss-li-span">{item.title}</span>
                                    </li>
                                )
                            }
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