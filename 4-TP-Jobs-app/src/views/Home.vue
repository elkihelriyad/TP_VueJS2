<template>
  <div>
    <div class="page-header">
      <h2>Offres d'emploi disponibles</h2>
      <router-link to="/add" class="btn btn-primary">+ Ajouter un emploi</router-link>
    </div>

    <FilterNav :current="currentFilter" @filter-change="currentFilter = $event" />

    <div v-if="filteredJobs.length > 0">
      <JobDetail
        v-for="job in filteredJobs"
        :key="job.id"
        :job="job"
        @delete="handleDelete"
      />
    </div>
    <p v-else class="empty-message">Aucun emploi trouvé pour cette catégorie.</p>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import JobDetail from '../components/JobDetail.vue'

export default {
  name: 'Home',
  components: {
    FilterNav,
    JobDetail
  },
  data() {
    return {
      jobs: [],
      currentFilter: 'all'
    }
  },
  computed: {
    filteredJobs() {
      if (this.currentFilter === 'all') {
        return this.jobs
      }
      return this.jobs.filter(job => job.type === this.currentFilter)
    }
  },
  methods: {
    fetchJobs() {
      fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => {
          this.jobs = data
        })
        .catch(err => console.log(err))
    },
    handleDelete(id) {
      this.jobs = this.jobs.filter(job => job.id !== id)
    }
  },
  mounted() {
    this.fetchJobs()
  }
}
</script>
