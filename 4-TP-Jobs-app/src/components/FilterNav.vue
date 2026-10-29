<template>
  <nav class="filter-nav">
    <button
      class="filter-btn"
      :class="{ active: current === 'all' }"
      @click="setFilter('all')"
    >
      Tous
    </button>
    <button
      class="filter-btn"
      :class="{ active: current === 'CDI' }"
      @click="setFilter('CDI')"
    >
      CDI
    </button>
    <button
      class="filter-btn"
      :class="{ active: current === 'Stage' }"
      @click="setFilter('Stage')"
    >
      Stage
    </button>
    <button
      class="filter-btn"
      :class="{ active: current === 'CDD' }"
      @click="setFilter('CDD')"
    >
      CDD
    </button>
  </nav>
</template>

<script>
export default {
  name: 'FilterNav',
  props: {
    current: {
      type: String,
      default: 'all'
    }
  },
  emits: ['filter-change'],
  methods: {
    setFilter(filter) {
      this.$emit('filter-change', filter)
    }
  }
}
</script>
