<template lang="pug">
.home.text-center.mb-5
	.container-fluid(style="margin-top: 80px;")

		mdb-row
			.col-sm.mt-5
				h1
					i.material-icons.md-72 toys
				h3 Addio Mondo Crudele 	
				h4 Muddy Waters, Muddy Boots
				mdb-btn.mt-2(href="/about" color='blue-grey') Print Me
			
			.col-sm.mt-5
				h1
					i.material-icons.md-72 toys
				h3 Addio Mondo Crudele 
				h4 Muddy Waters, Muddy Boots
				mdb-btn.mt-2(color='mdb-color') Press Me
				
			.col-sm.mt-5
				h1
					i.material-icons.md-72 toys
				h3 Addio Mondo Crudele 
				h4 Muddy Waters, Muddy Boots
				mdb-btn.mt-2(color='elegant') Outguess Me

	.container-fluid.mt-5

			mdb-row
				mdb-col.m-2(col="sm")
					.card.text-left
						img.card-img-top(src='../assets/titannic.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title.
								Engenho Novo Número Nove

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center

								a.btn.btn-grey(href='#') 
								
									i.material-icons.mr-2 rowing
									| A Total Disaster

				mdb-col.m-2(col="sm")

					.card.text-left
						img.card-img-top(src='../assets/titannic.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title
								| Engenho Novo Número Nove

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center

								a.btn.btn-grey(href='/') 
								
									i.material-icons.mr-2 rowing
									| A Total Disaster


				mdb-col.m-2(col="sm")

					.card.text-left
						img.card-img-top(src='../assets/titannic.jpg' alt='Great Ship Down')

						.card-body

							h5.card-title
								a Engenho Novo Número Nove

							p.card-text Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

							.text-center
								a.btn.btn-grey(href='#') 
								
									i.material-icons.mr-2 rowing
									| A Total Disaster

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
