// import React, { useState, useEffect } from 'react';
// import { csv } from 'd3';

// const csvUrl =
//   'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';

// export const useData = () => {
//   const [data, setData] = useState(null); //set data and setDate to to null state initially.

//   useEffect(() => { //tell React that your component needs to do something after render
//     const row = d => { //useEffect runs after every render, so we intiailise it with that empty array

//       d.sepal_length = +d.sepal_length;
//       d.sepal_width = +d.sepal_width;
//       d.petal_length = +d.petal_length;
//       d.petal_width = +d.petal_width;
//       return d; //d is syn
//     };
//     csv(csvUrl, row).then(setData); //the way csv function works here is 
//     //first parameter is URL, second parameter is an option function that changes the representation
//     //of the data, in this case that function is row.
//     //row takes the data found at csvURL as its parameter, and returns d. Here, we want those to be integers,
//     // you may not need that for your project, you might just run the below code:
//   }, []);
  
//   return data;
// };


import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';

export const useData = () => {
  const [data, setData] = useState(null); //set data and setDate to to null state initially.

  useEffect(() => { //tell React that your component needs to do something after render
    const row = d => { //useEffect runs after every render, so we intiailise it with that empty array
      console.log(d)
      return d; //d is syn
    };
    csv(csvUrl, row).then(setData); //the way csv function works here is 
    //first parameter is URL, second parameter is an option function that changes the representation
    //of the data, in this case that function is row.
    //row takes the data found at csvURL as its parameter, and returns d. Here, we want those to be integers,
    // you may not need that for your project, you might just run the below code:
  }, []);
  
  return data;
};