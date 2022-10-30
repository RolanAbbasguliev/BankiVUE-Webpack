<template>
    <div class="container">
        <my-modal v-show="modalVisible" :card="card"></my-modal>
        <div class="card" :class="card.status === 'sold' ? 'soldCard' : ''">
            <div class="top_info" @click="showModal">
                <img
                    width="280"
                    height="160"
                    :src="require(`../assets/img/${card.id}.png`)"
                    alt="img"
                />
                <div class="card_info">
                    <h2 class="titel">{{ card.title }}</h2>
                    <h2 class="titel">{{ card.author }}</h2>
                </div>
            </div>

            <div class="card_price">
                <div class="price_info">
                    <h6 class="prev_price" v-if="card.prevPrice">
                        {{ card.prevPrice.toLocaleString() }} $
                    </h6>
                    <h3 class="price" v-if="card.price > 0">
                        {{ card.price.toLocaleString() }} $
                    </h3>
                    <h3 v-if="card.status === 'sold'">Продана на аукционе</h3>
                </div>
                <my-button
                    v-if="card.status === 'active'"
                    @toggle="btnStat"
                    @click="saveCard(card)"
                    :btnIsActive="btnIsActive"
                ></my-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            modalVisible: false,
            btnIsActive: false,
        };
    },

    mounted() {
        if (localStorage.storeId) {
            if (localStorage.storeId.includes(this.card.id.toString())) {
                this.btnIsActive = true;
            }
        }
    },

    methods: {
        showModal() {
            console.log(this.card);
            this.modalVisible = true;
        },

        btnStat(btn) {
            this.btnIsActive = btn ? false : true;
        },

        async saveCard(card) {
            //add Id

            console.log("ACTIVE", this.btnIsActive);
            if (this.btnIsActive) {
                if (localStorage.storeId) {
                    let id = localStorage.storeId + " " + card.id.toString();
                    localStorage.storeId = id;
                    this.cardInStore = true;
                } else {
                    this.cardInStore = true;
                    localStorage.storeId = card.id;
                }
            } else {
                //delete Id
                if (localStorage.storeId) {
                    this.cardInStore = false;
                    let id = localStorage.storeId;
                    id = id.replace(card.id.toString(), "");
                    localStorage.storeId = id;
                }
            }
        },
    },
};
</script>

<style scoped>
.card {
    height: 328px;
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
}

.card_info {
    padding: 24px 36px;
}

.soldCard {
    opacity: 0.5;
}

.card_price {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
}

.price_info {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
}

.prev_price {
    text-decoration: line-through;
}
</style>
