import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import styles from './index.css';

//VIEW
const UserList = ({ users }) => (
  <ul className={styles.userList}>
    { users.map(({name, id, gender})=><li key={ id } className={styles[`userListItem--${gender}`]}>{ name }</li>) }
  </ul>
)

//CONTAINER
class UserListContainer extends React.Component {
  
  state = {
    loading: true,
    users: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(r=>r.json())
      .then(({ results })=>this.setState({
        users:  results.map(({name, gender, login: { uuid: id }})=>({name: this._formatName(name), gender, id})),
        loading: false
      }));
  }

  _formatName = ({title, first, last}) => `${title}. ${first} ${last}`;

  render() {

    if(this.state.loading) return <p>Loading...</p>

    const { users } = this.state;
    const userListProps = { ...this.props, users };

    return <UserList { ...userListProps }/>;
  }
}

ReactDOM.render(
  <UserListContainer />,
  document.getElementById('app')
);
