import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  render(){
    console.log(this.props.userInfo);
    return(
      <div>
      name: {this.props.userInfo.user.name}
      <img src={this.props.userInfo.user.user_img} />
      </div>
    )
  }
}

export default User;