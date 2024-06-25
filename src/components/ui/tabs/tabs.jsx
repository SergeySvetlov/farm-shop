import React, {useState} from "react";
import {TabsList, TabButton, TabContent} from "./styled.js";
import Title from "../../ui/title/title.jsx";

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
     return (
        <>
            <TabsList>
            {tabs && tabs.length && tabs.map((tab, i) => {
                if (i === activeTab) {
                    return ( <TabButton active key={tab.title}>
                                <Title as="h3" size="extrasmall" active>{tab.title}</Title>                                
                            </TabButton>)
                    }
                    return (<TabButton key={tab.title} onClick={() => setActiveTab(i)}><Title as="h3" size="extrasmall">{tab.title}</Title></TabButton>)
                })}
            </TabsList>
            <TabContent>{tabs[activeTab].description}</TabContent>
        </>)
}

export default Tabs;