<template lang="html">
  <div class="container">

    <form>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>File a Complaint</h3>

          <hr>

          <div class="form-group">
            <!-- with v-model we set up a 2 way data binding between this input field and the vue instance. -->
            <!-- The .trim modifier strips all whitespace (spaces, tabs, ect) from the input field provided -->
            <label for="email">Mail</label>
            <!-- In the first example we create the longhand version of what v-model which -
            :value which allows our Vue instance to pass a property into our element
            @input creates the event listener so the element can react to changes -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value"
              >
          </div>
          <!-- When we add the .lazy modifier to our v-model(s), instead of our data properties updating on every key stroke, the properties are only updated when a user leaves the targeted input field -->
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy.trim="userData.password">
          </div>
          <!-- the .number modifier is used to ensure a number is passed as the age input value instead of a string -->
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.lazy.number="userData.age">
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work! If we were to want to set a default value in the textarea, we could just use v-model-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
            ></textarea>
          </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <!-- Checkboxes are usually used when there are 2 or more selectable options to be chosen from so this technique with using an array to pass which inputs to select is perfect. -->
            <label for="sendmail">
              <!-- We can also use 2 way data binding for checkbox inputs to hook up the checkbox buttons to an array we specify in the data object.  -->
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <!-- So when we select a checkbox option, the value of the input is appended to an array which we then can display on the Send Mail? list -->
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
          </div>

        </div>
      </div>

        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <!-- We typically use radio buttons when chosing ONE option out of the select number given. -->
            <label for="male">
              <!-- Like all the other inputs so far, we use v-model to bind to our data property. -->
              <input
                type="radio"
                id="male"
                value="Male"
                v-model="gender"> Male
            </label>
            <!-- When we bind both of the radio buttons to the same 2 way binding, Vue now knows they belong together and only one should be returned as the value. Vue also automatically stores the VALUE of the selected input in the 2 way data binding value  -->
            <label for="female">
              <input
                type="radio"
                id="female"
                value="Female"
                v-model="gender"> Female
            </label>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">

            <label for="priority">Priority</label>
            <!-- To bind to a selected option and create a default selected option we AGAIN use v-model. This time we use the v-model in the outer select tag so once we select an option, the value of the option gets passed to our selectedPriority property-->
            <select
              id="priority"
              class="form-control"
              v-model="selectedPriority">
              <!-- Here we use v-for to loop through our data property array to populate our options field -->
              <option
                v-for="priority in priorities">{{ priority }}
              </option>
            </select>

            </div>
        </div>

        <!-- Our own custom input -->
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <custom-input v-model="customInputOn"></custom-input>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <!-- When you have a button inside of a form, the default action is to submit the form upon clicking it, to prevent this we can use the .prevent modifier to create our own custom submission -->
            <button
              class="btn btn-primary"
              @click.prevent="submitted">Submit
            </button>
          </div>
        </div>

    </form>

    <hr>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!-- Adding white-space:pre makes it to where line breaks are conserved in the string instead of being omitted. -->
            <p style="white-space:pre;">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
                <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Custom Input Is On: {{ customInputOn }}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import CustomInput from './Custom-Input.vue';

  export default {
    data() {
      return {
        //Instead of having individual properties in the data object, we can just create a userData object to group the differenet related properties into a single location(object)
        userData: {
          email: '',
          password: '',
          //we prepopulate an input by simply setting the object property in the data object.
          age: 21
        },
        message: 'A new Text',
        sendMail: [],
        gender: 'Male',
        // When creating a select dropdown, we can dynamically populate the options with an array
        selectedPriority: 'High',
        priorities: [ 'High', 'Medium', 'Low'],
        customInputOn: true,
        isSubmitted: false
      };
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      'custom-input': CustomInput
    }
  }
</script>

<style scoped>
  .container {
    font-size: 2.4em;
  }
</style>
