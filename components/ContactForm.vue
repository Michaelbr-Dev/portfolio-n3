<template lang="">
  <v-container class="d-flex justify-center" tag="section">
    <div v-if="success">
      <v-alert type="success" variant="outlined">Votre message a été envoyé</v-alert>
    </div>

    <v-form v-else ref="form" v-model="valid" class="w-75">
      <div v-if="error" class="mb-7">
        <v-alert type="error" variant="outlined">Votre message n'a pas été envoyé</v-alert>
      </div>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="lastname"
            :rules="[(v) => !!v || 'Le champ Nom est obligatoire']"
            label="Nom"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="firstname"
            :rules="[(v) => !!v || 'Le champ Prénom est obligatoire']"
            label="Prénom"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            :rules="[(v) => !!v || 'Le champ Message est obligatoire']"
            label="Votre message"
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="pl-3">
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit"> Envoyer </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      lastname: '',
      firstname: '',
      email: '',
      message: '',
      emailRules: [
        (v) => !!v || 'Le champ Email est obligatoire',
        (v) => /.+@.+\..+/.test(v) || "L'Email doit être valide !",
      ],
      success: false,
      error: false,
    };
  },
  methods: {
    async submit() {
      try {
        const { firstname, lastname, email, message } = this;
        const data = { firstname, lastname, email, message };

        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.status === 201) {
          this.success = true;
        } else {
          this.error = true;
        }
      } catch (error) {
        this.error = true;
      }
    },
  },
};
</script>
