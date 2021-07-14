document.addEventListener('DOMContentLoaded', function() {
	let carts = document.querySelectorAll('.Add-cart');
	
	let products = [
	 {
      	name: 'Intel core i7-10700',
	    tag: 'Intel i7-10700',
	    price: 518.75,
	    incart: 0
	},	
	{
      	name: 'Intel core i7-9700K',
	    tag: 'Intel i7-9700K',
	    price: 538.38,
	    incart: 0
	},
	{
      	name: 'Intel core i5 9600K',
	    tag: 'Intel i5-9600K',
	    price: 299.99,
	    incart: 0
	},
	{
      	name: 'AMD Ryzen 7 3700X',
	    tag: 'AMD Ryzen 7 3700X',
	    price: 418.52,
	    incart: 0
	},
	{
      	name: 'AMD Ryzen 5 3600',
	    tag: 'AMD Ryzen 5 3600',
	    price: 221.85,
	    incart: 0
	},
	{
      	name: 'AMD Ryzen Threadripper 3970X',
	    tag: 'AMD Ryzen Threadripper 3970X',
	    price: 2.751,
	    incart: 0
	},
	{
      	name: 'ASUS GTX1650 SUPER PHOENIX OC 4GB',
	    tag: 'ASUS GTX1650 SUPER PHOENIX OC',
	    price: 299,
	    incart: 0
	},
	{
      	name: 'MSI Gaming GeForce GTX 1660 Super VENTUS XS 6G OC',
	    tag: 'MSI GTX1660 Super VENTUS XS OC',
	    price: 349,
	    incart: 0
	},
	{
      	name: 'PALIT GTX1660TI DUAL OC 6GB',
	    tag: 'Palit GTX1660TI DUAL OC',
	    price: 409,
	    incart: 0
	},
	{
      	name: 'PALIT RTX2070 SUPER (GAMEROCK) 8GB',
	    tag: 'Palit RTX 2070 Super Gamerock',
	    price: 799,
	    incart: 0
	},
	{
      	name: 'GIGABYTE RTX2080 SUPER AORUS 8GB',
	    tag: 'Gigabyte AORUS RTX 2080 Super',
	    price: 1299,
	    incart: 0
	},
	{
      	name: 'ZOTAC RTX2080TI AMP EXTREME CORE 11GB',
	    tag: 'Zotac RTX 2080 TI AMP Extreme',
	    price: 1949,
	    incart: 0
	},
	{
      	name: 'Adata XPG SX8200 Pro NVMe Gen3 M.2 SSD 500GB',
	    tag: 'ADATA XPG NVME PCIE M.2 1TB',
	    price: 132,
	    incart: 0
	},
	{
      	name: 'Seagate Barracuda 1TB',
	    tag: 'Seagate Barracuda 1TB HDD',
	    price: 60,
	    incart: 0
	},
	{
      	name: 'Seagate Barracuda 2TB',
	    tag: 'Seagate Barracuda 2TB HDD',
	    price: 84,
	    incart: 0
	},
	{
      	name: 'Western Digital Blue 1TB',
	    tag: 'WD Blue 1TB HDD',
	    price: 60,
	    incart: 0
	},
	{
      	name: 'Western Digital Blue 2TB',
	    tag: 'WD Blue 2TB HDD',
	    price: 85,
	    incart: 0
	},
	{
      	name: 'Aorus ASM2NE6100TTTD NVMe Gen4 Ssd 1TB',
	    tag: 'Gigabyte AORUS NVME Gen4 M.2 1TB',
	    price: 359,
	    incart: 0
	},
	{
      	name: 'Corsair Veng LPX 3200MHz CL16 8GB x2 (Intel)',
	    tag: 'Corsair Veng LPX 3200MHz',
	    price: 129,
	    incart: 0
	},
	{
      	name: 'G.Skill Flare X 3200MHz CL 16 8GB x2 (Intel)',
	    tag: 'G.Skill Flare X 3200MHz',
	    price: 112,
	    incart: 0
	},
	{
      	name: 'G.Skill Trident Z Royal 3200MHz CL16 8GB x2 (Intel)',
	    tag: 'G.Skill Trident Z Royal 3200MHz',
	    price: 199,
	    incart: 0
	},
	{
      	name: 'Corsair Veng LPX 3600MHz CL18  8GB x2 (Ryzen)',
	    tag: 'Corsair Veng LPX 3600MHz',
	    price: 135,
	    incart: 0
	},
	{
      	name: 'Corsair Veng Pro RGB 3600MHz CL18 8GB x2 (Ryzen)',
	    tag: 'Corsair Veng Pro RGB 3600MHz',
	    price: 159,
	    incart: 0
	},
	{
      	name: 'G.Skill Trident Z NEO 3600MHz CL16 8GB x2 (Ryzen)',
	    tag: 'G.Skill Trident Z NEO 3600MHz',
	    price: 205,
	    incart: 0
	},
	{
      	name: 'Thermaltake Toughpower RGB 750W Modular',
	    tag: 'Thermaltake Toughpower RGB 750W Modular ',
	    price: 155,
	    incart: 0
	},
	{
      	name: 'CM MWE Gold 650W 80+ Gold Modular',
	    tag: 'CM MWE Gold 650W 80+ Gold Modular',
	    price: 125,
	    incart: 0
	},
	{
      	name: 'Corsair AX1200i Platinum Modular',
	    tag: 'Corsair AX1200i Platinum Modular',
	    price: 495,
	    incart: 0
	},
	{
      	name: 'Corsair TX750M Gold Semi Modular',
	    tag: 'Corsair TX750M Gold Semi Modular',
	    price: 169,
	    incart: 0
	},
	{
      	name: 'EVGA G+ 750W Gold Full Modular',
	    tag: 'EVGA G+ 750W Gold Full Modular',
	    price: 172,
	    incart: 0
	},
	{
      	name: 'NZXT C750-750W Gold Full Modular',
	    tag: 'NZXT C750-750W Gold Full Modular',
	    price: 170,
	    incart: 0
	},
	{
      	name: 'CM MASTERBOX MB510L ATX W/WINDOW',
	    tag: 'CM MASTERBOX MB510L',
	    price: 69,
	    incart: 0
	},
	{
      	name: 'CORSAIR CARBINE SPEC-DELTA RGB ATX W/TG',
	    tag: 'CORSAIR CARBINE SPEC-DELTA RGB ATX',
	    price: 119,
	    incart: 0
	},
	{
      	name: 'NZXT H510 COMPACT ATX CASING TG (B/W)',
	    tag: 'NZXT H510 COMPACT ATX',
	    price: 129,
	    incart: 0
	},
	{
      	name: 'LIAN-LI LANCOOL II Mesh RGB (BLK/WHT) TG',
	    tag: 'LIAN-LI LANCOOL II Mesh RGB',
	    price: 159,
	    incart: 0
	},
	{
      	name: 'FRACTAL DESIGN DEFINE S2 VISION RGB BKO',
	    tag: 'FRACTAL DESIGN DEFINE S2 VISION RGB BKO',
	    price: 349,
	    incart: 0
	},
	{
      	name: 'BEQUIET PURE BASE 600 ATX CASING',
	    tag: 'BEQUIET PURE BASE 600 ATX',
	    price: 129,
	    incart: 0
	},
	{
      	name: 'Corsair H100i RGB Platinum 240MM Liquid Cooler',
	    tag: 'Corsair H100i RGB Platinum 240MM Liquid Cooler',
	    price: 192,
	    incart: 0
	},
	{
      	name: 'ML240L RGB Liquid Cooler',
	    tag: 'ML240L RGB Liquid Cooler',
	    price: 98,
	    incart: 0
	},
	{
      	name: 'Cryorig H7',
	    tag: 'Cryorig H7',
	    price: 59,
	    incart: 0
	},
	{
      	name: 'NZXT Kraken X63 280MM RGB Liquid Cooler',
	    tag: 'NZXT Kraken X63 280MM RGB Liquid Cooler',
	    price: 228,
	    incart: 0
	},
	{
      	name: 'CM HYPER H410R RGB CPU COOLER',
	    tag: 'CM HYPER H410R RGB CPU COOLER',
	    price: 39,
	    incart: 0
	},
	{
      	name: 'Corsair A500 Dual Fan CPU AIR Cooler',
	    tag: 'Corsair A500 Dual Fan CPU AIR Cooler',
	    price: 159,
	    incart: 0
	},
	{
      	name: 'T.take Riing Trio 12 RGB (3 per Pack)',
	    tag: 'T.take Riing Trio 12 RGB',
	    price: 145,
	    incart: 0
	},
	{
      	name: 'T.take Pure DUO 12 ARGB SYNC RADIATOR (2-Pack) BLACK',
	    tag: 'T.take Pure DUO 12 ARGB SYNC RADIATOR',
	    price: 65,
	    incart: 0
	},
	{
      	name: 'Corsair LL140 RGB LED 140mm (2-Pcs)',
	    tag: 'Corsair LL140 RGB LED 140mm',
	    price: 149,
	    incart: 0
	},
	{
      	name: 'CM MasterFan MF120 Halo ARGB (White)',
	    tag: 'CM MasterFan MF120 Halo ARGB',
	    price: 39,
	    incart: 0
	},
	{
      	name: 'CM Sickleflow 120 ARGB (3-IN-1)',
	    tag: 'CM Sickleflow 120 ARGB',
	    price: 79,
	    incart: 0
	},
	{
      	name: 'Silverstone AIR Blazer 120I Lite ARGB 3pcs',
	    tag: 'Silverstone AIR Blazer 120I Lite ARGB',
	    price: 69,
	    incart: 0
	},
	{
      	name: 'GIGABYTE Z490 Vision D',
	    tag: 'GIGABYTE Z490 Vision D',
	    price: 436.16,
	    incart: 0
	},
	{
      	name: 'GIGABYTE Z490 Vision G',
	    tag: 'GIGABYTE Z490 Vision G',
	    price: 199.99,
	    incart: 0
	},
	{
      	name: 'MSI B450 TOMAHAWK Max',
	    tag: 'MSI B450 TOMAHAWK Max',
	    price: 173.51,
	    incart: 0
	},
	{
      	name: 'MSI MEG Z490I Unify',
	    tag: 'MSI MEG Z490I Unify',
	    price: 269.99,
	    incart: 0
	},
	{
      	name: 'ASUS ROG Maximus XI Hero',
	    tag: 'ASUS Motherboard ROG Maximus XI Hero',
	    price: 424.55,
	    incart: 0
	},
	{
      	name: 'ASUS Crosshair VI Hero',
	    tag: 'ASUS ROG Crosshair VI Hero',
	    price: 314.47,
	    incart: 0
	}
]
	for(let i = 0; i < carts.length; i++){
		carts[i].addEventListener('click', () => {
			cartNumber (products[i]);
			totalCost (products[i]);
		})
	}
	
	function onLoadCartNumber () {
		let productNumber = localStorage.getItem('cartNumber');
		
		if (productNumber) {
			document.querySelector('.cart span').textContent = productNumber;
		}
	}
	
	function cartNumber (product) {  
		let productNumber = localStorage.getItem('cartNumber');
		
		productNumber = parseInt(productNumber);
		
		if (productNumber){
			localStorage.setItem('cartNumber', productNumber + 1);
			document.querySelector('.cart span').textContent = productNumber + 1;
		}else {
			localStorage.setItem('cartNumber', 1);
			document.querySelector('.cart span').textContent = 1;
		}
		
		setItems(product);
	}
	
	function setItems(product) {
		let cartItems = localStorage.getItem('productsInCart');
		cartItems = JSON.parse(cartItems);
		
		if(cartItems != null){
			
			if(cartItems[product.tag] == undefined) {
				cartItems = {
					...cartItems,
					[product.tag]: product
				}
			}
			
			cartItems[product.tag].incart += 1;
		} else {
			product.incart =1;		
			cartItems = {
				[product.tag]: product
		}
		}
		
		
		
		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	}
	
	function totalCost (product) {
		//console.log("The product price is", product.price);
		let cartCost = localStorage.getItem('totalCost');
		
		console.log("My cartCost is", cartCost);
		console.log(typeof cartCost);
		
		if(cartCost != null){
			cartCost = parseInt(cartCost);
			localStorage.setItem("totalCost", cartCost + product.price);
		}else{
			localStorage.setItem("totalCost", product.price);
		}
		
		
	}
	
	function displayCart () {
		let cartItems = localStorage.getItem("productsInCart");
		cartItems = JSON.parse(cartItems);
		let table = document.querySelector(".table");
		let cartCost = localStorage.getItem('totalCost');

		
		if(cartItems && table){
			Object.values(cartItems).map(item => {
		
	
			var row = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			var td4 = document.createElement("td");
			var td5 = document.createElement("td");
			var td6 = document.createElement("td");
			
			
			
			td1.innerHTML = `<a id = "but"><input type = "button" value = "Delete"></a>`;
			td2.innerHTML = `<img src = "./Images/Products/${item.tag}.jpg" height = 25% width = 50%>`;
			td3.innerHTML = `${item.name}`;
			td4.innerHTML = `$${item.price}`;
			td5.innerHTML = `${item.incart}`;
			td6.innerHTML = `$${item.incart * item.price}`;
			
			
			
			row.appendChild(td1);
			row.appendChild(td2);
			row.appendChild(td3);
			row.appendChild(td4);
			row.appendChild(td5);
			row.appendChild(td6);
			
			table.children[0].appendChild(row);
		
			});
		
			let ttCost = document.getElementById("tCost");
			ttCost.innerHTML = `$${cartCost}`;
			
			
			
		}
		
	}
	
	
	

	
	
	
	onLoadCartNumber ();
	displayCart ();
})