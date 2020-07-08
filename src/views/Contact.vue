<template>
  <v-content>
    <div class="staticHero">
         <v-img src="../assets/img/contact.jpg" style="max-height: 250px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-container>
                <div class="headline">CONTACT US</div>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div class="block">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
              SUBMIT
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset">
              RESET
            </v-btn>
          </v-form>
        </v-container>
      </div>
      <div class="googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.711923248!2d-0.3817835530812759!3d51.52873519800852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2slk!4v1594191056616!5m2!1sen!2slk" width="100%" height="450"></iframe>
      </div>
  </v-content>
</template>

<script>
export default {
    name: 'Contact',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be more than 10 characters',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
</script>

<style>

</style>