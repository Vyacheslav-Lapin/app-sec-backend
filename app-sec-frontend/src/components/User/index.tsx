import React, {PureComponent} from 'react';
import User from "../../model/User";

interface UserProps {
  id: number,
}

interface UserState extends UserProps {
  user?: User,
}

class UserView extends PureComponent<UserProps, UserState> {

  static defaultProps: UserProps = { id: 1 };

  state: UserState = this.props;

  async componentDidMount() {
    this.setState({
      user: await fetch(`/api/users/${this.state.id}`)
          .then(response => response.text())
          .then(value => JSON.parse(value)) as User
    });
  }

  render() {

    const {user} = this.state;

    return <tr>
      <td>{user?.username}</td>
      <td>{user?.email}</td>
      <td>{user?.name}</td>
      <td>{user?.phone}</td>
      <td>{user?.address?.city}</td>
    </tr>;
  }
}

export default UserView;
