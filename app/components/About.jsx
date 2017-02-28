const React = require('react');

// const About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//   );
// }
// });

const About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <h1>React Weather project created to learn React</h1>
    </div>
);
}

module.exports = About;
