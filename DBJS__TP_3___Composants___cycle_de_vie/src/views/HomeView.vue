<template>
  <h1>Catalogue de livres</h1>
  <p class="loading" v-show="store.loading">Chargement du catalogue...</p>

  <!-- TODO 2 : branchez add-book sur addBook -->
  <AddBookForm @add-book="addBook" />

  <!-- TODO 2 : passez store.books en props, et branchez toggle-fav / delete-book -->
  <BookList
    :books="store.books"
    @toggle-fav="toggleFavori"
    @delete-book="deleteBook"
  />
</template>

<script>
import AddBookForm from '../components/AddBookForm.vue'
import BookList from '../components/BookList.vue'
import { store } from '../store/books.js'

export default {
  name: 'HomeView',
  components: { AddBookForm, BookList },
  data() {
    return { store }
  },
  methods: {
    // TODO 2 : génère un id, pousse le livre dans store.books
    addBook(bookData) {
      const id = this.store.books.length > 0
        ? Math.max(...this.store.books.map(b => b.id)) + 1
        : 1
      this.store.books.push({ id, ...bookData })
    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      store.books = store.books.filter(b => b.id !== book.id)
    }
  }
}
</script>
