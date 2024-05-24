// Your JSON data
const typeData = `{
    "labels": ["big_meat_s", "thai_ckn_l", "five_cheese_l", "four_cheese_l", "classoc_dlx_m", "spicy_ital_l", "hawaiian_s", "southw_ckn_l", "bbq_ckn_l", "bbq_ckn_m"],
    "values": [1811, 1365, 1359, 1273, 1159, 1088, 1001, 993, 967, 926]
  }`;
  
  // Parse the JSON data
  const typeParse = JSON.parse(typeData);
  
  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    // Get the context of the canvas element we want to select
    const ctxType = document.getElementById('type').getContext('2d');
  
    // Create a new horizontal bar chart
    const myHorizontalBarChart = new Chart(ctxType, {
      type: 'bar',
      data: {
        labels: typeParse.labels,
        datasets: [{
          label: 'Record Count',
          data: typeParse.values,
          backgroundColor: 'rgba(26, 115, 232, 1)',
          borderColor: 'rgba(26, 115, 232, 1)',
          borderWidth: 1
        }]
      },
     
    });
  });
  