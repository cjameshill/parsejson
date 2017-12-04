'use strict'

module.exports = (text) => {

	try {
		return JSON.parse(text)
	} catch(e) {
		return text
	}

}