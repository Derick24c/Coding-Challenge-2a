let itemName = "USB-C Cable";
let unitCost = 3.25;
let currentStock = 120;
let reorderLevel = 30;
let targetStock = 150;
let weeklyDemand = 15;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;


console.log("Item:", itemName, "Weeks Of Cover:", weeksOfCover.toFixed(2), "Reorder Now?:", reorderNow, "Recommended Reorder Quantity:", reorderQuantity, 
"Estimated Reorder Cost:", estimatedReorderCost.toFixed(2));