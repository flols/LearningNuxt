<script setup>
definePageMeta({
    layout:"custom",
});
const route = useRoute();
//  Fetch single Movie
const { data: movie, error } = await useFetch(
    `/api/movies/${route.params.id}`
);
console.log(movie);

</script>


<template>
    <div>
        <MovieDetail
            :title="movie.title"
            :date="movie.release_date"
            :poster="movie.poster_path"
            :revenue="movie.revenue"
            :overview="movie.overview"
        />
    </div>
</template>


<style scoped>

</style>