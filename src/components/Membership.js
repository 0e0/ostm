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
            textClass='amanda-text member-text'
            name='Amanda'
            image={require('./ambassadors/amanda.jpg')}
            bio={'Amanda Peñaloza joined OStM after Christmas caroling in a nursing home and seeing the impact it made on the residents. She acts as a coordinator and performer for the group, and encourages anyone looking for a way to make an impact on their community to join.'}
            />
            <Bio
              className='darice member-container'
              textClass='darice-text member-text'
              name='Darice'
              image={require('./ambassadors/Darice.jpg')}
              bio={'OStM gives me an opportunity to give my time and talent to bring the joy of music to the lives of others. The fact that we perform for the elderly who are in skilled nursing, assisted living, hospice, and Alzheimer facilities makes the experience most meaningful. If you would like to perform for the most appreciative audience ever, join OSTM for a meaningful experience both personally and collectively.'}
              />
          <Bio
            className='ejerson member-container'
            textClass='ejerson-text member-text'
            name='Ejerson'
            image={require('./ambassadors/ejerson.jpg')}
            bio={'I really am super excited about making this website! I created OStM in hopes to provide those involved with the chance to make a difference.'}
          />
          <Bio
            className='hannah member-container'
            textClass='hannah-text member-text'
            name='Hannah'
            image={require('./ambassadors/hannah.jpg')}
            bio={'Hannah Hopper, coordinator and performer in OStM, joined the organization partly in memory of her late great-grandparents, who passed away from Alzheimer’s and who greatly enjoyed having someone come sing to them. She believes people with a love for making others smile will find a great place in OStM.'}
          />
          <Bio
            className='pat member-container'
            textClass='pat-text member-text'
            name='Pat'
            image={require('./ambassadors/Pat.jpg')}
            bio={"Hi my name is Pat and I am an accompanist for OStM."}
            />

      </div>
      </RouteTransition>
    );
  }
});
