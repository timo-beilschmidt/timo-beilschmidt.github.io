<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1">
                <n-link to="/">
                    <span>Home</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/services-modern">
                    <span>Leistungen</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/portfolio/portfolio-grid-wide">
                    <span>Galerie</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/about-us-01">
                    <span>Über Uns</span>
                </n-link>
            </li>

            <li class="lavel-1">
                <n-link to="/contact-us-modern">
                    <span>Kontakt</span>
                </n-link>
            </li><li class="lavel-1">
                <n-link to="/">
                    <span>Datenschutz</span>
                </n-link>
            </li><li class="lavel-1">
                <n-link to="/">
                    <span>Impressum</span>
                </n-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>