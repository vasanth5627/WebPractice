const btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click',()=> {
    // Get the data and filename from the message
    var data = document.getElementById('data').value;
    var filename = document.getElementById('filename').value;
    console.log(data);
    console.log(filename);
  
    // Write the data to a file
    // var fs = require("fs");
    // fs.writeFileSync(filename, data);
    const blob = new Blob([data], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(blob);
    chrome.downloads.download({
    url: fileURL,
    filename: filename,
    saveAs: true
  });
  
    // Send a response to the extension
    sendResponse({
      status: "success"
    });
  });