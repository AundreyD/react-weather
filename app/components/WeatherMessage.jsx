const React = require('react');
// const WeatherMessage = React.createClass({
//   render: function(){
//     let {temp, location} = this.props;
//     return(
//       <div>
//         <p>{temp} Degrees In {location}</p>
//       </div>
//     );
//   }
// });

// const WeatherMessage = (props} => {
//   return(
//     <div>
//       <p>{props.temp} Degrees In {props.location}</p>
//     </div>
//   );
// }


// const WeatherMessage = (props} => {
//   let {temp, location} = props;
//   return(
//     <div>
//       <p>{temp} Degrees In {location}</p>
//     </div>
//   );
// }


const WeatherMessage = ({temp, location}) => {
  return(
      <h1 className="text-center">{temp} Degrees In {location}</h1>

  );
}

module.exports = WeatherMessage;
