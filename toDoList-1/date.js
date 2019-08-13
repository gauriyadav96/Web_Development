// jshint esversion:6

module.exports.getDate = function (){

      let today = new Date();
      let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      };
      return today.toLocaleDateString("en-US", options); // Tuesday, August 13;
    };


module.exports.getDay = function (){

      let today = new Date();
      let options = {
        weekday: 'long'
      };
      return today.toLocaleDateString("en-US", options); ;
    };
