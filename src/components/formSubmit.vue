<template>
  <div class="hello">
    <div class="heading" v-if="!formGenerate">
    <h2>Welcome to Smile CDR Test</h2>
    <v-btn class="formButton" color="primary" @click="generateForm" >Generate Form</v-btn>
    </div>
    <div v-else>
      <h3>Please fill the form and Submit</h3>
      &nbsp;&nbsp;
      <v-form v-for="(a, key) in formArray.item" :key="key">
        <h4>{{ a.text }}</h4>
        <div class="booleanType" v-if="a.type === 'boolean'">
          <v-radio-group v-model="a.value">
            <v-radio label="True" value="true"></v-radio>
            <v-radio label="False" value="false"></v-radio>
          </v-radio-group>
        </div>
        <div v-if="a.type === 'string'">
          <v-text-field v-model="a.value" outlined dense></v-text-field>
        </div>
        <div v-if="a.type === 'date'">
          <v-app id="inspire">
            <v-row justify="left">
              <v-date-picker no-title v-model="a.value" @change="dateChange"></v-date-picker>
            </v-row>
          </v-app>
        </div>
        <div v-if="a.type === 'choice'">
          <v-autocomplete outlined v-model="a.value" :items="a.option" item-text="valueCoding.display"
            item-value="name"></v-autocomplete>
        </div>
        <span v-if="a.value == '' && errorValidation" class="error">Required</span>
      </v-form>
      <v-btn class="submitButton" color="primary" @click="submitForm">Submit</v-btn>
      <div v-if="formSubmitted && errorValidation">
        <div v-for="a in formArray.item" :key="a" style="border-bottom: 1px solid gray; padding: 2px">
          <span class="bold-text">{{ a.text }}&nbsp;&nbsp;</span>
          <span class="light-text">{{ a.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formQuestionarie } from '../../questionarie'
export default {
  name: "Questionarie",
  components: {},
  data() {
    return {
      radioGroup: [],
      countryBirth: "",
      gender: [],
      select: [],
      selectedDate: '',
      formGenerate: false,
      formSubmitted: false,
      errorValidation: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      radioChoice: [
        {
          id: 1,
          name: 'Yes'
        },
        {
          id: 2,
          name: 'No'
        }
      ],
      formArray: formQuestionarie
    }
  },
  methods: {
    generateForm() {
      this.formGenerate = true
    },
    dateChange() {
      console.log(this.picker)
    },
    submitForm() {
      this.formArray.item.map((e) => {
        if (e.value == '') return this.errorValidation = true
        else this.formSubmitted = true
      })
    }
  }
}
</script>

<style scoped>
.hello {
  width: 50%;
  margin: 2em 15em;
}

.formButton {
  border: solid 1px #5d409f !important;
  background: #5d409f !important;
  color: #ffffff !important;
  padding: 5px !important;
  cursor: pointer;
  border-radius: 5px !important;
  margin-top: 1em !important;
}

.submitButton {
  border: solid 1px #5d409f !important;
  background: #5d409f !important;
  color: #ffffff !important;
  padding: 5px !important;
  cursor: pointer;
  border-radius: 5px !important;
}

::v-deep .booleanType .v-input--radio-group__input {
  display: flex !important;
  align-items: baseline !important;
  flex-direction: inherit !important;
}

::v-deep .booleanType .v-radio.theme--light {
  display: flex !important;
}

#inspire {
  margin-top: 1em;
  max-height: 280px;
  margin-bottom: 1em;
}

::v-deep #inspire .v-application--wrap {
  min-height: 0px !important;
}

h2,h3 {
  color: #111111;
  background: yellow;
  padding: 5px;
  width: fit-content;
}

.error {
  color: #ef0b0b;
  font-style: oblique;
  font-weight: bold;
}

::v-deep .v-text-field__details {
  display: none;
}

::v-deep .v-messages.theme--light {
  display: none;
}
</style>
