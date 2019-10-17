import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import  Game  from "./game"
import { DropdownItem } from "./dropdown"

export default function BasicRoute() {
    const testData = {
        title: {
            href: '',
            text: 'title',
        },
        content: [
            {
                href: '',
                text: 'item1',
            },
            {
                href: '',
                text: 'item2',
            },
        ]
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div><Game /><br /><a href='./dropdown'>dropdown</a></div>
                </Route>
                <Route path="/dropdown">
                    <DropdownItem value={testData} />
                </Route>
            </Switch>
        </Router>
    );
}
