var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import rd3 from 'react-d3';

var Hello = React.createClass({

  render: function() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('content')
);
