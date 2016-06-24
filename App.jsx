import React from 'react';


let mystyle = {
		color:"red"
	};


var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? '喜欢' : '不喜欢';
    return (
      <p onClick={this.handleClick}>
        你<b>{text}</b>我。点我切换状态。
      </p>
    );
  }
});

let HelloMessage = React.createClass({
	render:function(){
		return <h1 style = {mystyle}>hh</h1>
	}
}) 

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!<br />
            欢迎来到菜鸟教程学习！！！<br />

            are kid me?
             <div>6666s</div>
             <HelloMessage />
             <LikeButton />
         </div>
      );
   }
}

export default App;