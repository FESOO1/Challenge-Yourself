const outputContainer = document.querySelector('.main-output');

// RETRIEVING THE DATA

async function retrievingTheData() {
    try {
        const response = await fetch('../challenges-data/challenges-data.json');

        if (!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        console.log(data[0].thumbnail);
    }
    catch(error) {
        console.error(error);
    };
};

retrievingTheData();