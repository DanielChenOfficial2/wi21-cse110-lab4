setInterval(callTime, 10);

function callTime() {
	  let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
