import "../src/styles/main.css";
import "../src/App.css";
import "../src/index.css";
import {HeaderComponent} from "./components/header.tsx";
import {AboutUS} from "./components/aboutUs.tsx";
import {Help} from "./components/help.tsx";
import {Pricing} from "./components/pricing.tsx";
import {Home} from "./components/home.tsx";
import { atomWithLocation } from "jotai-location";
import { atom, useAtomValue } from "jotai";
import React from "react";
import {ContactUs} from "./components/contactUs.tsx";

const location = atomWithLocation();

const exchangeParams = atom(get => {
    const l = get(location)
    return ["state", "session_state", "iss", "code"].reduce((acc, cur) => {
        if (l.searchParams?.has?.(cur))
            return {...acc, [cur]: l.searchParams.get(cur)}
        return acc;
    }, {})
})


function App() {
    const loc = useAtomValue(exchangeParams);

    if (Object.keys(loc).length > 0) {
        window.location.href = `/app/?${new URLSearchParams(loc).toString()}`
        return null;
    }

    return (
            <React.Fragment>
                <div style={{flexGrow:1}}>
                    <HeaderComponent />
                    <Home />
                    <AboutUS />
                    <Pricing />
                    <Help />
                    <ContactUs />
                </div>
            </React.Fragment>
    );
}

export default App;
