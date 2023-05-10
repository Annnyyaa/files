

const scrollBtn = document.querySelector('.showScroll');

window.onscroll = () => {
	if(window.scrollY > 1100){
		scrollBtn.classList.remove('showScroll_hide');
	}
	else if(window.scrollY < 1100) {
		scrollBtn.classList.add('showScroll_hide');
	}
}

scrollBtn.onclick = () => {
	window.scrollTo(0,0);
}


let firstRow = [
	{
		title: 'Childish Gambino – Because The Internet',
		price: 179,
		img: 'childish gambino 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: 'Telegraph Ave. (Oakland by Lloyd)',
		a2: 'Sweatpants',
		a3: 'V. 3005',
		a4: 'Playing Around Before The Party Starts',	
		sideB: 'sideB',
		b1: 'Death By Numbers',
		b2: ' Flight Of The Navigator',
		b3: 'Pink Toes',
		b4: 'The Worst Guys',
	},
	{
		title: 'Kendrick Lamar – Good Kid, m.A.A.d City',
		price: 169,
		img: 'kendrick-lamar-good- 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: 'm.A.A.d City',
		a2: 'Bitch, Dont Kill My Vibe',
		a3: 'Backseat Freestyle',
		a4: ' The Art Of Peer Pressure',	
		sideB: 'sideB',
		b1: ' Money Trees',
		b2: 'Poetic Justice',
		b3: 'Now Or Never',
		b4: 'Swimming Pools (Drank)',
	},
	{
		title: 'Run-DMC – Raising Hell Tricky Live',
		price: 189,
		img: 'run dmc 1.png',
		genre: 'hip-hop',
		sideA: 'sideA',
		a1: 'Peter Piper',
		a2: 'Its Tricky',
		a3: 'Walk This Way',
		a4: 'Is It Live',	
		sideB: '',
		b1: 'Raising Hell',
		b2: 'Hit It Run',
		b3: 'You Be Illin',
		b4: 'Proud To Be Black',
	},
	{
		title: 'The Byrds – Mr. Tambourine Man',
		price: 169,
		img: 'the berds 1.png',
		genre: 'Rock',
		sideA: 'sideA',
		a1: 'Mr. Tambourine Man',
		a2: ' Ill Feel A Whole Lot Better',
		a3: 'Spanish Harlem Incident',
		a4: 'Here Without You',	
		sideB: 'sideB',
		b1: 'I Knew Id Want You',
		b2: 'Its No Use',
		b3: 'Chimes Of Freedom',
		b4: 'Well Meet Again',
	},
	{
		title: 'Led Zeppelin – Led Zeppelin Is Gonna Come',
		price: 159,
		img: 'led-zeppelin1280x128 1.png',
		genre: 'Rock',
		sideA: 'sideA',
		a1: 'Good Times Bad Times',
		a2: 'You Shook Me',
		a3: 'Dazed And Confused',
		a4: 'Your Time Is Gonna Come',	
		sideB: 'sideB',
		b1: 'Black Mountain Side',
		b2: 'Communication Breakdown',
		b3: 'How Many More Times',
		b4: 'You Shook Me',
	},
	{
		title: 'The Who – My Generation Goods Gone',
		price: 189,
		img: 'the who 1.png',
		genre: 'Rock',
		sideA: 'sideA',
		a1: 'Out In The Street',
		a2: 'The Goods Gone',
		a3: 'Much Too Much',
		a4: ' My Generation',	
		sideB: 'sideB',
		b1: 'The Kids Are Alright',
		b2: 'Its Not True',
		b3: 'La-La-La-Lies',
		b4: 'A Legal Matter',
	},
	{
		title: 'Lana Del Rey - Ultraviolence  Cruel World ',
		price: 189,
		img: 'Ultraviolencecoveral 1.png',
		genre: 'Indie Pop',
		sideA: 'sideA',
		a1: ' Cruel World',
		a2: 'Ultraviolence',
		a3: 'Shades Of Cool',
		a4: 'West Coast',	
		sideB: 'sideB',
		b1: 'Old Money',
		b2: 'Black Beauty',
		b3: 'Guns And Roses',
		b4: 'Sad Girl',
	},
	{
		title: 'Tame Impala - Currents Eventually',
		price: 169,
		img: 'tame impala 1.png',
		genre: 'Indie Rock',
		sideA: 'sideA',
		a1: 'Let It Happen',
		a2: 'Nangs',
		a3: 'The Moment',
		a4: 'Eventually',	
		sideB: 'sideB',
		b1: 'Past Life',
		b2: 'Disciples',
		b3: 'Gossip',
		b4: 'Love / Paranoia',
	},
	{
		title: 'King Krule - Man Supermarche Alive! ',
		price: 159,
		img: 'king-krule-man-alive 1.png',
		genre: 'Indie Rock',
		sideA: 'sideA',
		a1: 'Cellular',
		a2: 'Supermarche',
		a3: 'Stoned Again',
		a4: 'Comet Face',	
		sideB: 'sideB',
		b1: 'Alone, Omen 3',
		b2: 'Slinky',
		b3: 'Airport Antenatal',
		b4: 'Underclass',
	},
	{
		title: 'Nina Simone – High Priestess Of Soul',
		price: 189,
		img: 'nina 1.png',
		genre: 'Jazz',
		sideA: 'sideA',
		a1: 'Dont You Pay Them No Mind',
		a2: 'Im Gonna Leave You',
		a3: 'Brown Eyed Handsome Man',
		a4: 'Keeper Of The Flame',	
		sideB: 'sideB',
		b1: 'The Gal From Joes',
		b2: 'Take Me To The Water',
		b3: 'I Hold No Grudge',
		b4: 'Work Song',
	},
	{
		title: 'Tony Bennett, Lady Gaga – Cheek To Cheek',
		price: 159,
		img: 'lady 1.png',
		genre: 'Jazz',
		sideA: 'sideA',
		a1: 'Anything Goes',
		a2: 'Cheek To Cheek',
		a3: 'Nature Boy',
		a4: 'I Wont Dance',	
		sideB: 'sideB',
		b1: 'Firefly',
		b2: 'Sophisticated Lady',
		b3: 'But Beautiful',
		b4: 'Lush Life - Lady Gaga',
	},
	{
		title: 'Horace Silver Quintet – 6 Pieces Of Silver ',
		price: 159,
		img: 'suver 1.png',
		genre: 'Jazz',
		sideA: 'sideA',
		a1: 'Cool Eyes',
		a2: 'Shirl',
		a3: 'Camouflage',
		a4: 'Enchantment',	
		sideB: 'sideB',
		b1: 'Senor Blues',
		b2: 'Virgo',
		b3: 'For Heavens Sake',
		b4: 'Cool Eyes',
	},
	{
		title: 'Halsey – Manic Everybody[LP]',
		price: 159,
		img: 'halsey.jpg',
		genre: 'Pop',
		sideA: 'sideA',
		a1: 'Ashley',
		a2: 'Clementine',
		a3: 'You Should Be Sad',
		a4: ' Forever... Is A Long Time',	
		sideB: 'sideB',
		b1: 'I Hate Everybody',
		b2: 'Without Me',
		b3: 'Still Learning',
		b4: '929',
	},
	{
		title: 'John Legend – Once Again [2LP]',
		price: 199,
		img: 'johnl.jpg',
		genre: 'Pop',
		sideA: 'sideA',
		a1: 'Each Day Gets Better',
		a2: 'King & Queen',
		a3: 'Nature Boy',
		a4: 'Again',	
		sideB: 'sideB',
		b1: 'Firefly',
		b2: ' Another Again',
		b3: 'But Beautiful',
		b4: 'Coming Home',
	},
	{
		title: 'Madonna – True Blue  Heat  [LP] ',
		price: 159,
		img: 'madonna.jpg',
		genre: 'Pop',
		sideA: 'sideA',
		a1: 'Open Your Heart',
		a2: 'Shirl',
		a3: 'White Heat',
		a4: 'Enchantment',	
		sideB: 'sideB',
		b1: 'True Blue',
		b2: 'La Isla Bonita',
		b3: 'Jimmy Jimmy',
		b4: 'Cool Eyes',
	},
	{
		title: 'Gorillaz - The Now Now Now  [LP]',
		price: 159,
		img: 'gorillsz.jpg',
		genre: 'Electronic',
		sideA: 'sideA',
		a1: 'Humility (feat. George Benson)',
		a2: 'Tranz',
		a3: 'Kansas',
		a4: 'Sorcererz',	
		sideB: 'sideB',
		b1: 'Lake Zurich',
		b2: 'One Percent',
		b3: ' Fire Flies',
		b4: 'Work Song',
	},
	{
		title: 'Kraftwerk - Computer World [LP]',
		price: 159,
		img: 'kraft.jpg',
		genre: 'Electronic',
		sideA: 'sideA',
		a1: 'Computer World',
		a2: 'Pocket Calculator',
		a3: 'Numbers',
		a4: 'I Wont Dance',	
		sideB: 'sideB',
		b1: 'Firefly',
		b2: 'Computer Love',
		b3: 'Computer World 2',
		b4: 'Homecomputer',
	},
	{
		title: 'The Blaze – Dancehall Queens[LP]',
		price: 159,
		img: 'dancehh.jpg',
		genre: 'Electronic',
		sideA: 'sideA',
		a1: 'Opening',
		a2: 'Heaven',
		a3: 'Runaway',
		a4: 'Enchantment',	
		sideB: 'sideB',
		b1: 'Queens',
		b2: 'Virgo',
		b3: 'For Heavens Sake',
		b4: 'Cool Eyes',
	},
]

let hipHop = document.querySelector('.covers-hip-hop')
let rock = document.querySelector('.covers-rock')
let indi = document.querySelector('.covers-indi')
let jazz = document.querySelector('.covers-jazz')
let pop = document.querySelector('.covers-pop')
let electro = document.querySelector('.covers-electro')



function coverOutput(where, intervalStart, inRow = 3) {

	for (let i = 0; i <= inRow; i++) {

		where.innerHTML = firstRow.map((item, index) => 
			(index >= intervalStart && index <= intervalStart + 2) ?
			`
			<div class="covers-item">
				<img src="../img/main/${item.img}" alt="">
				<p>${item.title}</p>
				<span>${item.price} BYN</span>
			</div>
			`
			: 
			''
		).join("")
	}
}

coverOutput(hipHop, 0)
coverOutput(rock, 3)
coverOutput(indi, 6)
coverOutput(jazz, 9)
coverOutput(pop, 12)
coverOutput(electro, 15)




// =======================================

let items = document.querySelectorAll('.covers-item')
let block = document.querySelector('.item-info')
let back = document.querySelector('.back')

let output = document.querySelector('.cover-info')

function image(item, coverIndex, index) {
	if(coverIndex === index) {
		return (
			`
				<div class="image">
					<img src='../img/main/${item.img}' alt="image"/>
					<div class="text">
						<p>Genre: ${item.genre}<p>
						<p>Publication: Interscope<p>
						<p>Category: Album<p>
					</div>
				</div>
				<div class="other-text">
					<div class="top">
						<h2>${item.title}</h2>
						<h3>${item.price} BYN</h3>
						<a href="../pages/form.html" class="order">
							Place an Order
						</a>
					</div>
					<div class="bottom">
						<h4>Side A</h4>
						<p>A1. ${item.a1}</p>
						<p>A2. ${item.a2}</p>
						<p>A3. ${item.a3}</p>
						<p>A4. ${item.a4}</p>
						<h4>Side B</h4>
						<p>B1. ${item.b1}</p>
						<p>B2. ${item.b2}</p>
						<p>B3. ${item.b3}</p>
						<p>B4. ${item.b4}</p>
					</div>

				</div>
			`
		) 
	}
	else{return ''}
}

if(items) {

	items.forEach((cover, coverIndex) => {

		block.style.display = 'none'
		
		cover.addEventListener('click', function () {
			let bool = false
			console.log(1)
			bool = !bool
				if (bool) {
					block.style.display = 'block'
	
					output.innerHTML = firstRow.map((item, index) => 
						`
							${image(item, coverIndex, index)}
						`
					).join("")
				}
		})
	})
	back.addEventListener('click', function () {
		block.style.display = 'none'
	})
}