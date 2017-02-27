import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="west">
        <h2>West Blitz Schedule</h2>
        <table>
          <tr>
          <th>Time </th>
          <th>Location </th>
          </tr>
          <tr>
            <td>9:45 AM </td>
            <td>Arbors del Rey</td>
          </tr>
          <tr>
            <td>10:30 AM </td>
            <td>Casa Bella</td>
          </tr>
          <tr>
            <td>11:30 AM </td>
            <td>Mesilla Valley Hospice</td>
          </tr>
          <tr>
            <td>12:00 PM </td>
            <td>Lunch (TBA)</td>
          </tr>
          <tr>
            <td>1:00 PM </td>
            <td>Casa Del Sol</td>
          </tr>
        </table>
      </div>
    );
  }
});
