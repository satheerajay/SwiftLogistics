import React from "react";

import { CFooter, CLink } from "@coreui/react";

function AppFooter() {
    return (
        <CFooter>
            <div>
                <CLink href="https://coreui.io">Middleware Group Assignment</CLink>
                <span>&copy; 2024 UCSC</span>
            </div>
            <div>
                <span>Powered by </span>
                <CLink href="https://coreui.io">React & Spring boot & node Js</CLink>
            </div>
        </CFooter>
    );
}

export default AppFooter;
