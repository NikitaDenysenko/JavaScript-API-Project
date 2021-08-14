const createChart = async () => {
    const { xlabels, ytemps } = await getData();

    const ctx = document.getElementById("chart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xlabels,
            datasets: [
                {
                    label: "Global Average Temeperature",
                    data: ytemps,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
    });
};

const getData = async () => {
    const xlabels = [];
    const ytemps = [];
    const response = await fetch("data.csv");
    const data = await response.text();
    const table = data.split(/\n/).slice(1);
    table.forEach((row) => {
        const columns = row.split(",");
        const year = columns[0];
        xlabels.push(year);
        const temp = columns[1];
        ytemps.push(parseFloat(temp) + 14);
        console.log(year, temp);
    });
    return { xlabels, ytemps };
};
createChart();
