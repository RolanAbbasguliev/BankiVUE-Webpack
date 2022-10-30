<template>
    <main>
        <h1>Картины эпохи Возрождения</h1>
        <div class="main_container">
            <card-item v-for="card in cards" :card="card" :key="card.id" />
        </div>
    </main>
</template>

<script>
export default {


    props: {
        cards: {
            type: Array,
            required: true,
        },
    },

    // data() {
    //     return {
    //         storeId: "",
    //     };
    // },

    // mounted() {
    //     if (localStorage.storeId) {
    //         this.storeId = localStorage.storeId;
    //     }
    // },
};
</script>

<style>
main {
    display: flex;
    flex-direction: column;
    max-width: 1230px;
    margin: 0 auto;
    margin-top: 45px;
}

.main_container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 39px;
    row-gap: 30px;
    justify-content: center;
    column-gap: 32px;
}

@media (max-width: 1223px) {
    h1 {
        text-align: center;
    }
}

</style>
