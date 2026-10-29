<template>
  <div class="job-card">
    <div class="job-card-header">
      <h2 class="job-title">{{ job.title }}</h2>
      <span v-if="job.type" class="badge badge-type">{{ job.type }}</span>
    </div>

    <p class="job-desc">{{ shortDescription }}</p>

    <div class="job-meta">
      <span class="badge badge-salary" v-if="job.salary">{{ job.salary }}</span>
      <span class="badge badge-exp" v-if="job.experience">{{ job.experience }}</span>
      <span class="badge" v-if="job.createdAt">Publié le : {{ job.createdAt }}</span>
    </div>

    <div class="job-actions">
      <router-link :to="'/jobs/' + job.id" class="btn btn-primary">Détails</router-link>
      <router-link :to="'/jobs/' + job.id + '/edit'" class="btn btn-warning">Modifier</router-link>
      <button class="btn btn-danger" @click="deleteJob">Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  emits: ['delete'],
  computed: {
    shortDescription() {
      if (!this.job.description) return ''
      if (this.job.description.length > 120) {
        return this.job.description.slice(0, 120) + '...'
      }
      return this.job.description
    }
  },
  methods: {
    deleteJob() {
      if (confirm('Voulez-vous vraiment supprimer cet emploi ?')) {
        fetch('http://localhost:3000/jobs/' + this.job.id, {
          method: 'DELETE'
        })
          .then(() => {
            this.$emit('delete', this.job.id)
          })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>
