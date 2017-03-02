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
      <h1 className=" text-center page-title">About</h1>
      <h3>React Weather project created to learn React</h3>
    </div>
);
}

module.exports = About;
