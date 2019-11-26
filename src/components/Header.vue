<template>
    <div>
        <div class="nav-container">
            <div>
                <div class="bar bar--sm visible-xs">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-9 col-sm-10 ">
                                <router-link tag="a" to="/">
                                    <img class="logo" alt="logo" src="../assets/logo.png">
                                </router-link>
                            </div>
                            <div class="col-xs-3 col-sm-2 text-right">
                                <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm"> 
                                    <i class="icon icon--sm stack-interface stack-menu"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="menu1" class="bar bar-1 hidden-xs">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 hidden-xs">
                                <div class="bar__module">
                                    <router-link tag="a" to="/" >
                                        <img class="logo" alt="logo" src="../assets/logo.png">
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-sm-12 text-right text-left-xs text-left-sm col-md-9">
                                <div class="bar__module">
                                    <ul class="menu-horizontal text-left">
                                        <router-link tag="li" to="/">
                                            <a href="#" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                                HOME
                                            </a>
                                        </router-link>
                                        <router-link tag="li" to="/about-us">
                                            <a href="#" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                                 ABOUT US
                                            </a>
                                        </router-link>
                                        <li class="dropdown" id="#dropdown"> 
                                            <span class="dropdown__trigger">
                                                OUR SOLUTIONS
                                            </span>
                                            <div class="dropdown__container">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="dropdown__content col-md-2">
                                                            <ul class="menu-vertical" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                                                <router-link tag="li" to="/campus-clubs">
                                                                    <a href="#">
                                                                        Campus Clubs
                                                                    </a>
                                                                </router-link>
                                                                <router-link tag="li" to="/events">
                                                                    <a href="#">
                                                                        Awareness Events
                                                                    </a>
                                                                </router-link>
                                                                <router-link tag="li" to="/be-a-voice">
                                                                    <a href="#">
                                                                        Be A Voice
                                                                    </a>
                                                                </router-link>
                                                                <li>
                                                                    <a href="https://screening.mentalhealthamerica.net/screening-tools">
                                                                        Get Screened
                                                                    </a>
                                                                </li>
                                                                    
                                                                </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <router-link tag="li" to="/fitila" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                            <a href="#">
                                                 JOIN FITILA
                                            </a>
                                        </router-link>
                                        <router-link tag="li" to="/donate" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                            <a href="#">
                                                DONATE
                                            </a>
                                        </router-link>
                                    </ul>
                                </div>
                                <div class="bar__module">
                                    <!-- <router-link tag="a" class="btn btn--xs btn--primary type--uppercase" to="/coming-soon"  data-toggle-class="#menu1;hidden-xs hidden-sm"> 
                                    <span class="btn__text">
                                        SIGNUP/LOGIN
                                    </span> 
                                    </router-link> -->
                                    <a href="https://fitila123456.netlify.com/" target="_blank" class="btn btn--xs btn--primary type--uppercase" data-toggle-class="#menu1;hidden-xs hidden-sm"> 
                                    <span class="btn__text">
                                        SIGNUP/LOGIN
                                    </span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            date: ""
        }
    },
    mounted() {
        let date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.date = date.toLocaleDateString('en', options)
    }
}
</script>