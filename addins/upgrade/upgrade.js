﻿/// <reference path="../Office.Runtime.js" />
/// <reference path="../Excel.js" />

function getVersion() {
	return "18.7.24.2";
}

function getConst() {
	return 42;
}

function streamSequence(init, step, count, ms, context) {
	if (count > 0) {
		delay(function() {
			context.setResult(init);
			streamSequence(init + step, step, count - 1, ms, context);
		}, ms);
	}
}

function delay(func, ms) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(func());
		}, ms);
	});
}

CustomFunctionMappings = {
	VersionSync: getVersion,
	VersionAsync: getVersion,
	VersionDelayed: function(ms) { return delay(getVersion, ms); },

	ConstSync: getConst,
	ConstAsync: getConst,
	ConstDelayed: function(ms) { return delay(getConst, ms); },

	StreamSequence: streamSequence
};
