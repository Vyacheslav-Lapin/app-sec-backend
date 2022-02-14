import React, {PureComponent} from 'react';
import User from "../../model/User";

interface UserProps {
  id: number
  key: string
}

interface UserState extends UserProps {
  user?: User
}

export default class UserView extends PureComponent<UserProps, UserState> {

  static defaultProps: UserProps = { id: 1, key: "1" };

  state: UserState = {...this.props}; //cloning props

  componentDidMount() {
    fetch(`/api/users/${this.state.id}`)
        .then(response => response.text())
        .then(text => JSON.parse(text) as User)
        .then(user => this.setState({user}));
  }

  render() {

    const {user} = this.state;

    return <tr>
      <td>{user?.username}</td>
      <td>{user?.email}</td>
      <td>{user?.name}</td>
      <td>{user?.phone}</td>
      <td>{user?.address.city}</td>
    </tr>;
  }
}
