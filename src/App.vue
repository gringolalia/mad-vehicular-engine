<template lang="pug">
#app
	mdb-navbar(expand='large' dark fixed-top color='stylish' position="top")
		mdb-navbar-brand
			i.fas.fa-sun.fa-2x.mr-2
			| Engenhoca Nove-Nove
			
		mdb-navbar-toggler
			mdb-navbar-nav
				mdb-nav-item(to='/' active) Arma Virumque
				mdb-nav-item(to='/about') In Media Res
				mdb-nav-item(to='/about') Odi et Amo

			mdb-dropdown.nav-item(tag='li')
				mdb-dropdown-toggle(tag='a' navlink color='stylish' slot='toggle' waves-fixed) Automóveis
				mdb-dropdown-menu
					mdb-dropdown-item Mercedes Benz
					mdb-dropdown-item BMW
					mdb-dropdown-item Honda
					mdb-dropdown-item Toyota
					mdb-dropdown-item Jeep
					mdb-dropdown-item Volkswagen
					mdb-dropdown-item Chrysler
					mdb-dropdown-item Chevrolet
					mdb-dropdown-item Fiat
					mdb-dropdown-item Renault
					mdb-dropdown-item Dodge
					mdb-dropdown-item Audi
					mdb-dropdown-item Land Rover
					mdb-dropdown-item Mitsubishi
					mdb-dropdown-item Ford
	router-view
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput
    }
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=News+Cycle&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app, body html {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

mdb-dropdpwm-menu > mdb-dropdown-item {
	line-height: 1em !important;
}

i, .material-icons {
	vertical-align: middle;
}

</style>
