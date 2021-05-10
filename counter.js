let count = 0;

const increaseCount = () => {
    count += 1
    logCount()
};

const logCount = () => {
    console.log(count);
};


setInterval(() => {
    increaseCount(count);
}, 1000) 