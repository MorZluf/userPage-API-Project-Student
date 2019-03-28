// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(user) {
        $(".user-container").text("")
        let source = $('#user-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template(user)
        $(".user-container").append(newHTML)
    }

    _renderFriends(friends) {
        $(".friends-container").text("")
        let source = $("#user-friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({friends})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quote) {
        $(".quote-container").text("")
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(quote)
        $(".quote-container").append(newHTML)

    }

    _renderPokemon(pokemon) {
        $(".pokemon-container").text("")
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemon)
        $(".pokemon-container").append(newHTML)
    }

    _renderMeat(text) {
        $(".meat-container").text("")
        let source = $("#meat-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({text})
        $(".meat-container").append(newHTML)
    }

    render(data) { 
        this._renderUsers(data.user)
        this._renderFriends(data.friends)
        this._renderQuote(data.q)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.text)
        //invokes all the individual _render methods
    }
}