<template>
  <div>
    <SearchBar @search-movie="searchMovie"
    :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50"
    >
    <div v-for="n in 8">
      <MovieCard 
      :title="title" 
      :date="date" 
      :poster="poster" 
      :movieid="movieid"
    />
    </div>
  </div>

    <!-- <h1>Films Populaires</h1>
    <div v-if="pending">Chargement...</div>
    <div v-if="error">Une erreur est survenue.</div>
    <ul v-else>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';
import { fetchMovies } from '~/services/themoviedb';

const { data: movies, pending, error } = useAsyncData('movies', fetchMovies);

//Search Movie
const searchError = ref(false);
const searchMovie = (searchInput) => {
  // console.log("Search Text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
  }
  if (searchInput !== "") {
    searchError.value = false;
  }
};

// Fetch Movie
const movieid = ref(123);
const title = ref("Dune 2");
const date = ref("01-01-2000");
const poster = ref("https://www.themoviedb.org/t/p/w1280/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg");


</script>
