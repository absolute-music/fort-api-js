/**
 * An API returned StoreItem object
 * @class StoreItem
 */
const fs = require("fs")
let installed;
try{
 fs.accessSync("./node_modules/discordlib")
 premium = true;
}catch(err){
 premium = false;
}
class StoreItem {
    if(premium !== true){
     throw new Error("Premium not enabled")
    }
    constructor(content) {
        /**
         * Link to picture of the item
         * @type {string}
         */
        this.imageUrl = content.imageUrl;

        /**
         * ID of the item
         * @type {number}
         */
        this.manifestId = content.manifestId;

        /**
         * Name of the item
         * @type {string}
         */
        this.name = content.name;

        /**
         * Rarity of the item
         * @type {string}
         */
        this.rarity = content.rarity;

        /**
         * Category of the store the item is in (BRDailyStorefront or BRWeeklyStorefront)
         * @type {string}
         */
        this.storeCategory = content.storeCategory;

        /**
         * Cost of the item in vBucks
         * @type {number}
         */
        this.vBucks = content.vBucks;
    }
}

module.exports = StoreItem;
