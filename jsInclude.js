var JsInclude = (function(files) {
  var callbacks = 0;

  return {
    header: function(bundle, callback) {
      var element = document.getElementsByTagName('head')[0];
      this.appendTo(element, bundle, callback);
    },

    footer: function(bundle, callback) {
      var element = document.getElementsByTagName('body')[0];
      this.appendTo(element, bundle, callback);
    },

    appendTo: function(element, bundle, callback) {
      if (document.readyState === 'complete') {
        injectScripts();
      } else {
        window.addEventListener('load', injectScripts);
      }
      function injectScripts(){
        console.log(bundle);
        bundle.files.forEach(function(val) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          callbacks++;
          script.onload = function() {
            if (--callbacks === 0) callback();
          };
          script.src = bundle.folder + '/' + val;
          element.appendChild(script);
        });
      }
    }
  };
})(document);
