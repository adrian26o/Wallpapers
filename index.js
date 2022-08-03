const BaseUrl = "https://adrian26o.github.io/Wallpapers";

class container {
    constructor(name, ext, url) {
        this.name = name;
        this.ext = ext.slice(1);
        this.url = url;
        this.div = document.createElement("div");
        this.div.className = "container";

        let title = document.createElement("h3");
        title.textContent = this.name.length > 30 ? this.name.slice(0,27) + "...": this.name;
        title.class = "imageTitle"
        this.div.appendChild(title);

        let image = document.createElement("img");
        image.src = this.url
        this.div.appendChild(image)

        this.#detectExtension();
    }

    #detectExtension() {
        switch(this.ext) {
            case "png":
                this.div.className += " png"
        }
    }
}

async function getJSON() {
    let response = await (await fetch(`${BaseUrl}/data.json`)).json()
    return response
}

async function main() {
/**
 * @type [{"name":string,"ext":string,"url":string}]
 */
    const response = await getJSON();

    response.forEach(image => {
        let con = new container(image.name,image.ext,image.url)

        document.body.appendChild(con.div)
    })
}

main();