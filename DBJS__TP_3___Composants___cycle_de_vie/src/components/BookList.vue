<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <template #actions>
        <span style="margin-left: 8px; color: #666; font-size: 13px;">(Disponible)</span>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: {
    BookCard
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>
