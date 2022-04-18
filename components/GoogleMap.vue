<template>
    <div class="google-map-area" id="support">
        <GmapMap
            :center="position"
            :zoom="15"
            map-type-id="terrain"
        >
            <GmapMarker
                :position="position"
                :clickable="true"
                :draggable="true"
                @click="center=position"
            />
        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: 'GoogleMap',
        data() {
            return {
                position: { lat:50.73707527029731, lng:7.072458526984338 },
            };
        }
    }
</script>

<style lang="scss" scoped>
    .vue-map-container {
        height: 500px;
        // res
        @media #{$sm-layout}{
            height: 350px;
        }
    }
</style>
