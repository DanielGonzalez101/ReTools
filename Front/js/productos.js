import axios from 'https://cdn.skypack.dev/axios'

async function main() {
    try {
        const response = await axios.get('http://localhost:3100/products')
        mostrarProductos(response.data)
    } catch(err) {
        console.log(err)
    }
}

main()

function mostrarProductos(productos) {
    const listProducts = document.querySelector('.contenedor-items')
    listProducts.innerHTML = ''
    productos.forEach((producto) => {
        listProducts.innerHTML += `
            <div class="item"> 
                <img src="${producto.img}" alt="" class="img-item">
                <span class="titulo-item">${producto.name}</span>
                <span class="precio-item">$${producto.price}</span>   
            </div>
        `
    });
}

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}