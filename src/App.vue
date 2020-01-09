<template lang="pug">
#app
	mdb-navbar(expand='large' dark color='stylish')
		mdb-navbar-brand(href='#')
			i.fas.fa-sun.fa-2x.mr-2
			| Engenhoca Nove-Nove
			
		mdb-navbar-toggler
			mdb-navbar-nav
				mdb-nav-item(href='#' active) Lar Doce Lar
				mdb-nav-item(href='#') Link
				mdb-nav-item.disabled(href='#') Seguro Invalidez
				mdb-dropdown.nav-item(tag='li')
					mdb-dropdown-toggle(tag='a' navlink color='stylish' slot='toggle' waves-fixed) Escolhas
					mdb-dropdown-menu
						mdb-dropdown-item Feijoada
						mdb-dropdown-item Camarões
						mdb-dropdown-item Lagosta


	router-view
</template>

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

</style>
