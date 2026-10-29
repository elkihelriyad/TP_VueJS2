<template>
  <main>
    <h1>Catalogue de livres</h1>
    <p class="loading" v-show="loading">Chargement du catalogue...</p>

    <AddBookForm @add-book="addBook" />

    <BookList
      :books="books"
      @toggle-fav="toggleFavori"
      @delete-book="deleteBook"
    />
  </main>
</template>

<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

const initialBooks = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Génie logiciel', isFav: true },
  { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', year: 2009, genre: 'Algorithmique', isFav: false },
  { id: 3, title: 'Design Patterns', author: 'Gamma, Helm, Johnson, Vlissides', year: 1994, genre: 'Génie logiciel', isFav: true },
  { id: 4, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', year: 2010, genre: 'Réseaux', isFav: false }
]

export default {
  name: 'App',
  components: {
    AddBookForm,
    BookList
  },
  data() {
    return {
      books: [],
      loading: true
    }
  },
  methods: {
    addBook(newBook) {
      const id = this.books.length > 0
        ? Math.max(...this.books.map(b => b.id)) + 1
        : 1
      this.books.push({ id, ...newBook })
    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    }
  },
  mounted() {
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  }
}
</script>
