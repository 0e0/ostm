import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="east">
        <h2>East Blitz Schedule</h2>
        <table>
          <tr>
          <th>Time</th>
          <th>Location</th>
          </tr>
          <tr>
            <td>11:00 AM </td>
            <td>Sagecrest</td>
          </tr>
          <tr>
            <td>12:00 PM </td>
            <td>Golden Mesa</td>
          </tr>
          <tr>
            <td>12:30 PM </td>
            <td>Lunch (TBA)</td>
          </tr>
          <tr>
            <td>1:30 PM </td>
            <td>Aristocrat</td>
          </tr>
          <tr>
            <td>2:30 PM </td>
            <td>Good Samaritan</td>
          </tr>
        </table>
      </div>
    );
  }
});
