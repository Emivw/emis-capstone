<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                                <li>Sunday: 8:00 AM - 12:00 PM</li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="phone-no">
                                <!-- <a href="tel:+12 34 56 78 90"><i class="fa fa-mobile" aria-hidden="true"></i>Call +12 34 56 78 90</a> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">

                        <h4>About us</h4>
                        <p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard
                            der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war
                            der Standard der Branche </p>

                    </div>

                    <div class="col-md-4">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>Lorem Ipsum 132 xyz Lorem Ipsum</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">info@test.com</a></li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">12 34 56 78
                                    90</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <p class="copyright text-uppercase">Copyright &copy; {{new Date().getFullYear()}}
                        </p>
                    </div>
                    <div class="col-sm-7">
                        <ul>
                            <li>
                                <router-link to="/" class="btn btn-outine-primary btn-dark"><i class="fa fa-house"
                                        aria-hidden="true"></i> Home</router-link>
                            </li>
                            <li>
                                <router-link to="/about" class="btn btn-outine-primary btn-dark"><i
                                        class="fa fa-address-book" aria-hidden="true"></i> About</router-link>
                            </li>
                            <li>
                                <router-link to="/products" class="btn btn-outine-primary  btn-dark"><i
                                        class="fa fa-briefcase" aria-hidden="true"></i> Products</router-link>
                            </li>
                            <li>                                <router-link to="/contact" class="btn btn-outine-primary  btn-dark"><i
                                        class="fa fa-envelope" aria-hidden="true"></i> Contact Us</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    color: #fff;
}

ul {
    padding: 0px;
}

ol,
ul {
    margin-bottom: 0px;
}

.social-icon {
    padding: 0;
    margin-bottom: 0px;
    float: right;
}

.social-icon li {
    list-style: none;
    display: inline-block;
}

.social-icon li i {
    font-size: 14px;
    color: #262725;
    border: solid 2px #ffffff;
    height: 31px;
    width: 31px;
    text-align: center;
    vertical-align: middle;
    border-radius: 100px;
    line-height: 27px;
    margin-right: 15px;
    transition: 1s;
    background: #fff;
}

.social-icon li i:hover {
    border: solid 2px #262725;
    color: #ffffff;
    background: #262725;
}

.phone-no i {
    position: relative;
    margin-right: 14px;
    font-size: 43px;
    top: 5px;
}

.phone-no {
    margin-top: -22px;
    text-align: right;
}

.footer-day-time {
    padding-bottom: 30px;
    border-bottom: 2px solid #7a6f6f;
    padding-top: 14px;
    margin-bottom: 55px;
}

.footer-day-time ul li {
    display: inline;
    margin-right: 20px;
}

.footer-day-time ul li:last-child {
    margin-right: 0px;
}

.phone-no a {
    color: #fff;
    font-family: PlayfairDisplay-Black;
    font-size: 34px;
    font-weight: bold;
}

.footer-top {
    background: #2f2f2f;
    padding: 50px 0 50px;
}

.footer-top h4 {
    font-size: 19px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.footer-top p {
    font-size: 13px;
    line-height: 2;
}

footer p {
    margin-bottom: 0;
}

.footer-logo {
    display: block;
    margin-bottom: 32px;
}

.address1 li {
    list-style: none;
    position: relative;
    padding: 0px 0 14px 34px;
    line-height: 26px;
}

ul.address1 span {
    position: absolute;
    width: 40px;
    max-width: 40px;
    left: 0;
}

.address1 li a {
    color: #fff;
    text-decoration: none;
}

ul.address1 i {
    width: 20px;
    position: absolute;
    left: 0px;
    text-align: center;
    font-size: 28px;
    top: 0;
}

ul.address1 i.fa-envelope {
    font-size: 18px;
    top: 4px;
}

footer ul.social-icon {
    float: left;
}

footer .social-icon li i:hover {
    background: #4b8800;
    border-color: #4b8800;
}

.footer-bottom {
    background: #f5a608;
    padding: 10px 0px;
}

.footer-bottom ul li {
    display: inline;
    margin-right: 20px;
    font-size: 18px;
}

.footer-bottom ul li a {
    color: #fff;
}

.footer-bottom ul {
    float: right;
}

.footer-bottom ul li:last-child {
    margin-right: 0;
}

.copyright {
    font-size: 18px;
}
</style>