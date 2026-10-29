<template>
  <div>
    <div class="page-header">
      <h2>Modifier l'offre d'emploi</h2>
    </div>

    <form @submit.prevent="handleUpdate" v-if="loaded">
      <div class="form-group">
        <label for="title">Titre du poste *</label>
        <input
          id="title"
          v-model="title"
          type="text"
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
          required
        />
      </div>

      <div class="form-group">
        <label for="experience">Années d'expérience requises *</label>
        <input
          id="experience"
          v-model="experience"
          type="text"
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
          required
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-warning">Enregistrer les modifications</button>
        <router-link :to="'/jobs/' + id" class="btn btn-secondary">Annuler</router-link>
      </div>
    </form>
    <div v-else class="empty-message">
      Chargement de l'emploi...
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditJob',
  props: ['id'],
  data() {
    return {
      title: '',
      type: 'CDI',
      salary: '',
      experience: '',
      createdAt: '',
      description: '',
      loaded: false
    }
  },
  methods: {
    fetchJob() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => {
          this.title = data.title || ''
          this.type = data.type || 'CDI'
          this.salary = data.salary || ''
          this.experience = data.experience || ''
          this.createdAt = data.createdAt || ''
          this.description = data.description || ''
          this.loaded = true
        })
        .catch(err => console.log(err))
    },
    handleUpdate() {
      const updatedJob = {
        title: this.title,
        type: this.type,
        salary: this.salary,
        experience: this.experience,
        createdAt: this.createdAt,
        description: this.description
      }

      fetch('http://localhost:3000/jobs/' + this.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedJob)
      })
        .then(() => {
          this.$router.push('/jobs/' + this.id)
        })
        .catch(err => console.log(err))
    }
  },
  mounted() {
    this.fetchJob()
  }
}
</script>
