<template>
    <header>
        <div class="header_container">
            <nav class="nav_burger">
                <div
                    class="burger_icon"
                    @click="burgerClick"
                    :class="{ burger_active: burgerActive }"
                >
                    <fa icon="fa-bars" />
                </div>
                <div class="burger_container" v-if="burgerActive">
                    <li class="burger_item">
                        <h1>Каталог</h1>
                    </li>
                    <li class="burger_item">
                        <h1>Доставка</h1>
                    </li>
                    <li class="burger_item">
                        <h1>Оплата</h1>
                    </li>
                    <li class="burger_item">
                        <h1>Контакты</h1>
                    </li>
                    <li class="burger_item">
                        <h1>О Компании</h1>
                    </li>
                </div>
            </nav>

            <nav class="nav_menu">
                <li class="menu_item">
                    <h5>Каталог</h5>
                </li>
                <li class="menu_item">
                    <h5>Доставка</h5>
                </li>
                <li class="menu_item">
                    <h5>Оплата</h5>
                </li>
                <li class="menu_item">
                    <h5>Контакты</h5>
                </li>
                <li class="menu_item">
                    <h5>О компании</h5>
                </li>
            </nav>
            <div class="search_container">
                <input
                    type="text"
                    class="search"
                    placeholder="Поиск по названию картинки"
                    v-model="searchQuery"
                />
                <my-button class="search_btn" @click="searchQueryInput"
                    >Найти</my-button
                >
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            searchQuery: "",
            burgerActive: false,
        };
    },

    methods: {
        burgerClick() {
            this.burgerActive = !this.burgerActive;
        }

    },

    computed: {
        searchQueryInput() {
            const sortedCards = this.cards.filter((card) =>
                card.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
            this.$emit("sortedCards", sortedCards);
        },
    },
};
</script>

<style scoped>
.nav_burger {
    display: flex;
}

.burger_container {
    position: absolute;
    top: 96px;
    left: 0;
    width: 100%;
    height: 400px;
    display: flex;
    height: 20;
    background-image: -webkit-linear-gradient(
        top,
        rgb(0, 0, 0),
        rgba(18, 245, 215, 0)
    );
    flex-direction: column;
    padding: 20px;
}
h1 {
    color: white;
}

.burger_item {
    margin-top: 20px;
}

.burger_icon {
    margin-left: 20px;
    font-size: 2.5rem;
}
.nav_burger {
    display: none;
}
header {
    border-bottom: 1px solid #e1e1e1;
}

.header_container {
    height: 96px;
    max-width: 1223px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav_menu {
    display: flex;
}

.menu_item:not(:first-child) {
    margin-left: 48px;
}

input {
    padding: 13px 16px;
    width: 294px;
    border: 1px solid #e1e1e1;
}

input::placeholder {
    font-family: Merriweather;
    font-size: 16px;
    font-weight: 400;
    color: #9f9f9f;
}

.search_btn {
    font-family: "Merriweather";
    padding: 13px 36px;
    background-color: #403432;
    border: none;
    color: white;

    font-weight: 700;
    font-size: 14px;
}

@media (max-width: 1223px) {
    .header_container {
        max-width: 910px;
    }
}

@media (max-width: 910px) {
    .header_container {
        max-width: 600px;
    }
    .nav_menu {
        display: none;
    }

    .nav_burger {
        display: flex;
    }
}

@media (max-width: 500px) {
    .search_container {
        display: none;
    }

    .burger_icon {
        font-size: 4rem;
    }
}
</style>
