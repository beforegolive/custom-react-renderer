const Reconciler = require('react-reconciler')
const HostConfig = {
	now: Date.now,
	getRootHostContext: function(nextRootInstance) {
		console.log('getRootHostContext', nextRootInstance)
		let rootContext = {}
		return rootContext
	},

	getChildHostContext: function(parentContext, fiberType, rootInstance) {
		console.log('getChildHostContext', parentContext, fiberType, rootInstance)
		let context = { type: fiberType }
		return context
	},
	createTextInstance: function(
		nextText,
		rootContainerInstance,
		currentHostContext,
		workInProgress
	) {
		console.log(
			'createTextInstance',
			nextText,
			rootContainerInstance,
			currentHostContext,
			workInProgress
		)
		return document.createTextNode(nextText)
	},
	createInstance: function(
		type,
		newProps,
		rootContainerInstance,
		currentHostContext,
		workInProgress
	) {
		console.log(
			'createInstance',
			type,
			newProps,
			rootContainerInstance,
			currentHostContext,
			workInProgress
		)
		const element = document.createElement(type)
		element.className = newProps.className || ''
		element.style = newProps.style
		return element
	},
	appendInitialChild: function(parent, child) {
		console.log('appendInitialChild', parent, child)
		parent.appendChild(child)
	},
	shouldSetTextContent: function(type, nextProps) {
		console.log('shouldsetTextContent', type, nextProps)
		return false
	},

	finalizeInitialChildren: function(
		instance,
		type,
		newProps,
		rootContainerInstance,
		currentHostContext
	) {
		console.log(
			'finalizeInitialChildren',
			instance,
			type,
			newProps,
			rootContainerInstance,
			currentHostContext
		)
		return newProps.autofocus
	},

	prepareForCommit: function(...args) {
		console.log('prepareForCommit', ...args)
	},
	resetAfterCommit: function(...args) {
		console.log('resetAfterCommit', ...args)
	},
	commitMount: function(domElement, type, newProps, fiberNode) {
		console.log('commitMount', domElement, type, newProps, fiberNode)
		domElement.focus()
	},

	appendChildToContainer: (parent, child) => {
		console.log('appendChildToContainer ', parent, child)
		if (child !== undefined) parent.appendChild(child)
	},
	removeChildFromContainer: function(...args) {
		console.log('removeChildFromContainer', ...args)
	},
	supportsMutation: true
}

const reconcilerInstance = Reconciler(HostConfig)

const CustomRenderer = {
	render(element, renderDOM, callback) {
		const isAsync = false
		const container = reconcilerInstance.createContainer(renderDOM, isAsync)

		const parentComponent = null
		reconcilerInstance.updateContainer(element, container, parentComponent, callback)
	}
}

module.exports = CustomRenderer
