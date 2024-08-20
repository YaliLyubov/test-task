const block = $('.form_block');
const formEl = $('.form');

console.log();
$('.form_btn').click(function (e) {
    e.preventDefault();
    $('.form').css('display', 'none');
    $('.form_block').append(`<p class="form_message">Bedankt voor het inschrijven<p>`);
});

//
// const showFullTextBtn = document.querySelector('.btn_show');
// const fullText = document.querySelector('.entry_full-text');

// showFullTextBtn.addEventListener('click', function() {
//   fullText.classList.toggle('hidden');
// });
// $('.btn_show').click(function () {
//     $('.entry_full-text').toggleClass('hidden');
// });
// $('.btn_show').each(function() {
//     this.click(function() {
//         // $('.entry_full-text').toggleClass('hidden');
//         console.log("yes")
//     })
// })
$('.btn_show').on('click', function () {
    $(this).prev('.hidden').toggle();
})