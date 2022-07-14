// LINE CHART

const lineChart = document.getElementById("lineChart");

const labels = [
  "22 Maj",
  "23 Maj",
  "24 Maj",
  "25 Maj",
  "26 Maj",
  "27 Maj",
  "28 Maj",
  "29 Maj",
  "30 Maj",
  "31 Maj",
  "01 Jun",
  "02 Jun",
  "03 Jun",
  "04 Jun",
  "05 Jun",
  "06 Jun",
  "07 Jun",
  "08 Jun",
  "09 Jun",
];

new Chart(lineChart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Povratni pregledi",
        data: [
          1844, 1554, 1273, 1126, 946, 1793, 1432, 1130, 1074, 1131, 954, 856,
          1274, 354, 882, 745, 2454, 786, 1020,
        ],
        borderColor: "rgba(66, 138, 245, 1)",
      },
      {
        label: "Novi pregledi",
        data: [
          1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712,
          614, 965, 875, 1456, 1235, 852, 634,
        ],
        borderColor: "rgba(235, 134, 52, 1)",
      },
    ],
  },
});

// PIE CHART

const pieChart = document.getElementById("pieChart");

new Chart(pieChart, {
  type: "pie",
  data: {
    labels: ["Srbija", "BiH", "Hrvatska", "S.Makedonija", "CG", "Ostali"],
    datasets: [
      {
        label: "Drzave",
        data: [49.6, 20.3, 50.4, 36.8, 21.4, 39.6],
        backgroundColor: [
          "rgba(152, 235, 145, 1)",
          "rgba(25, 253, 154, 1)",
          "rgba(48, 235, 105, 1)",
          "rgba(38, 235, 200, 1)",
          "rgba(42, 235, 155, 1)",
          "rgba(25, 200, 145, 1)",
        ],
      },
    ],
  },
});
 
//BAR CHART

const barChart = document.getElementById("barChart");

new Chart(barChart, {
  type: "bar",
  
  data: {
    labels: ["13-17", "18-25", "26-32", "35-42", "45-50", "65+"],

    
    datasets: [
      {
        label: "Publika po godinama",
        data: [1.7, 3.4, 2.5, 43.5, 58.2, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
});
