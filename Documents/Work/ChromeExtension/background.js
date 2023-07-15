chrome.runtime.onInstalled.addListener(function () {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
      if (!backgroundPage.fileSystem) {
        window.webkitRequestFileSystem(
          window.PERSISTENT,
          5 * 1024 * 1024, // 5MB
          function (fs) {
            backgroundPage.fileSystem = fs;
          },
          errorHandler
        );
      }
    });
  });   
  