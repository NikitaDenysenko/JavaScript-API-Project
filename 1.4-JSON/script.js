const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
const getISS = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const dataList = document.createElement("ul");

    let tagsWithData = "";
    for (const key in data) {
        tagsWithData = tagsWithData.concat(`<li>${key}: ${data[key]}</li>`);
    }
    
    dataList.innerHTML = tagsWithData;
    document.querySelector("#data-container").appendChild(dataList);
};
getISS();
