<template lang="pug">
.home.text-center.mb-5
	.container-fluid(style="margin-top: 80px;")
			mdb-row
				mdb-col.m-2(col="sm")
					.card.text-left
						img.card-img-top(src='../assets/ponteavmarinho.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title.
								Sobre Pobres

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center

								a.btn.btn-grey(href='#') 
								
									i.material-icons.mr-2 rowing
									| Sambodian Skyline

				mdb-col.m-2(col="sm")

					.card.text-left
						img.card-img-top(src='../assets/ponteavmarinho.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title
								| Sobre Nobres

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center

								a.btn.btn-grey(href='/') 
								
									i.material-icons.mr-2 rowing
									| Sambodian Skyline


				mdb-col.m-2(col="sm")

					.card.text-left
						img.card-img-top(src='../assets/ponteavmarinho.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title
								| Sobre Desnobres

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center
								a.btn.btn-grey(href='#') 
								
									i.material-icons.mr-2 rowing
									| Sambodian Skyline

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style>
img {
  filter: grayscale(100%);
}
</style>