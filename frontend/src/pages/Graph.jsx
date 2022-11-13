import { Component } from "react";

import './Graph.css';

import Scarf from '../components/Scarf';
import Catalogue from "../components/AlgorithmPage/Catalogue";

import GraphTravContainer from "../containers/GraphTravContainer";
// import MaxFlow from "../components/AlgorithmPage/MaxFlow";

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const TabCge = styled(TabUnstyled)`
    width: 120px;
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 1.0rem;
    font-weight: normal;
    background-color: #9D9497;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(106, 24, 44, 0.4);
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #6A182C;
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 420px
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.2rem;
`;

const TabsList = styled(TabsListUnstyled)`
    width: 420px;
    border-radius: 8px;
    margin: 6px 1px 6px 5px;
    display: flex;
    
`;



class Graph extends Component {
    openGravy = () => {
        window.open("https://gravy.thud.dev/")
    }
    render(){
        return (
            <div className="graph">
                <div className='ctn'>
                    <Scarf text='实战示例 - 图'/>
                </div>
                <div className="algorithm-brim">
                </div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className="algorithm-content">
                        <TabsUnstyled defaultValue={0}>
                            <TabsList>
                                <TabCge>遍历</TabCge>
                                <TabCge>更多</TabCge>
                            </TabsList>
                            <TabPanel value={0}>
                                <GraphTravContainer />
                            </TabPanel>
                            <TabPanel value={1}>
                                <button onClick={this.openGravy}>Click Me!</button>
                            </TabPanel>
                        </TabsUnstyled>
                    </div>
                </div>
            </div>
        );
    }

}

export default Graph;