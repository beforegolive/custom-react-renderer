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
		if (newProps.onClick) {
			element.addEventListener('click', newProps.onClick)
		}
		return element
	},

	prepareUpdate: function(
		instance,
		type,
		oldProps,
		newProps,
		rootContainerInstance,
		currentHostContext
	) {
		console.log(
			'prepareUpdate',
			instance,
			type,
			oldProps,
			newProps,
			rootContainerInstance,
			currentHostContext
		)
		return
	},
	commitUpdate: function(instance, updatePayload, type, oldProps, newProps, finishedWork) {
		console.log('commitUpdate', instance, updatePayload, type, oldProps, newProps, finishedWork)
		return
	},
	commitTextUpdate: function(textInstance, oldText, newText) {
		console.log('commitTextUpdate', textInstance, oldText, newText)
		textInstance.nodeValue = newText
	},
	appendInitialChild: function(parent, child) {
		console.log('appendInitialChild', parent, child)
		parent.appendChild(child)
	},
	shouldSetTextContent: function(type, nextProps) {
		console.log('shouldSetTextContent', type, nextProps)
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
	appendChild: function(parentInstance, child) {
		console.log('appenChild', parentInstance, child)
		parentInstance.appendChild(child)
	},
	insertBefore: function(parentInstance, child, beforeChild) {
		console.log('insertBefore', parentInstance, child, beforeChild)
		parentInstance.insertBefore(child, beforeChild)
	},
	removeChild: function(parentInstance, child) {
		console.log('removeChild', parentInstance, child)
		parentInstance.removeChild(child)
	},
	insertInContainerBefore: function(container, child, beforeChild) {
		console.log('insertInContainerBefore', container, child, beforeChild)
		container.insertBefore(child, beforeChild)
	},
	removeChildFronContainer: function(container, child) {
		console.log('removeChildFromContainer', container, child)
		container.removeChild(child)
	},
	resetTextContent: function(domElment) {
		console.log('resetTextContent', domElment)
	},
	shouldDeprioritizeSubtree: function(type, nextProps) {
		console.log('shouldDeprioritizeSubtree', type, nextProps)
		return !!nextProps.hidden
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
