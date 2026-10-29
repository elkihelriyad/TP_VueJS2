<template>
  <div>
    <div class="page-header">
      <h2>Ajouter un nouvel emploi</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Titre du poste *</label>
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="ex: Développeur Full Stack"
          required
        />
      </div>

      <div class="form-group">
        <label for="type">Type de contrat</label>
        <select id="type" v-model="type">
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="Stage">Stage</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>

      <div class="form-group">
        <label for="salary">Salaire proposé *</label>
        <input
          id="salary"
          v-model="salary"
          type="text"
          placeholder="ex: 12 000 DH"
          required
        />
      </div>

      <div class="form-group">
        <label for="experience">Années d'expérience requises *</label>
        <input
          id="experience"
          v-model="experience"
          type="text"
          placeholder="ex: 2 ans, Débutant"
          required
        />
      </div>

      <div class="form-group">
        <label for="createdAt">Date de création *</label>
        <input
          id="createdAt"
          v-model="createdAt"
          type="date"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description du poste *</label>
        <textarea
          id="description"
          v-model="description"
          rows="5"
          placeholder="Détails des missions, compétences attendues..."
          required
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Enregistrer l'emploi</button>
        <router-link to="/" class="btn btn-secondary">Annuler</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      title: '',
      type: 'CDI',
      salary: '',
      experience: '',
      createdAt: new Date().toISOString().slice(0, 10),
      description: ''
    }
  },
  methods: {
    handleSubmit() {
      const newJob = {
        title: this.title,
        type: this.type,
        salary: this.salary,
        experience: this.experience,
        createdAt: this.createdAt,
        description: this.description
      }

      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
