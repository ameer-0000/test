function changeColor(color) {
    const productImage = document.getElementById('productImage');
    if (color === 'blue') {
        productImage.src = 'blue-dragon-controller.png';
    } else if (color === 'red') {
        productImage.src = 'red-dragon-controller.png';
    } else if (color === 'green') {
        productImage.src = 'green-dragon-controller.png';
    } else if (color === 'black') {
        productImage.src = 'black-dragon-controller.png';
    }
}
