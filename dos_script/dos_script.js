document.getElementById("submit").onclick = async function() {

var url = document.getElementById("url").value;
var interval = parseInt(document.getElementById("interval").value);
console.log(interval);

 var evil = setInterval(async function() {

var yes = await fetch(url);
if (yes.status == 403) {

document.body.insertAdjacentHTML("beforeend", `<pre>Cloudflare protection enabled. Either that or the server's up again</pre>`);
clearInterval(evil);
clearInterval(clear);
return;
}
document.body.insertAdjacentHTML('beforeend', `<pre class="status">${yes.status}</pre>`);
}, interval);

var clear = setInterval(async function() {

const elems = document.getElementsByClassName("status");
for (var i = 0, o = elems.length; i < o; i++) {
elems[i].remove();
}

}, 15000);


}
