const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// استخدام reduce لحساب مجموع البطاريات
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // الناتج: 31
