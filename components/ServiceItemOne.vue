<template>
    <div class="service service--1 text-center mt--30">
        <div class="icons">
            <i
                v-if="service.icon" 
                key="ionic"
                :class="service.icon"
            ></i>
            <img 
                v-else
                key="static"
                width="70"
                height="90"
                :src="'/img/icons/' + service.img" 
                :alt="service.alt"
            >
        </div>
        <div class="content">
            <h4>{{ service.heading }}</h4>
            <p v-html="service.desc"></p>
            <n-link :to="getLink(service)" class="service-btn">
                <span>Weitere Details</span> 
                <i class="fa fa-arrow-right"></i>
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service'],
        methods: {
            getLink(service) {
                return service.link || "/leistungen";
            },
        },
    };
</script>