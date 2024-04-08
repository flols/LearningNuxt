<script setup>
definePageMeta({
    layout:"custom",
});
// Fetch Movie
const title = ref("Dune 2");
const date = ref("01-01-2000");
const poster = ref("https://www.themoviedb.org/t/p/w1280/iRNbRAIGQQr5diGnjpwJFm0dgt4.jpg");
const revenue = ref(654654654);
const overview = ref(
    "Le voyage mythique de Paul Atreides qui s'allie à Chani et aux Fremen dans sa quête de vengeance envers les conspirateurs qui ont anéanti sa famille. Devant choisir entre l'amour de sa vie et le destin de l'univers, il fera tout pour éviter un terrible futur que lui seul peut prédire."
    );

</script>


<template>
    <div>
        <MovieDetail
            :title="title"
            :date="date"
            :poster="poster"
            :revenue="revenue"
            :overview="overview"
        />
    </div>
</template>


<style scoped>

</style>