document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.getElementById('dataDisplay').innerText = `API Response: ${data.message}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('dataDisplay').innerText = 'Error fetching data from API.';
    }
});