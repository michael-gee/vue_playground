<template lang="html">
  <div class="component-container">
    <section>
      <h1>Connecting to Servers Through HTTP</h1>

      <h3>POST Data</h3>

      <div class="user-input">
        <label>Username:</label>
        <input type="text" v-model.lazy.trim="user.userName">
      </div>
      <div class="user-input">
        <label>eMail:</label>
        <input type="text" v-model.lazy.trim="user.email">
      </div>

      <button @click="submitForm">Submit</button>

      <hr>

      <h3>GET data</h3>

      <input type="text" v-model="node">
      <br><br>
      <button @click="fetchData">Show Data</button>

      <ul>
        <li v-for="u in users">
          {{ u.userName }} -- {{ u.email }}
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
  //Since we can use Vanilla JavaScript alongside our Vue instance in our script tag, this makes it easy to set up HTTP requests with any libraries/resources (or just with vanilla js) we want.'

  // In this example the instructor uses a outside library called ***** vue-resource ***** which makes the process of making http requests in vue simple

  // To begin we can include this dependency through npm with npm install vue-resource --save and then it will be available in our project

  export default {
    data() {
      return {
        user: {
          userName: '',
          email: ''
        },

        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submitForm() {
        // This $http object is available to use through the vue-resource outside dependency we installed and included in our project
          // With this dependency we get the .get() .post() and other methods we can use to send http requests to servers
          // In the post() request, the method takes 2 parameters, the 1st being the REST API URL of the server of where we want to input our data and the 2nd is the data we want to input
        this.$http.post('https://vue-playground-540ac.firebaseio.com/data.json', this.user).then(response => {
          console.log(response);
        },error => {
          console.log(error);
        });
        // Another perk of the vue-resource dependency is that it is async and allows promises, so when we get a response from the server we can then do something in the then() method

        //this.resource.save({}, this.user);
          // See vue-resource documentation for additional guides, but you can see instead of using the .post() method we now use resource.save() and have a much shorterhand version of our request.

        this.resource.saveAlt(this.user);
          // So now since we created our own custom resource, you can see it is much easier/cleaner to create reusable requests with params we specify in the customActions object
      },

      fetchData() {
        // When using the .get() the only parameter we have to include is the REST API URL to where the data is stored to recieve the data. We then can see/manipulate the response of the request through the .then() promise method
        /*
        this.$http.get('data.json').then( response => {

          // Since the response comes back as a JSON string, we can use the .json() method to turn it into a JS object that we can use to input into our array
          console.log(response);

          return response.json();

          // The .then() method is asynchronis, which means when we use response.json() it will return a promise object instead of an object with our data inside, to solve this problem we RETURN the response.json() and then append another .then() method to execute once our data has returned
            // The parameter in the next .then() method is whatever is RETURNed in the previous then() method

        }).then( data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;

          //Since our data comes back as an object and not an array, we must alter the data to where we can push it into an array so we can use a v-for to display all the items.
        });
        */
        // DYNAMIC REQUEST
        this.resource.getData({node: this.node})
          .then( response => {
            return response.json();
          })
          .then( data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
        });
          // To pass the dynamic location to the $resource string we change the param object in the getData call. If there were multiple dynamic sub-locations we would simply just add another property to the object, {node: this.node, subroute: this.subroute -- '{node}/{subroute}.json'}
      }
    },
    created() {
      // To create our own custom resources we can include the properties/location of the request in a object we store in a constant and then use it inside the resource.
      const customActions = {
        saveAlt: {
          method: 'POST',
          url: 'alternative.json'
        },
        getData: {
          method: 'GET'
        }
      }
      // With the vue-resource dependency we can create CUSTOM RESOURCES which is a shorthand/easier way to create HTTP requests that contain additional information
        //To create a resource we add it to our data object and then set the emtpy object equal to the $resource() provided by vue-resource with the location in the database we want to target.
      this.resource = this.$resource('{node}.json', {}, customActions);
        // Creating your own custom resources are needed whenever you make similar requests at multiple places in your application.
        // We can make the location of our requests dynamic by using the {} inside the string and then passing params when we make our http request like we do with getData() above
    }
  }
</script>

<style scoped>
  h3 {
    margin: 15px 0;
  }
  .user-input {
    margin: 15px 0;
  }
</style>
