<template>
  <form @submit.prevent="soumettre">
    <input ref="titreInput" v-model="newBook.title" placeholder="Titre" />
    <input v-model="newBook.author" placeholder="Auteur" />
    <input v-model.number="newBook.year" type="number" placeholder="Année" />
    <label><input type="checkbox" v-model="newBook.isFav" /> Favori</label>
    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: 'AddBookForm',
  emits: ['add-book'],
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        year: null,
        genre: '',
        isFav: false
      }
    }
  },
  methods: {
    soumettre() {
      if (!this.newBook.title.trim()) {
        return
      }
      this.$emit('add-book', { ...this.newBook })
      this.newBook = {
        title: '',
        author: '',
        year: null,
        genre: '',
        isFav: false
      }
    }
  },
  mounted() {
    this.$refs.titreInput.focus()
  }
}
</script>
