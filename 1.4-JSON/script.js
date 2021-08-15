const getISS = async () => {

    const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
};
getISS();
