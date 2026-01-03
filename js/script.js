const products = [
    { name: "Keripik Tempe", price: "Rp15.000", category: "makanan" },
    { name: "Kue Kering UMKM", price: "Rp20.000", category: "makanan" },
    { name: "Kopi Lokal", price: "Rp25.000", category: "minuman" },
    { name: "Es Teh Herbal", price: "Rp8.000", category: "minuman" },
    { name: "Jasa Laundry", price: "Rp5.000/kg", category: "jasa" },
    { name: "Jasa Desain Banner", price: "Mulai Rp50.000", category: "jasa" }
];

const productList = document.getElementById("product-list");

function displayProducts(data) {
    if (!productList) return;
    productList.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <h4>${item.name}</h4>
            <span>${item.price}</span>
        `;
        productList.appendChild(div);
    });
}

function filterProduct(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// TAMPILKAN SEMUA PRODUK SAAT LOAD
displayProducts(products);

// FORM KONTAK
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Pesan berhasil dikirim. Terima kasih telah menghubungi kami!");
        form.reset();
    });
}
