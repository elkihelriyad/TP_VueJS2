<template>
  <div v-if="job" class="details-container">
    <div class="details-header">
      <h2>{{ job.title }}</h2>
      <div class="job-meta" style="margin-top: 10px;">
        <span class="badge badge-type" v-if="job.type">{{ job.type }}</span>
        <span class="badge badge-salary" v-if="job.salary">Salaire : {{ job.salary }}</span>
        <span class="badge badge-exp" v-if="job.experience">Expérience : {{ job.experience }}</span>
        <span class="badge" v-if="job.createdAt">Date d'ajout : {{ job.createdAt }}</span>
      </div>
    </div>

    <div class="details-section">
      <h3>Description du poste</h3>
      <p style="line-height: 1.6; white-space: pre-line;">{{ job.description }}</p>
    </div>

    <div class="form-actions">
      <router-link :to="'/jobs/' + job.id + '/edit'" class="btn btn-warning">Modifier l'emploi</router-link>
      <button class="btn btn-danger" @click="deleteJob">Supprimer l'emploi</button>
      <router-link to="/" class="btn btn-secondary">Retour à la liste</router-link>
    </div>
  </div>
  <div v-else class="empty-message">
    Chargement des détails de l'emploi...
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  methods: {
    fetchJob() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => {
          this.job = data
        })
        .catch(err => console.log(err))
    },
    deleteJob() {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
        fetch('http://localhost:3000/jobs/' + this.id, {
          method: 'DELETE'
        })
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => console.log(err))
      }
    }
  },
  mounted() {
    this.fetchJob()
  }
}
</script>
