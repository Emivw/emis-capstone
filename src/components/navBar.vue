<template>
    <nav>
        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"><i class="fa fa-hamburger"></i> Navigation</button>
        <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"> <i class="fa fa-shopping-cart"></i> cart</button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" data-bs-backdrop="false"
            aria-labelledby="offcanvasLeftLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLeftLabel">Offcanvas left</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
<ul>
<li>
<router-link to="/">Home</router-link>
</li>
<li>
    <router-link to="/about">About</router-link>
</li>
<li>
    <router-link to="/products">Products</router-link>
</li>

</ul>
 <li class=" d-flex flex-row justify-content-end">

    <button type="button" class="btn btn-outline-secondary"><router-link to="/login">Login</router-link></button>
     
     <button type="button" class="btn btn-outline-primary"><router-link to="/register">Register</router-link></button> 
 </li>

            </div>
            </div>
    </nav>
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
    ul{
        list-style: none;
    }

nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav-link :active {
    color: #42b983;
}
</style>