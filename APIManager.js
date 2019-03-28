//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}

    }

    loadData() {

        $.ajax({
            url: "https://randomuser.me/api/?results=7",
            dataType: "json",
            success: (users) => {
                this.data.user = users.results[0]
                this.data.friends = users.results.splice(1, 6)}
        })

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*150)+1}`,
            success: (pokemon) => this.data.pokemon = pokemon
        })


        $.ajax({
            url: "http://quotes.rest/qod.json",
            success: (quote) => {
                let q = {
                    quote: quote.contents.quotes[0].quote,
                    author: quote.contents.quotes[0].author
                }
                this.data.q = q
            }
        })

        $.ajax({
            url: "https://baconipsum.com/api/?type=meat-and-filler&paras=2&format=text",
            success:(text) => this.data.text = text
        })

    



    }
}