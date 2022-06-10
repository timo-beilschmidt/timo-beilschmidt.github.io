<template>
    <footer class="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
        <div class="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
            <div class="row">
                <div class="col-lg-5 col-xl-7 col-sm-6">
                    <div class="footer-widget">
                        <div class="logo">
                            <n-link to="/">
                                <img src="/img/logo/logo-white.svg" alt="Logo von Kfz Gutachten Karakale in weiß">
                            </n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-2 col-sm-6 mt_mobile--40">
                    <div class="footer-widget menu--about">
                        <h2 class="widgettitle">Über Uns</h2>
                        <div class="footer-menu">
                            <ul class="ft-menu-list bk-hover">
                                <li>
                                    <n-link to="/about">Über Uns</n-link>
                                </li>
                                <li>
                                    <n-link to="/leistungen">Leistungen</n-link>
                                </li>
                                <li>
                                    <n-link to="/kontakt">Kontakt</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40">
                    <div class="footer-widget menu--contact">
                        <h2 class="widgettitle">Kontakt</h2>
                        <div class="footer-address bk-hover mb--20">
                            <p>Siemensstr. 1, 53121 Bonn</p>
                            <p>
                                <a href="mailto:info@ing-karakale.de">info@ing-karakale.de</a>
                            </p>
                            <p>
                                <a href="tel::022896699180">Telefon: 0228-96699180</a>
                            </p>
                            <p>
                                <a href="tel::015737154376">Mobil: 01573-7154376</a>
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
                            <ShareNetwork
                                network="WhatsApp"
                                url="https://news.vuejs.org/issues/180"
                                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                            ><i class="fa fa-share-alt"></i></ShareNetwork>
                        </div>
                        <br/>
                        <h2 class="widgettitle hidden">Wenn es mal kracht oder die Plakette fehlt...</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Copyright Area -->
        <div class="copyright ptb--50">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="copyright-left text-left">
                        <ul class="bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover">
                            <li>
                                <n-link to="/galerie">Galerie</n-link>
                            </li>
                            <li>
                                <n-link to="/kontakt">Kontakt</n-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="copyright-right text-center text-md-right">
                        <p>&copy; 2022 <b>Kfz Gutachten Karakale</b></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->

        <VueCookieAcceptDecline
            :debug="false"
            :disableDecline="false"
            :showPostponeButton="false"
            @clicked-accept="cookieClickedAccept"
            @clicked-decline="cookieClickedDecline"
            @clicked-postpone="cookieClickedPostpone"
            @removed-cookie="cookieRemovedCookie"
            @status="cookieStatus"
            elementId="myCookiePanel"
            position="bottom-left"
            ref="myCookiePanel"
            transitionName="slideFromBottom"
            type="floating"
            >
            <!-- Optional -->
            <template #postponeContent>&times;</template>

            <!-- Optional -->
            <template #message>
                <b-card-header header-tag="header">Cookies!</b-card-header>
                <b-card-body>
                    <p>
                        We use cookies to ensure you get the best experience on our website.
                        <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
                    </p>
                    
                    
                </b-card-body>
            </template>

            <!-- Optional -->
            <template #declineContent><b-button class="btn-pimary">Ablehnen</b-button></template>

            <!-- Optional -->
            <template #acceptContent><b-button>Verstanden!</b-button></template>
        </VueCookieAcceptDecline>
    </footer>
</template>

<script>
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
export default {
    components: {
        VueCookieAcceptDecline,
    },
    data() {
        return {
            status: null,
        };
    },
    methods: {
        cookieStatus (status) {
            this.status = status;
        },
        cookieClickedAccept () {
            this.status = 'accept';
        },
        cookieClickedDecline () {
            this.status = 'decline';
        },
        cookieClickedPostpone () {
            this.status = 'postpone';
        },
        cookieRemovedCookie () {
            this.status = null;
            this.$refs.myCookiePanel.init();
        },
        removeCookie () {
            this.$refs.myCookiePanel.removeCookie();
        },
    }
}
</script>