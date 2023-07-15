function errorHandler(error) {
    console.error(error);
  }
  
  function createJSONFile(stringInput, filename) {
    const jsonContent = JSON.stringify({ data: stringInput }, null, 2);
  
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
      const { fileSystem } = backgroundPage;
      if (!fileSystem) {
        console.error('File system not available');
        return;
      }
  
      fileSystem.root.getFile(filename, { create: true }, function (fileEntry) {
        fileEntry.createWriter(function (fileWriter) {
          fileWriter.onerror = errorHandler;
  
          const blob = new Blob([jsonContent], { type: 'application/json' });
  
          fileWriter.write(blob);
  
          chrome.downloads.download({
            url: fileEntry.toURL(),
            filename: filename,
            saveAs: false,
          });
        }, errorHandler);
      }, errorHandler);
    });
  }
  
  chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'createJSON') {
      createJSONFile(request.stringInput, request.filename);
    }
  });
  