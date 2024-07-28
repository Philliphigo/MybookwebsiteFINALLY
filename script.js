let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pageCount = document.querySelectorAll('.page').length;

function updatePageCount() {
    const pageCounters = document.querySelectorAll('.page-count');
    pageCounters.forEach((counter, index) => {
        counter.textContent = `${index + 1}/${pageCount}`;
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].classList.add('previous');
        currentPage++;
        pages[currentPage].classList.add('active');
        updatePageCount();
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.remove('previous');
        pages[currentPage].classList.add('active');
        updatePageCount();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pages[0].classList.add('active');
    updatePageCount();
});
