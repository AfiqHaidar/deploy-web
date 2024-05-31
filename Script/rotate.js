document.querySelectorAll('.month-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-month').classList.toggle('rotated');
        document.querySelector('.month-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-month').classList.toggle('active');
    });
});

document.querySelectorAll('.day-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-day').classList.toggle('rotated');
        document.querySelector('.day-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-day').classList.toggle('active');
    });
});

document.querySelectorAll('.period-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-period').classList.toggle('rotated');
        document.querySelector('.period-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-period').classList.toggle('active');
    });
});

document.querySelectorAll('.pr-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-pr').classList.toggle('rotated');
        document.querySelector('.pr-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-pr').classList.toggle('active');
    });
});

document.querySelectorAll('.cat-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-cat').classList.toggle('rotated');
        document.querySelector('.cat-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-cat').classList.toggle('active');
    });
});

document.querySelectorAll('.size-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.arrow-size').classList.toggle('rotated');
        document.querySelector('.size-toggle').classList.toggle('rotated');
        document.querySelector('.checkbox-size').classList.toggle('active');
    });
});