$(document).ready(function() {
    document.addEventListener("impress:stepenter", function (event) {
        updateTowerSlides($(event.target));
    });
    document.addEventListener("impress:stepleave", function (event) {
        showNextTowerSlide($(event.detail.next));
    });

    updateTowerSlides($('.step.active'));

    function updateTowerSlides($target) {
        $target.prevAll('.tower-slide').hide();
        $target.filter('.tower-slide').show();
        $target.nextAll('.tower-slide').hide();
    }

    function showNextTowerSlide($next) {
        $next.filter('.tower-slide').show();
    }
});
