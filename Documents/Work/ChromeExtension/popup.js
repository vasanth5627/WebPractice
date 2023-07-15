document.addEventListener('DOMContentLoaded', function () {
    const createBtn = document.getElementById('createBtn');
    createBtn.addEventListener('click', function () {
      const dataInput = document.getElementById('data');
      const filenameInput = document.getElementById('filename');
  
      const stringInput = dataInput.value;
      const filename = filenameInput.value;
      const blob = new Blob([stringInput], { type: 'text/plain' });
      const fileURL = URL.createObjectURL(blob);
    chrome.downloads.download({
    url: fileURL,
    filename: filename,
    saveAs: true
  });

  
      chrome.runtime.sendMessage({
        action: 'createJSON',
        stringInput: stringInput,
        filename: filename
      });
    });
  });
  