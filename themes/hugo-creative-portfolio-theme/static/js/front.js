masonry();
$(function () {
    makeImagesResponsive();
    enableContentImageLightbox();
    offCanvas();
    lightbox();
    utils();
    highlightCurrentPage();
});
function highlightCurrentPage() {
  $("a[href='" + location.href + "']").parent().addClass("active");
}
function makeImagesResponsive() {
    $("img").addClass("img-responsive");
}
/* Clicking an inline image opens it full size; images that are already links are left alone. */
function enableContentImageLightbox() {
    $(".content-column-content img").each(function () {
        var $img = $(this);
        if ($img.closest("a").length) {
            return;
        }
        var label = $img.attr("alt") ? "View full size: " + $img.attr("alt") : "View full size";
        $img.wrap($("<a>", {
            href: $img.attr("src"),
            "class": "photo-lightbox-link",
            "data-toggle": "lightbox",
            "data-gallery": "page-images",
            "aria-label": label
        }));
    });
}
/* =========================================
 *  masonry
 *  =======================================*/
function masonry() {
    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}
/* =========================================
 *  Off-canvas menu
 *  =======================================*/
function offCanvas() {
    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });
}
/* =========================================
 *  lightbox
 *  =======================================*/
function lightbox() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}
/* =========================================
 *  utils
 *  =======================================*/
function utils() {
    /* tooltips */
    $('[data-toggle="tooltip"]').tooltip();
    /* click on the box activates the link in it */
    $('.box.clickable').on('click', function (e) {
        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/
    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });
}
