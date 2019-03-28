// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const apiManager = new APIManager()
console.log(apiManager)
const renderer = new Renderer()


const loadData = function () {
    apiManager.loadData()
}

const renderData = function () {
    renderer.render(apiManager.data)
}