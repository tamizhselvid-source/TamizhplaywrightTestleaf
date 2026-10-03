// Program to print numbers divisible by 5 from 1 to 50

try {
    const start = 1;
    const end = 50;

    // Validate range
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        throw new Error("Invalid range values.");
    }

    console.log(`Numbers divisible by 5 from ${start} to ${end}:`);

    for (let i = start; i <= end; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
} catch (error) {
    console.error("Error:", error.message);
}




