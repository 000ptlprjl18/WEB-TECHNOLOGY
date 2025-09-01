// Function returning a Promise
function getData() {
    return new Promise((resolve, reject) => {
        let success = true; // change to false to see the error case
        if (success) {
            resolve("✅ Data fetched successfully!");
        } else {
            reject("❌ Error fetching data!");
        }
    });
}

// Using async/await + try/catch
async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function
fetchData();

// Using then() and catch()
getData()
    .then(result => console.log(result))
    .catch(error => console.log(error));
