const fs = require("fs");
const path = require("path")

const assetsDir =  path.join(__dirname, "assets");
let assetsFolder = fs.readdirSync(assetsDir);
const outputFile = "./data.json"

const BaseUrl = "https://github.com/adrian26o/Wallpapers";

const folderUrl = "assets";

assetsFolder = assetsFolder.map(v => ({
    "name": v.split(".").slice(0,v.split(".").length - 1).join("."),
    "ext": path.extname(v),
    "url": `${BaseUrl}/blob/main/${folderUrl}/${v}?raw=true`
})
)

fs.writeFileSync(outputFile, JSON.stringify(assetsFolder))