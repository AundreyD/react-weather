const React = require('react');
const {Link} = require('react-router')

// const Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Examples Component</h3>
//   );
// }
// });

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
      </ol>
    </div>
);
}

module.exports = Examples;
