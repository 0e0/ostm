import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link } from 'react-router';

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
      <h1>Operation Spread the Music</h1>
          <div className='team-header'>
          <h1>team</h1>
          <Link to="/"><img className="home-button" src={require('./images/home-button.png')} /></Link>
          </div>
          <Bio
            className='amanda member-container'
            textClass='amanda-text member-text'
            name='Amanda'
            image={require('./ambassadors/amanda.jpg')}
            bio={'Amanda Peñaloza joined OStM after Christmas caroling in a nursing home and seeing the impact it made on the residents. She acts as a coordinator and performer for the group, and encourages anyone looking for a way to make an impact on their community to join.'}
            />
            <Bio
              className='barb member-container'
              textClass='barb-text member-text'
              name='Barb'
              image={require('./ambassadors/barb.jpg')}
              bio={"I accompany for OStM, and love to share in bringing the joy of music to the elderly. I have participated since the group's beginnings, and would encourage any and all students and community members to experience the unique ways in which this outreach touches lives."}
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
            bio={'Hi my name is Ejerson Balabas and I coordinate the OStM logistical team. I devote myself to OStM in hopes to provide those involved with the chance to make a difference. I work to help make this group into something that is important to the community. Anyone who dreams to make our world a little better should join.'}
          />
          <Bio
            className='hannah member-container'
            textClass='hannah-text member-text'
            name='Hannah'
            image={require('./ambassadors/hannah.jpg')}
            bio={'Hannah Hopper, coordinator and performer in OStM, joined the organization partly in memory of her late great-grandparents, who passed away from Alzheimer’s and who greatly enjoyed having someone come sing to them. She believes people with a love for making others smile will find a great place in OStM.'}
          />
          <Bio
            className='heather member-container'
            textClass='heather-text member-text'
            name='Heather'
            image={require('./ambassadors/heather.jpg')}
            bio={'My name is Heather Dials and I am an opera singer, voice teacher, mother and wife. When I look at examples of people who have improved the world, it is usually done through giving without wanting anything in return. I would like to do that with music. Being a part of OStM has been a true gift. To witness the joy music brings is all the reason I need to want to be a part of this wonderful organization.' }
          />
          <Bio
            className='pat member-container'
            textClass='pat-text member-text'
            name='Pat'
            image={require('./ambassadors/Pat.jpg')}
            bio={"Hi my name is Pat and I am an accompanist for OStM."}
            />
            <Bio
              className='trystan member-container'
              textClass='trystan-text member-text'
              name='Trystan'
              image={require('./ambassadors/trystan.jpg')}
              bio={"My name is Trystan Harpold and i am a Performer and Blitz Coordinator for OStM. I first joined OStM because i wanted more opportunities to perform for a crowd that would appreciate my playing without judgment. You should join OStM because it is a great way to give back to the community and it means the world the residents we perform for."}
              />

      </div>
      </RouteTransition>
    );
  }
});
