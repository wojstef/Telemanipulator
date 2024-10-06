function startFeed(feedId, feedEndpoint) {
    document.getElementById(feedId).src = `http://192.168.0.102:5000/${feedEndpoint}?${Date.now()}`;
}

function stopFeed(feedId) {
    document.getElementById(feedId).src = '';
}

function executeTask1() {
    fetch("http://192.168.0.102:5000/task1", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
}

function executeTask2() {
    fetch("http://192.168.0.102:5000/task2", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
  }
  
  function stopProcess() {
    fetch("http://192.168.0.102:5000/stop", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
  }

  function executeReset() {
    fetch("http://192.168.0.102:5000/reset", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
} 

  
function setPosition() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let z = document.getElementById('z').value;
    
    fetch('/set_position', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({x: x, y: y, z: z}),
    })
    .then(response => response.text())
    .then(data => console.log(data));
}

function updateMessage() {
    fetch("http://192.168.0.102:5000/get_message")
        .then(response => response.json())
        .then(data => {
            document.getElementById('messageBox').value = data.message;
        })
        .catch(error => console.error('Error:', error));
}
setInterval(updateMessage, 1000);  // Update every 1 second

function setHome() {
    fetch('/set_home', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
    .then(response => response.text())
    .then(data => console.log(data));
}
