document.addEventListener("DOMContentLoaded", function() {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const baseURL = gallery.getAttribute('data-base-url');
        const images = JSON.parse(gallery.getAttribute('data-images'));

        const thumbnailURL = baseURL + "thumbnails/";

        images.forEach(image => {
            const anchor = document.createElement('a');
            anchor.href = baseURL + image;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";

            const img = document.createElement('img');
            img.src = thumbnailURL + image;
            img.loading = "lazy";

            anchor.appendChild(img);
            gallery.appendChild(anchor);
        });
    });
});
