<template>
    <div class="services-container">
        <section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Exclusive <span>Services</span></h2>
						<p class="description">We are NOIR GENTLEMENS (LTD) We offer handcrafted products for the authentic look and feel of the 60s to 80s gentlemen</p>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-500px"></i>
							<h3 class="title">Express delivery/tracking</h3>
						</div>
						<div class="part-2">
							<p class="description">Express delivery of your goods for great service</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-angellist"></i>
							<h3 class="title">24/7 Call Centre</h3>
						</div>
						<div class="part-2">
							<p class="description">Around the clock support for all your enquiries</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fas fa-award"></i>
							<h3 class="title">Authentic Design & Quality</h3>
						</div>
						<div class="part-2">
							<p class="description">We pride ourself in providing quality productsonly sourcing for high quality materials</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-asymmetrik"></i>
							<h3 class="title">International Delivery</h3>
						</div>
						<div class="part-2">
							<p class="description">With warehouses setup in main hubs we can effectively distribute all over the world </p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fas fa-broadcast-tower"></i>
							<h3 class="title">Top Class Crafters</h3>
						</div>
						<div class="part-2">
							<p class="description">Have custom designs you want us to build? Contact us and we will get back to you ASAP</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
				<!-- Start Single Service -->
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fab fa-canadian-maple-leaf"></i>
							<h3 class="title">Animal Friendly</h3>
						</div>
						<div class="part-2">
							<p class="description">Our leathers are sourced from animals who died of natural causes</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i> </a>
						</div>
					</div>
				</div>
				<!-- / End Single Service -->
			</div>
		</div>
	</section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
a,p,h1,h2,h3,h4,ul {
	margin: 0;
	padding: 0;
    /* color: white; */
}

.section-services {
	padding-top: 110px;
	padding-bottom: 120px;
	font-family: "Poppins", sans-serif;
	background-color: #121212;
	color: #fff;
}

.section-services .header-section {
	margin-bottom: 35px;
}

.section-services .header-section .title {
	position: relative;
	margin-bottom: 40px;
	padding-bottom: 25px;
	text-transform: uppercase;
	font-weight: 700;
}

.section-services .header-section .title:before {
	content: "";
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 140px;
	height: 1px;
	background-color: #f70037;
}

.section-services .header-section .title:after {
	content: "";
	position: absolute;
	bottom: -1px;
	left: 50%;
	transform: translateX(-50%);
	width: 45px;
	height: 3px;
	background-color: #f70037;
}

.section-services .header-section .title span {
	color: #f70037;
}

.section-services .header-section .description {
	color: #6f6f71;
}

.section-services .single-service {
	margin-top: 40px;
	background-color: #24252a;
	box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
}

.section-services .single-service .part-1 {
	padding: 40px 40px 25px;
	border-bottom: 2px solid #1d1e23;
}

.section-services .single-service .part-1 i {
	margin-bottom: 25px;
	font-size: 50px;
	color: #ffc107;
}

.section-services .single-service .part-1 .title {
	font-size: 17px;
	font-weight: 700;
	letter-spacing: 0.02em;
	line-height: 1.8em;
}

.section-services .single-service .part-2 {
	padding: 30px 40px 40px;
}

.section-services .single-service .part-2 .description {
	margin-bottom: 22px;
	color: #6f6f71;
	font-size: 14px;
	line-height: 1.8em;
}

.section-services .single-service .part-2 a {
	color: #fff;
	font-size: 14px;
	text-decoration: none;
}

.section-services .single-service .part-2 a i {
	margin-right: 10px;
	color: #f70037;
}
</style>