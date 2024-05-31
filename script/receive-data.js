var months = [];
var days = [];
var priceRange = [];
 var periods = [];
var category = [];
var sizep = [];

function handleCheckboxChange() {
    const monthCheckboxes = document.querySelectorAll('.filter input[name="month"]');
    const dayCheckboxes = document.querySelectorAll('.filter input[name="day"]');
    const priceRangeCheckboxes = document.querySelectorAll('.filter input[name="priceRange"]');
    const periodCheckboxes = document.querySelectorAll('.filter input[name="period"]');
    const categoryCheckboxes = document.querySelectorAll('.filter input[name="category"]');
    const sizeCheckboxes = document.querySelectorAll('.filter input[name="size"]');

    months = Array.from(monthCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    days = Array.from(dayCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    priceRange = Array.from(priceRangeCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    periods = Array.from(periodCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    category = Array.from(categoryCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    sizep = Array.from(sizeCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    processData({ months, days, priceRange, periods, category, sizep });
}