import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  //extending the router class for dynamic link
  model(params){
    let url =  "https://www.reddit.com/r/javascript.json";
    //ember knows to wait before rendering department because it recognizes a promise needs to get returned
    $.getJSON(url, function(result){
      console.log(result);
    })
    return $.getJSON(url);
    //can join multiple promises so that ember only loads once data is fully complete or can load asynchrounously
  }
});

// ES6 class
// export default class extends Route {
//   model(params){
//     console.log(params);
//   }
// }
