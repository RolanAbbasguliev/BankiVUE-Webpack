<template>
    <button @click="toggleBtn" :class="{ active: btnIsActive }">
        <slot>
            <h4 v-if="btnIsActive">
                <fa class="icon" icon="fa-check" />В корзине
            </h4>
            <h4 v-else>Купить</h4>
        </slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
    props: {
        btnIsActive: {
            type: Boolean,
            required: false,
        },
    },
    // data() {
    //     return {
    //         isActive: false,
    //     };
    // },

    methods: {
        toggleBtn() {
            this.$emit("toggle", this.btnIsActive);
        },
    },
};
</script>

<style scoped>
button {
    width: 120px;
    white-space: nowrap;

    background-color: #382e2b;
    border: none;
    color: white;
    align-items: center;
}

h4 {
    padding: 14px 10px;
    color: white;
}

.icon {
    margin-right: 8px;
}

button:hover {
    background-color: #776763;
}

.active {
    background-color: #5b3a32;
}

</style>
