import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { RouteTransition } from 'react-router-transition';

import Feb4 from './blitz-date/Feb4';
import Feb11 from './blitz-date/Feb11';
import Mar4 from './blitz-date/Mar4';
import Mar18 from './blitz-date/Mar18';
import Apr1 from './blitz-date/Apr1';
import Apr22 from './blitz-date/Apr22';
import May6 from './blitz-date/May6';
import May20 from './blitz-date/May20';

import West from './blitz-schedule/west';
import East from './blitz-schedule/east';

export default class Events extends Component {
  render() {
    return (
      <div className="events">
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateX: -100 }}
        atLeave={{ translateX: 100 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
        >
        <div>
          <h1>events</h1>
          <Link to="/"><img src={require('./images/home-button.png')} /></Link>
          <div className="blitz-rehearsals">
          <h3 className="rehearsal-time">Rehearsals are held every Tuesday from 5:45 pm to 6:30 pm in Good Samaritan Creative Arts Room, please refer to the <a href="#performers">performance information</a> section for more details.</h3>
          <hr />
          <h3 className="performance-time">Directly below is the time and location of the nursing homes we are visiting. On the day of the blitz, we will meet 15 minutes before the performance begins. For example, we begin our West Blitzes at 9:45 AM in Arbors del Rey, which means we will meet there no later than 9:30 AM.</h3>
          </div>
        </div>
        <div>
        <h1 id="performers" className="list">performance information</h1>
        <Tabs
        onSelect={this.handleSelect}
        selectedIndex={7}
        className='event-tabs'
        >
        <TabList>
          <Tab>W | 2.4</Tab>
          <Tab>E | 2.11</Tab>
          <Tab>W | 3.4</Tab>
          <Tab>E | 3.18</Tab>
          <Tab>W | 4.1</Tab>
          <Tab>E | 4.22</Tab>
          <Tab>W | 5.6</Tab>
          <Tab>E | 5.20</Tab>
        </TabList>
          <TabPanel>
            <div><Feb4 /></div>
          </TabPanel>
          <TabPanel>
            <div><Feb11 /></div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <Mar4 />
              <West />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <Mar18 />
              <East />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <Apr1 />
              <West />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <Apr22 />
              <East />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <May6 />
              <West />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="performance-info">
              <May20 />
              <East />
            </div>
          </TabPanel>
      </Tabs>

      </div>
      <div className="more-info">
      <h3>For more information, email us at operationspreadthemusic@gmail.com</h3>
      </div>
      </RouteTransition>
      </div>
    );
  }
}
