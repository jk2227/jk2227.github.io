import React from "react";

export default class Footer extends React.Component {
  render() {
    var foot={
      position: 'fixed',
      right: 0,
      bottom: 0,
      left: 0,
      padding: '1rem',
      textAlign: 'center',
      // backgroundImage: 'url("http://i.imgur.com/hmaJ0Zh.jpg")',
      // backgroundSize: '100% 100%'
    }
    return (<div>
      
      <div style={foot}>
        
        Weon Kim © 2017</div>
      </div>
    );
  }
}
