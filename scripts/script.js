  // var canvasHeight = window.innerHeight;
      // var canvasWidth = window.innerWidth;
      
      // desktop, the width of the canvas is 0.66 * window height and on mobile it's fullscreen
      // if (window.innerWidth > window.innerHeight) {
      //   canvasWidth = Math.floor(window.innerHeight*0.66);
      // }

      var deepAR = DeepAR({ 
        canvasWidth: 100, 
        canvasHeight: 100,
        licenseKey: '1be645222ff0ac89ca4a02481a997c72ba473f00982cd044da74a0cfa41b0176fa1b733e036e9198',
        canvas: document.getElementById('deepar-canvas'),
        numberOfFaces: 1,
        onInitialize: function() {
          // start video immediately after the initalization, mirror = true
          deepAR.startVideo(true);

          // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

          deepAR.switchEffect(0, 'slot', '../effects/long_hat', function() {
            // effect loaded
          });
        }
      });

      deepAR.onCameraPermissionAsked = function() {
        console.log('camera permission asked');
      };

      deepAR.onCameraPermissionGranted = function() {
        console.log('camera permission granted');
      };

      deepAR.onCameraPermissionDenied = function() {
        console.log('camera permission denied');
      };

      deepAR.onScreenshotTaken = function(photo) {
        console.log('screenshot taken');
      };

      deepAR.onImageVisibilityChanged = function(visible) {
        console.log('image visible', visible);
      };

      deepAR.onFaceVisibilityChanged = function(visible) {
        console.log('face visible', visible);
      };

      deepAR.onVideoStarted = function() {
        var loaderWrapper = document.getElementById('loader-wrapper');
        loaderWrapper.style.display = 'none';
      };

      deepAR.downloadFaceTrackingModel('../lib/models-68-extreme.bin');