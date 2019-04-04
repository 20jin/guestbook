import Vue from 'vue';
import request from 'request';

export default {
  get() {
    return request({
        url: 'http://localhost:3000/replies',
        // headers: {
        //   'Allow-Control-Allow-Origin': '*',
        // }
      }
    , (err, res, body) => {
      if(err){
        console.log(err);
        throw new Error('Get replies fail!!');
      }

      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.

      return body;

    });
  }
}
