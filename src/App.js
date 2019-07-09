import React from 'react';

class AddFriend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newFriend: ''
    }

    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map((friend) => {
            return <li> {friend} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mohammad Ayub',
      friends: [
        'Raza',
        'Zain'
      ],
    }

    this.addFriend = this.addFriend.bind(this)
  }
  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}