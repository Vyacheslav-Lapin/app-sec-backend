import React from 'react';
import UserView from "../UserView";

export default () => <table>
  <thead>
  <tr>
    <th>nick name</th>
    <th>email</th>
    <th>name</th>
    <th>phone</th>
    <th>city</th>
  </tr>
  </thead>
  <tbody>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(value => <UserView key={value.toString()} id={value}/>)}
  </tbody>
</table>
