var React = require('react');

var MyComponent = React.createClass({
  render: function(){
     return (
         <div>This is victory!!
           <div>{this.props.somethingRandom}</div>
         </div>
       );
  }
});

React.render(<MyComponent somethingRandom="abc123"/>, document.body);
