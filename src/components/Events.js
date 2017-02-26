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

export default class Events extends Component {
  render() {
    return (
      <div className='text'>
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
          <Link to="/signup">
            <h1 className="signup">Performance Sign-up</h1>
            </Link>
          <div className="blitz-rehearsals">
          <h3 className="rehearsal-time">Rehearsals are held every Tuesday from 5:45 pm to 6:30 pm in Good Samaritan Creative Arts Room, please refer to the <a href="#performers">Performers List</a> to know the specific rehearsl date for each blitz.</h3>

          <h3 className="rehearsal-time">Directly below is the time and location of the nursing homes we are visiting. On the day of the blitz, we will meet 15 minutes before the performance begins. For example, we begin our West Blitzes at 9:45 AM in Arbors del Rey, we will meet there at 9:30 AM.</h3>
          <div className="west">
            <h2>W = West Blitz</h2>
            <table>
              <tr>
              <th>Time</th>
              <th>Location</th>
              </tr>
              <tr>
                <td>9:45 AM</td>
                <td>Arbors del Rey</td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Casa Bella</td>
              </tr>
              <tr>
                <td>11:30 AM</td>
                <td>Mesilla Valley Hospice</td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>Lunch (TBA)</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>Casa Del Sol</td>
              </tr>
            </table>
          </div>
          <div className="east">
            <h2>E = East Blitz</h2>
            <table>
              <tr>
              <th>Time</th>
              <th>Location</th>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>Sagecrest</td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>Golden Mesa</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Lunch (TBA)</td>
              </tr>
              <tr>
                <td>1:30 PM</td>
                <td>Aristocrat</td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>Good Samaritan</td>
              </tr>
            </table>
          </div>
          </div>

        </div>
        <div>
        <h1 id="performers" className="list">performers list</h1>
        <Tabs
        onSelect={this.handleSelect}
        selectedIndex={2}
        className='event-tabs'
        >

        <TabList>
          <Tab>W | 2.4</Tab>
          <Tab>E | 2.11</Tab>
          <Tab>W | 3.4</Tab>
          <Tab>E | 3.18</Tab>
          <Tab>W | 4.1</Tab>
          <Tab>E | 4.22</Tab>
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
            <div><Mar18 /></div>
          </TabPanel>
          <TabPanel>
            <div><Apr1 /></div>
          </TabPanel>
          <TabPanel>
            <div><Apr22 /></div>
          </TabPanel>
      </Tabs>

      </div>
      </RouteTransition>
      </div>
    );
  }
}
