var arr = clipText.split(/\r\n|\r|\n/);
var ret = [];
for (var i = 0, l = arr.length; i < l; i++) {
    ret.push("> " + arr[i]);
}
return ret.join("\n");
