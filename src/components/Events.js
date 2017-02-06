import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Feb4 from './Feb4';
import Feb11 from './Feb11';
import Mar4 from './Mar4';
import Mar11 from './Mar11';


export default class Events extends Component {
  render() {
    return (
      <div className='text'>
        <div>
          <h1>events</h1>
          <Link to="/"><img src={require('./images/home-button.png')} /></Link>
          <h2>Rehearsals are held every Tuesday from 5:45 pm to 6:45 pm in Good Samaritan Creative Arts Room</h2>
          <Link to="/signup">
            <h1 className="signup">Performance Sign-up</h1>
            </Link>
        </div>
        <div>
        <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className='event-tabs'
        >

        <TabList>
          <Tab>2 | 4</Tab>
          <Tab>2 | 11</Tab>
          <Tab>3 | 4</Tab>
          <Tab>3 | 11</Tab>
        </TabList>
          <TabPanel>
            <div><Feb4 /></div>
          </TabPanel>
          <TabPanel>
            <div><Feb11 /></div>
          </TabPanel>
          <TabPanel>
            <div><Mar4 /></div>
          </TabPanel>
          <TabPanel>
            <div><Mar11 /></div>
          </TabPanel>
      </Tabs>

      </div>
      </div>
    );
  }
}
