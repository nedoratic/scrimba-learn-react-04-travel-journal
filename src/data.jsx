let destinations = [
	{
		id: 1,
		imageURL: 'https://assets.vogue.com/photos/59f909c9c4a3b8694eb1d201/master/w_2560%2Cc_limit/00-story-image-belgrade-saint-sava-temple.jpg',
		tittle: 'Church of Saint Sava',
		location: 'Belgrade',
		country: 'Serbia',
		googleMapsURL: 'https://www.google.com/maps/place/The+Temple+of+Saint+Sava/@44.7981382,20.4690468,15z/data=!4m6!3m5!1s0x475a700ca7258e8f:0xbe11391a6fc0344c!8m2!3d44.7981382!4d20.4690468!16zL20vMDNucXNi?entry=ttu',
		description:
			"The Church of Saint Sava stands proudly as one of Belgrade's most iconic landmarks and Serbia's largest Orthodox church. Its grandiose Byzantine-style architecture and towering domes dominate the cityscape, reflecting the nation's deep religious and cultural heritage. Dedicated to Saint Sava, the founder of the Serbian Orthodox Church, it serves as a spiritual center and a symbol of Serbian identity. The church's massive scale and intricate detailing make it a must-visit destination for tourists and pilgrims alike, embodying the rich history and enduring faith of the Serbian people.",
	},
	{
		id: 2,
		imageURL: 'https://www.russiaeguide.com/wp-content/uploads/2022/01/5494-1406009793-950e91a5cc3d88ccb6a05e377138f46b-1536x1016.jpg',
		tittle: 'Cathedral of Christ the Saviour',
		location: 'Moscow',
		country: 'Russia',
		googleMapsURL: 'https://www.google.com/maps/place/Cathedral+of+Christ+the+Saviour/@55.7446375,37.6054939,15z/data=!4m6!3m5!1s0x46b54bac9fc13ca9:0x4b16fe357fece312!8m2!3d55.7446375!4d37.6054939!16zL20vMDIxMXdj?entry=ttu',
		description:
			"The Cathedral of Christ the Saviour, situated on the banks of the Moskva River in Moscow, Russia, is a monumental symbol of Russian Orthodoxy and national resilience. Constructed in the 19th century to commemorate Russia's victory over Napoleon, its golden domes and neoclassical facade stand as a testament to the nation's faith and history. Despite its destruction during the Soviet era, the cathedral was meticulously rebuilt and continues to serve as a vibrant center of worship and cultural heritage. Visitors are invited to admire its architectural grandeur and reflect on its profound significance in Russian history.",
	},
	{
		id: 3,
		imageURL: 'https://i.insider.com/5eac2eb748d92c7b561c54b4?width=2000&format=jpeg&auto=webp',
		tittle: 'The monastery complex of Meteora',
		location: 'Meteora',
		country: 'Greece',
		googleMapsURL: 'https://www.google.com/maps/place/Meteora/@39.7217044,21.625826,17z/data=!4m10!1m2!2m1!1sMonasteries+of+Meteora!3m6!1s0x13590faee8327f39:0x7127add4d8bc32ff!8m2!3d39.7217044!4d21.6305896!15sChZNb25hc3RlcmllcyBvZiBNZXRlb3JhWhgiFm1vbmFzdGVyaWVzIG9mIG1ldGVvcmGSAQltb25hc3RlcnngAQA!16zL20vMDEyZDl6?entry=ttu',
		description:
			'The monastery complex of Meteora, nestled in the rugged landscapes of Meteora, Greece, is a breathtaking marvel of human ingenuity and spiritual devotion. Perched atop towering rock pillars, these ancient monasteries seem to defy gravity, offering stunning panoramic views of the surrounding valleys and cliffs. Dating back to the Byzantine era, the monasteries served as havens for monks seeking solitude and prayer. Accessible via winding pathways and staircases carved into the rock, each monastery tells a story of faith, resilience, and architectural brilliance. Today, the Meteora monasteries stand as UNESCO World Heritage Sites, attracting visitors from around the world to marvel at their awe-inspiring beauty and profound spiritual atmosphere.',
	},
	{
		id: 4,
		imageURL: 'https://preview.redd.it/eop97vdva3wy.jpg?auto=webp&s=cc83a86d59ceb75b3e6f38438aa757d0fd21b077',
		tittle: 'Manasija Monastery',
		location: 'Despotovac',
		country: 'Serbia',
		googleMapsURL: 'https://www.google.com/maps/place/Manasija+Monastery/@44.1009956,21.4695774,15z/data=!4m2!3m1!1s0x0:0x3a597551867d92a5?sa=X&ved=1t:2428&ictx=111',
		description: 'Among the green hills of the vivid Resava gorge, surrounded by magnificent towers of the medieval fortress, there is a monastery which fortification falls into the top achievements of Serbian architecture, and its frescoes into the line of greatest domains of Serbian medieval painting – Manasija Monastery.',
	},
	{
		id: 5,
		imageURL: 'https://www.serbia.com/wp-content/uploads/2016/02/zica.jpg',
		tittle: 'Zica Monastery - The church of seven kings',
		location: 'Zica',
		country: 'Serbia',
		googleMapsURL: 'https://www.google.com/maps/place/%C5%BDi%C4%8Da+Monastery/@43.6921508,20.6431836,17z/data=!3m1!4b1!4m6!3m5!1s0x4757aa0b920885c5:0x8af04689b54c1cb3!8m2!3d43.6921508!4d20.6457585!16zL20vMDd0ZmZn?entry=ttu',
		description:
			'A truly magical religious building in which 7 Serbian kings were crowned ranks high among the most influential Serbian monasteries. It is the endowment of Stefan Prvovencani, who was married there in 1217. Zica is located only 6 kilometers from the town of Kraljevo, in one of the most fruitful plains. Zica suffered several demolitions by Tatars, Turks, and Germans. It underwent its final renovation in 1987 when its original, medieval appearance was restored. It is known as the Church of the seven doors, as a new door was built each time a king was crowned in it. Once the king passed through the door after his coronation, the wall got bricked up. Apart from the coronation of the rulers, Zica was the place used as a headquarter by the patriarchs.',
	},
	{
		id: 6,
		imageURL: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2014_16/334721/pc-140419-holy-fire-jerusalem-mn-1406.jpg',
		tittle: 'Church of the Holy Sepulchre',
		location: 'Jerusalem',
		country: 'Disputed Territory',
		googleMapsURL: 'https://www.google.com/maps/place/Church+of+the+Holy+Sepulchre/@31.7784813,35.2296002,15z/data=!4m6!3m5!1s0x150329cf1c246db5:0x2d04a75cfc390360!8m2!3d31.7784813!4d35.2296002!16zL20vMDI1eWc?entry=ttu',
		description: 'The Church of the Holy Sepulchre, located in Jerusalem, is one of the most revered sites in Christianity. It is believed to encompass both the site of the crucifixion and the tomb of Jesus Christ. This ancient church, with its rich history and diverse architectural styles, draws pilgrims and visitors from around the world. Its significance lies not only in its religious importance but also in its status as a symbol of cultural and historical heritage.',
	},
];

export default data;
