
'use strict';

var _ = require('lodash');

function colors(prev, entry, entryNameFormat) {
    if (entry.type === 'color' && entry.color.hex) {
        prev.push({hex: '#' + entry.color.hex, name: entry.name});
        return prev;
    } else if (entry.type === 'group') {
        return entry.entries.reduce(function (p, e) { return colors(p, e, entryNameFormat); }, prev);
    }
    return prev;
}

module.exports = function (input, entryNameFormat) {
    entryNameFormat = entryNameFormat || _.kebabCase;

    const initialValue = [];
    const res = input.reduce(function (prev, entry) {
        return colors(prev, entry, entryNameFormat);
    }, initialValue);
    return res;
};