<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal_container">
            <h1 class="title">{{ card.title }}</h1>
            <div class="modal_info">
                <img
                    width="280"
                    height="160"
                    class="image"
                    :src="require(`../../assets/img/${card.id}.png`)"
                    alt="img"
                />
                <h4 class="description">
                    {{ card.description }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-modal",
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        card: {
            type: Object,
            required: true,
        },
    },
    methods: {
        hideModal() {
            this.$emit("ModalShow", false);
        },
    },
};
</script>

<style scoped>
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    z-index: 30;
}

.modal_container {
    width: 50%;
    margin: 0 auto;
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    background: url(../../assets/img/back-ground.jpeg) no-repeat;
    background-size: cover;
}

.modal_info {
    align-items: center;
    margin-top: 20px;
}

.title {
    margin-top: 30px;
}

.description {
    margin-top: 40px;
    max-width: 300px;
}

.image {
    border-radius: 10px;
}

@media (max-width: 910px) {
    .image {
        display: none;
    }
}
</style>
