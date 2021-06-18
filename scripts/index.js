const websocket_endpoint = "wss://relay.aricodes.net/ws";

var areaname = document.getElementById("areaname");
var currenthp = document.getElementById("currenthp");
var areaitems = document.getElementById("areaitems");
var areascreens = document.getElementById("areascreens");
var totalitems = document.getElementById("totalitems");
var totalscreens = document.getElementById("totalscreens");
var deathcount = document.getElementById("deathcount");

window.onload = function () 
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	if (username != null) {
		const socket = new WebSocket(websocket_endpoint);
		socket.onopen = () => socket.send(`listen:${username}`);
		socket.onmessage = (event) => appendData(JSON.parse(event.data));
	}
	else {
		let mainContainer = document.getElementById("srtQueryData");
		mainContainer.innerHTML = "Please provide username params to url to listen to.";
	}
};

function appendData(data) 
{
	ClearAll();

	console.log(data);
	areaname.innerHTML = `Area Name: ${data.AreaName}`;
	currenthp.innerHTML = `HP: ${data.CurrentHP}/${data.MaxHP}`;
	areaitems.innerHTML = `Area Items: ${data.AreaItemPercent}%`;
	areascreens.innerHTML = `Area Map: ${data.AreaMapPercent}%`;
	totalitems.innerHTML = `Total Items: ${data.TotalItemPercent}%`;
	totalscreens.innerHTML = `Total Map: ${data.TotalMapPercent}%`;
	deathcount.innerHTML = `Deaths: ${data.DeathCount}`;
}

function ClearAll() {
	areaname.innerHTML = ``;
	currenthp.innerHTML = ``;
	damage.innerHTML = ``;
	areaitems.innerHTML = ``;
	areascreens.innerHTML = ``;
	totalitems.innerHTML = ``;
	totalscreens.innerHTML = ``;
	deathcount.innerHTML = ``;
	bubblecount.innerHTML = ``;
	brickcount.innerHTML = ``;
}