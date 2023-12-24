import React, { useState } from "react";
import { push as Menu } from "react-burger-menu";
import "./Sidebar.css"
import { useLocation } from "react-router-dom";

export default function Sidebar(){
    // const location = useLocation();
    return(
        <div>
            <Menu isOpen={ true } noOverlay outerContainerId={"root"} pageWrapId={"footer" || "page-wrap"}>
                <a className="menu-item" href="/User-dashboard">
                    Dashboard
                </a>
                <a className="menu-item" href="/User-dashboard/BI">
                    Business Intelligence
                </a>
                <a className="menu-item" href="/User-dashboard/MR">
                    Market Research
                </a>
                <a className="menu-item" href="/User-dashboard/BC">
                    Business Consultant
                </a>
            </Menu>

        </div>
    );
}