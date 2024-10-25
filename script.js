document.getElementById("open-now").addEventListener("change", function() {
    const openNow = this.checked;
    const restaurants = document.querySelectorAll(".restaurant");

    restaurants.forEach(restaurant => {
        if (openNow) {
            restaurant.style.display = "none"; // In einer echten Anwendung würde man hier prüfen, ob das Restaurant geöffnet ist.
        } else {
            restaurant.style.display = "block";
        }
    });
});
