new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["White", "African American", "Indigenous", "Asian", "Pacific Islander"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [4393042,2294698,116497,1256584,17682]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Population of the New York City Census 2020'
      }
    }
});