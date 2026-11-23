masonry();
$(function () {
    makeImagesResponsive();
    enableContentImageLightbox();
    offCanvas();
    lightbox();
    utils();
    highlightCurrentPage();
    tilePreviews();
    themeToggle();
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
/* =========================================
 *  Tile previews: play a short muted loop on hover or keyboard focus.
 *  Touch screens and reduced-motion users keep the still image.
 *  =======================================*/
function tilePreviews() {
    var canHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) {
        return;
    }
    $(".box-masonry.has-preview").each(function () {
        var $box = $(this);
        var video = $box.find("video.tile-preview")[0];
        if (!video) {
            return;
        }
        var active = false;
        video.addEventListener("playing", function () {
            if (active) {
                $box.addClass("is-previewing");
            }
        });
        var start = function () {
            active = true;
            if (!video.src) {
                video.src = video.getAttribute("data-src");
            }
            var played = video.play();
            if (played && played.catch) {
                played.catch(function () {});
            }
        };
        var stop = function () {
            active = false;
            $box.removeClass("is-previewing");
            video.pause();
            video.currentTime = 0;
        };
        $box.on("mouseenter", start).on("mouseleave", stop);
        $box.find("a").on("focus", start).on("blur", stop);
    });
}
/* =========================================
 *  Light/dark toggle; the head script applies the saved choice before paint.
 *  =======================================*/
function themeToggle() {
    var root = document.documentElement;
    var prefersDark = function () {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    var isDark = function () {
        var theme = root.getAttribute("data-theme");
        return theme ? theme === "dark" : prefersDark();
    };
    var sync = function () {
        var dark = isDark();
        $(".theme-toggle")
            .attr("aria-pressed", dark ? "true" : "false")
            .attr("aria-label", dark ? "Switch to light mode" : "Switch to dark mode")
            .find("i").attr("class", dark ? "fa fa-sun-o" : "fa fa-moon-o");
    };
    $(".theme-toggle").on("click", function () {
        var next = isDark() ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
        sync();
    });
    sync();
}
