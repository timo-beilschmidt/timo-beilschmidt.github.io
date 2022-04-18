<template>
    <div class="home-creative-agency" :style="{ backgroundImage: `url('/img/slider/slide1.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-content">
                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <!-- <div class="video-btn-2">
                                        <div class="play__btn">
                                            <div class="icon-gradient color-pink">
                                                <div class="video-icon"></div>
                                            </div>
                                        </div>
                                    </div> -->
                                </template>
                            </silent-box>
                        </client-only>
                        <h1 class="hero-title"></h1>
                        <!-- <img src="/img/slider/creative-agency-wave.png" alt="wave icon"> -->
                        <h6></h6>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="hero-mail">
            <span>info@kfzguachten-karakale.de</span>
        </div> -->
        <div class="hero-social">
            <ul class="social-icon icon-border-rounded icon-size-medium social-vertical text-center">
                <li class="facebook">
                    <a href="https://www.facebook.com/CarKarakale/" class="link" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li class="instagram">
                    <a href="https://www.instagram.com/gutachten.karakale/" class="link" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="mail">
                    <a href="mailto: info@kfzgutachten-karakale.de" class="link" aria-label="E-Mail">
                        <i class="fa fa-envelope"></i>
                    </a>
                </li>
                <li class="whatsapp">
                    <a href="https://wa.me/4915737154376" class="link" aria-label="Whatsapp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                videos: [
                    {
                        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
                        thumbnail: ""
                    }
                ],
            }
        }
    };
</script>

<style lang="scss">
    .home-creative-agency {
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex; 
        align-items: center;
        text-align: center;
        // res
        @media #{$sm-layout}{
            height: 600px;
        }
        .hero-title {
            font-size: 120px;
            font-weight: 700;
            color: $white;
            font-family: $secondary-font;
            span {
                font-family: $playfair-font;
                font-style: italic;
            }
            // res
            @media #{$lg-layout}{
                font-size: 80px;
            }
            @media #{$md-layout}{
                font-size: 70px;
            }
            @media #{$sm-layout}{
                font-size: 55px;
            }
            @media #{$large-mobile}{
                font-size: 40px;
            }
        }
        h6 {
            color: $white;
            font-size: 18px;
            font-weight: 600;
            max-width: 570px;
            line-height: 1.6;
            margin: 30px auto 0;
            font-family: $secondary-font !important;
        }
        .hero-mail {
            position: absolute;
            left: 0;
            // res
            @media #{$sm-layout}{
                left: -60px;
            }
            @media #{$small-mobile}{
                display: none;
            }
            span {
                color: $white;
                display: block;
                font-size: 15px;
                font-weight: 500;
                font-family: $secondary-font;
                transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
        }
        .hero-social {
            position: absolute;
            right: 0;
            // res
            @media #{$small-mobile}{
                display: none;
            }
        }
    }
</style>