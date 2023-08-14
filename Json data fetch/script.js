
async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayData() {
    const dataContainer = document.getElementById('data-container');
    const jsonData = await fetchData();



  
    jsonData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.email}`;
        dataContainer.appendChild(itemElement);
    });
}

displayData(); 