<template>
    <section class="pollaroid-gallery p-5">
<router-link to="/admin/users">
        <figure class="pollaroid-card m-4">
            <img src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="icecream" width="500" height="300" class="img-fluid">
            <figcaption class="pollaroid-card-caption"> Users Admin Panel</figcaption>
        </figure>
</router-link>
<router-link to="/admin/products">
        <figure class="pollaroid-card m-4">
            <img src="https://images.pexels.com/photos/5865384/pexels-photo-5865384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="icecream" width="500" height="300" class="img-fluid">
            <figcaption class="pollaroid-card-caption">Products Admin Panel</figcaption>
        </figure>
</router-link>
    </section>
</template>
    
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
};
</script>
<style scoped>
.home-demo .item {
    background: #ff3f4d;
}

.pollaroid-gallery {
    background-image: url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    height: 100%;
    background-size: cover;

}

h1 {
    margin: 3rem;
}

.pollaroid-gallery {
    text-align: center;
    color: #eee6d8;
}

.pollaroid-card {
    display: inline-block;
    background-color: #eee6d8;
    padding: 10px;
    box-shadow: 4px 4px 8px -4px rgba(0, 0 0, 0.9);
    cursor: pointer;
    transition: transform 0.5s;
}

.pollaroid-card-caption {
    text-align: center;
    font-family: sans-serif;
    color: #000;
}

.pollaroid-card:nth-of-type(even) {
    transform: rotate(-5deg);
}

.pollaroid-card:nth-of-type(odd) {
    transform: rotate(10deg);
}

.pollaroid-card:nth-of-type(even)::before {
    content: '';
    display: block;
    background-color: #948c8c5c;
    width: 100px;
    height: 25px;
    transform: rotate(-24deg) translate(-30px, -25px);
}

.pollaroid-card:nth-of-type(odd)::before {
    content: '';
    display: block;
    background-color: #948c8c5c;
    width: 100px;
    height: 25px;
    transform: translate(140px, -2px) rotate(25deg)
}

.pollaroid-card:hover {
    transform: scale(1.2);
}

@import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&Open+Sans:wght@700&display=swap');

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    background-image: radial-gradient(#3a3a3a, #252525);
    height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    height: 100vh;
}

.name {
    animation: blink 3s infinite linear alternate;
    color: #fff;
    font-family: '
 Londrina Outline'
, sans-serif;
    font-size: 8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 5px #ff7bac, 0 0 10px #ff7bac, 0 0 20px #ff7bac, 0 0 40px #ff7bac, 0 0 80px #ff7bac, 0 0 100px #ff7bac, 0 0 120px #ff7bac;
}

.name>.letter {
    margin: 0 9px;
}

@keyframes blink {

    60%,
    70%,
    79% {
        opacity: 1;
    }

    65%,
    67%,
    76%,
    78% {
        opacity: 0.2;
    }

    66%,
    69%,
    77% {
        opacity: 0.8;
    }
}

.surname {
    animation: border-flickr 6s ease-in-out 6.18s infinite alternate both;
    color: #d6d1e8;
    font-family: '
 Open Sans'
, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: #a48ff2 2px 2px 10px;
}

.surname>.letter {
    margin: 0 20px;
}

.surname>.letter--0 {
    animation: flickr 6s ease-in-out 0.15s infinite alternate both;
}

.surname>.letter--1 {
    animation: flickr 6s ease-in-out 4.38s infinite alternate both;
}

.surname>.letter--2 {
    animation: flickr 6s ease-in-out 2.59s infinite alternate both;
}

.surname>.letter--3 {
    animation: flickr 6s ease-in-out 0.92s infinite alternate both;
}

.surname>.letter--4 {
    animation: flickr 6s ease-in-out 0.55s infinite alternate both;
}

.surname>.letter--5 {
    animation: flickr 6s ease-in-out 8.14s infinite alternate both;
}

.surname>.letter--6 {
    animation: flickr 6s ease-in-out 4.79s infinite alternate both;
}

.surname>.letter--7 {
    animation: flickr 6s ease-in-out 5.68s infinite alternate both;
}

.surname>.letter--8 {
    animation: flickr 6s ease-in-out 0.08s infinite alternate both;
}

@keyframes flickr {

    0%,
    2%,
    35%,
    37%,
    39%,
    41%,
    100% {
        opacity: 1;
    }

    1%,
    3%,
    34%,
    36%,
    38%,
    40% {
        opacity: 0;
    }
}

@keyframes border-flickr {

    0%,
    2%,
    4%,
    6%,
    33%,
    35%,
    37%,
    39%,
    41%,
    100% {
        border: 2px solid white;
        box-shadow: #a48ff2 0px 0px 10px, inset #a48ff2 2px 2px 10px;
    }

    1%,
    3%,
    5%,
    34%,
    36%,
    38%,
    40% {
        border-color: transparent;
        box-shadow: unset;
    }
}
</style>
    