<template>
    <div id="app">
        <div class="wrapper">
            <my-header @sortedCards="getSearch" :cards="$store.state.cards" />
            <card-list :cards="sortedCards" />
            <my-footer /> 
        </div>
    </div>
</template>

<script>

export default {


    data() {
        return {
            sortedCards: [],
            searchQuery: "",
        };
    },

    methods: {
        getSearch(cards) {
            this.sortedCards = cards;
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");
    font-family: "Alegreya Sans SC", sans-serif;
}

li {
    list-style: none;
}

h1 {
    font-family: "Merriweather";
    font-size: 24px;
    font-weight: 700;
    color: #343030;
}

h2 {
    font-family: "Merriweather";
    font-size: 18px;
    font-weight: 400;
    color: #343030;
}

h3 {
    font-family: "Merriweather";
    font-size: 16px;
    font-weight: 700;
    color: #343030;
}

h4 {
    font-family: "Merriweather";
    font-size: 14px;
    font-weight: 700;
    color: #343030;
}

h5 {
    font-family: "Merriweather";
    font-size: 14px;
    font-weight: 400;
    color: #343030;
}

h6 {
    font-family: "Merriweather";
    font-size: 14px;
    font-weight: 300;
    color: #a0a0a0;
}

.wrapper {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

</style>
