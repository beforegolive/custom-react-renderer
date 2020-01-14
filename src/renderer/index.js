const CustomRenderer = {
	render(element, renderDOM, callback) {
		console.log('renderer called', element, renderDOM, callback)
	}
}

module.exports = CustomRenderer
