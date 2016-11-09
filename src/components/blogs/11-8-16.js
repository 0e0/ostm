import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="first-blog">
        <h1>Our Reason for Being</h1>
        <h3>What is OStM trying to fix?</h3>
          <p>Operation Spread the Music was created in response to
          the segregation present in the community.
          OStM endeavors to foster greater interaction
          between members of the community through music and education,
          by doing the following:</p>
          <p className="one">
          1. Bringing performers of various age groups
          to nursing homes and assisted living facilities
          </p>
          <p className="two">
          2. Encouraging musicians of all ages to perform
          for a cause greater than themselves
          </p>
            <h3>Why is OStM addressing this issue?</h3>
            <p>Segregation and isolation is a human issue.
            OStM hopes to provide a channel for human connection through outreach.
            </p>
            <h3>Why should we care?</h3>
            <p>
            It is our obligation as humans to take care of each other.
            There are those in our community that are emotionally neglected,
            and spending time with them would help address some of that need. Also…
            </p>
            <p>
            According to the Wall Street Journal,
            “Anyone reaching the age of 65 years has a 40 percent chance of
            entering a nursing home, with a 20 percent chance of staying there
            for at least five years.”
            </p>
            <p>
            Nursing Home Diaries says “An estimated 78 million baby boomers.
            So, approximately 5 percent, or 3.9 million are expected to head for
            these facilities. Today, a senior citizen (65+) has about a one-in-four
            chance of spending time in a nursing home (skilled care facility).”
            </p>
            <p>
            AARP says that “Nursing home residents are among the most frail Americans.
            In 2005, nearly half of all residents had dementia, and more than half
            were confined to a bed or wheelchair.”
            </p>
            <h3>
            To witness the healing power of music in the nursing home setting,
            see the documentary “Alive Inside,” available on Netflix.
            Below is a short excerpt from the documentary.
            </h3>
            <iframe src="https://www.youtube.com/embed/8HLEr-zP3fc" allowfullScreen>
            </iframe>
              <h2>Help us make this operation a success.</h2>

              <div className="sources">
            
              <p>Sources</p>
              <p>1. <a href="http://online.wsj.com/ad/article/longtermcare-future">The Wall Street Journal</a></p>
              <p>2. <a href='http://nursinghomediaries.com/howmany/'>Nursing Home Diaries</a></p>
              <p>3. <a href='https://assets.aarp.org/rgcenter/il/fs10r_homes.pdf'>AARP</a></p>
            </div>
          </div>
    );
  }
});
