document.getElementById("colorOptions").addEventListener("change", function() {
    const selectedOption = this.options[this.selectedIndex];
    const selectedColor = selectedOption.value;
    const selectedPrice = selectedOption.getAttribute("data-price");

    // تغيير الصورة حسب اللون المختار
    const productImage = document.getElementById("productImage");
    productImage.src = selectedColor + "-dragon-controller.png";

    // تحديث السعر
    document.getElementById("productPrice").innerText = `$${selectedPrice}`;
});

document.getElementById("buyNowBtn").addEventListener("click", function() {
    alert("تم إضافة المنتج إلى سلة التسوق!");
});
