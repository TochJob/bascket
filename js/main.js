const products = [
	{id:1, title: 'Notebook', price: 2000, image:'img/notebook.png'},
	{id:2, title: 'Mouse', price: 30, image:'img/mouse.png'},
	{id:3, title: 'Keyboard', price: 200, image:'img/keyboard.png'},
	{id:4, title: 'Gamepad', price: 50, image:'img/gamepad.png'},
];

const renderProduct = (list) =>
	`<div class="product-item">
		<img src="${list.image}" alt="${list.title}">
		<div class="product-discription">
			<h3>${list.title}</h3>
			<p>Цена: ${list.price} &#8381</p>	
			<button class="buy-btn">Купить</button>
		</div>
	</div>`;

const renderPage = lists =>{
	const productList = lists.map(list => renderProduct(list)).join('');
	console.log(productList);
	document.querySelector('.products').insertAdjacentHTML('afterbegin', productList);
};

renderPage(products)