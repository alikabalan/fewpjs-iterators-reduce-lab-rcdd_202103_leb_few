const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

 // let totalBatteries = batteryBatches.reduce((sum,batteryBatch) => sum + batteryBatch, 0)
let totalBatteries = batteryBatches.reduce((accuulator, currentValue) => accumulator + currentValue, 0)
