document.addEventListener("DOMContentLoaded", function() {
    const galleries = document.querySelectorAll('.gallery, .gallery-seichijunrei');

    galleries.forEach(gallery => {
        const baseURL = gallery.getAttribute('data-base-url');
        const images = JSON.parse(gallery.getAttribute('data-images'));

        images.forEach(image => {
            const pathSegments = image.split('/');
            const fileName = pathSegments.pop(); // Get the file name
            const thumbnailPathSegments = [...pathSegments, 'thumbnails', fileName];
            const thumbnailURL = baseURL + thumbnailPathSegments.join('/');

            const anchor = document.createElement('a');
            anchor.href = baseURL + image;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";

            const img = document.createElement('img');
            img.src = thumbnailURL;
            img.loading = "lazy";

            anchor.appendChild(img);
            gallery.appendChild(anchor);
        });
    });
});
