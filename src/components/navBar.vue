<template>
    <nav class="fixed-top d-flex justify-content-evenly">
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
<router-link to="/" class="btn btn-outine-primary"><i class="fa fa-house" aria-hidden="true"></i> Home</router-link>
</li>
<li>
    <router-link to="/about" class="btn btn-outine-primary"><i class="fa fa-address-book" aria-hidden="true"></i> About</router-link>
</li>
<li>
    <router-link to="/products" class="btn btn-outine-primary "><i class="fa fa-briefcase" aria-hidden="true"></i> Products</router-link>
</li>
    <li t class="btn btn-outine-warning "><router-link to="/login" >Login</router-link></li>
     
     <li t class="btn btn-outine-primary"><router-link to="/register">Register</router-link></li> 
     
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
        background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
    }
    li{
        list-style: none;
        text-decoration: none;
        font-size: 4rem;
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