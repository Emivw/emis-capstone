<template>
    <nav class="fixed-top d-flex justify-content-evenly text-white">
        <button class="btn btn-outline-warning btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"><i class="fa fa-hamburger"></i> Navigation</button>
        <button class="btn btn-outline-warning btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"> <i class="fa fa-shopping-cart"></i> cart</button>

    </nav>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" data-bs-backdrop="false"
            aria-labelledby="offcanvasLeftLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLeftLabel">Offcanvas left</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
<ul class="dflex flex-column">
<li>
<router-link to="/" class="btn btn-outine-primary btn-dark"><i class="fa fa-house" aria-hidden="true"></i> Home</router-link>
</li>
<li>
    <router-link to="/about" class="btn btn-outine-primary btn-dark"><i class="fa fa-address-book" aria-hidden="true"></i> About</router-link>
</li>
<li>
    <router-link to="/products" class="btn btn-outine-primary  btn-dark"><i class="fa fa-briefcase" aria-hidden="true"></i> Products</router-link>
</li>
<div class="dropdown open">
    <button class="btn btn-outline-warning btn-dark btn-sm dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fa fa-user">  </i>   Account
            </button>
    <div class="dropdown-menu" aria-labelledby="triggerId">
        <router-link to="/login" class="dropdown-item"><i class="fa fa-address-card" aria-hidden="true"></i> login</router-link>
        <router-link to="/register" class="dropdown-item"><i class="fa fa-address-card" aria-hidden="true"></i> register</router-link>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">After divider action</a>
    </div>
</div>
    <li  class="btn btn-outine-warning"></li>
     
     <li class="btn btn-outine-primary"></li> 
     
</ul>




            </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" data-bs-backdrop="false"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .offcanvas-body{
        background: url('https://raw.githubusercontent.com/claudz1/CodepenImages/master/plank.jpg');
        background-size: cover;
    }
    li{
        list-style: none;
        text-decoration: none;
        font-size: 4rem;
        color: white;
    }

nav a {
    font-weight: bold;
    color: #2c3e50;
}
/* Color of the links BEFORE scroll */
.navbar-scroll .nav-link,
.navbar-scroll .navbar-toggler-icon {
  color: #fff;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler-icon {
  color: #4f4f4f;
}

/* Color of the navbar AFTER scroll */
.navbar-scrolled {
  background-color: #fff;
}

/* An optional height of the navbar AFTER scroll */
.navbar.navbar-scroll.navbar-scrolled {
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>