<template>
    <footer>
        <div class="footer_container">
            <nav class="footer_menu">
                <li>
                    <h5>Каталог</h5>
                </li>
                <li>
                    <h5>Доставка</h5>
                </li>
                <li>
                    <h5>Оплата</h5>
                </li>
                <li>
                    <h5>Контакты</h5>
                </li>
                <li>
                    <h5>О компании</h5>
                </li>
            </nav>

            <div class="phone">
                <h5 class="info">
                    <a href="tel:+7 (812) 555-55-55"
                        ><fa class="icon" icon="fa-phone" /> +7(812)
                        555-55-55</a
                    >
                </h5>
            </div>

            <div class="location">
                <h5 class="info">
                    <fa class="icon" icon="fa-location-dot" />
                    г.Санкт-Петербург, ул. Ефимова, 3
                </h5>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
h5 {
    color: #555555;
}

a {
    text-decoration: none;
    color: #555555;
}

footer {
    margin-top: auto;
    background-color: #eceaea;
}
.footer_container {
    height: 96px;
    display: flex;
    max-width: 1223px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
}

.footer_menu {
    display: flex;
}

li:not(:first-child) {
    margin-left: 48px;
}
.icon {
    margin-right: 9px;
}

@media (max-width: 1223px) {
    .footer_container {
        max-width: 910px;
    }
}

@media (max-width: 910px) {
    .footer_container {
        display: none;
    }
}
</style>
