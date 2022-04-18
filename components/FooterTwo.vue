<template>
    <footer class="page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5">
        <!-- Start Footer Top Area -->
        <div class="bk-footer-inner pt--150 pb--30 pt_sm--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget text-var--2">
                            <div class="logo">
                                <n-link to="">
                                    <img src="/img/logo/logo-white.svg" alt="brand logo">
                                </n-link>
                            </div>
                            <div class="footer-inner">
                                <p>Brook is a multi-purpose WordPress theme for big and small-sized businesses. Enjoy the theme's original design, functional features & responsive layouts.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-6 mt_mobile--40">
                        <div class="footer-widget text-var--2 menu--about">
                            <h2 class="widgettitle">Über Uns</h2>
                            <div class="footer-menu">
                                <ul class="ft-menu-list bk-hover">
                                    <li>
                                        <n-link to="/about-us-01">Über Uns</n-link>
                                    </li>
                                    <li>
                                        <n-link to="/contact-us-modern">Kontakt</n-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 mt_md--40 mt_sm--40">
                        <div class="footer-widget text-var--2 menu--contact">
                            <h2 class="widgettitle">Kontakt</h2>
                            <div class="footer-address">
                                <div class="bk-hover">
                                    <p>Siemensstr. 1, 53121 Bonn</p>
                                    <p>
                                        <a href="mailto:info@kfzguachten-karakale.de">info@kfzguachten-karakale.de</a>
                                    </p>
                                    <p>
                                        <a href="tel:015737154376">01573-7154376</a>
                                    </p>
                                </div>
                                <div class="social-share social--transparent text-white">
                                    <a href="https://www.facebook.com/CarKarakale/" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/gutachten.karakale/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://wa.me/4915737154376" target="_blank">
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 mt_md--40 mt_sm--40">
                        <div class="footer-widget text-var--2 menu--instagram">
                            <h2 class="widgettitle">Instagram</h2>
                            <div class="ft-instagram-list">
                                <div class="instagram-grid-wrap">
                                    <div class="item-grid grid-style--1" v-for="instagram in instagramPosts" :key="instagram.id">
                                        <div class="thumb">
                                            <n-link to="">
                                                <img :src="instagram.image" alt="instagram image">
                                            </n-link>
                                            <div class="item-info">
                                                <div class="inner">
                                                    <n-link to="">
                                                        <i class="fas fa-heart"></i>
                                                        {{ instagram.like }}
                                                    </n-link>
                                                    <n-link to="">
                                                        <i class="fas fa-comment-dots"></i>
                                                        {{ instagram.comment }}
                                                    </n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Footer Top Area -->

        <!-- Start Copyright Area -->
        <div class="copyright ptb--50 text-var-2">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="copyright-left text-md-left text-center">
                            <ul class="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                <li>
                                    <n-link to="/blog-creative">Our Blogs</n-link>
                                </li>
                                <li>
                                    <n-link to="/portfolio/portfolio-grid-boxed">Latest Projects</n-link>
                                </li>
                                <li>
                                    <n-link to="/contact-us-modern">Contact Us</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="copyright-right text-md-right text-center">
                            <p>&copy; 2022 <b>Kfz Gutachten Karakale</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                instagramPosts: [
                    {
                        "id": 1,
                        "image": "/img/instagram/instagram-1.jpg",
                        "like": "1K",
                        "comment": "8"
                    },
                    {
                        "id": 2,
                        "image": "/img/instagram/instagram-2.jpg",
                        "like": "6K",
                        "comment": "9"
                    },
                    {
                        "id": 3,
                        "image": "/img/instagram/instagram-3.jpg",
                        "like": "3K",
                        "comment": "4"
                    },
                    {
                        "id": 4,
                        "image": "/img/instagram/instagram-4.jpg",
                        "like": "1K",
                        "comment": "3"
                    },
                    {
                        "id": 5,
                        "image": "/img/instagram/instagram-5.jpg",
                        "like": "2K",
                        "comment": "7"
                    },
                    {
                        "id": 6,
                        "image": "/img/instagram/instagram-6.jpg",
                        "like": "1K",
                        "comment": "8"
                    }
                ]
            }
        }
    };
</script>