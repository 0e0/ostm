import React from 'react';
import { RouteTransition } from 'react-router-transition';
import Bio from '../containers/membership-bio';

export default React.createClass({


  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateY: -100 }}
        atLeave={{ translateY: 100 }}
        atActive={{ translateY: 0 }}
        mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}
        >
      <div className='text text-membership'>
          <h1>membership</h1>
          <Bio
            className='amanda member-container'
            name='Amanda'
            image={require('./ambassadors/amanda.jpg')}
            bio={'Amanda Peñaloza joined OStM after Christmas caroling in a nursing home and seeing the impact it made on the residents. She acts as a coordinator and performer for the group, and encourages anyone looking for a way to make an impact on their community to join.'}
            />
          <Bio
            className='ejerson member-container'
            name='Ejerson'
            image={require('./ambassadors/ejerson.jpg')}
            bio={'I really am super excited about making this website! I created OStM in hopes to provide those involved with the chance to make a difference.'}
          />
          <Bio
            className='hannah member-container'
            name='Hannah'
            image={require('./ambassadors/hannah.jpg')}
            bio={'Hannah Hopper, coordinator and performer in OStM, joined the organization partly in memory of her late great-grandparents, who passed away from Alzheimer’s and who greatly enjoyed having someone come sing to them. She believes people with a love for making others smile will find a great place in OStM.'}
          />
      </div>
      </RouteTransition>
    );
  }
});
