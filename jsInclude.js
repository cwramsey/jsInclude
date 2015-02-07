var JsInclude = (function(document) {
  var callbacks = 0;

  return {
    header: function(bundle, callback) {
      var head = document.getElementsByTagName('head')[0];
      appendTo(head, bundle, callback);
    },

    footer: function(bundle, callback) {
      var body = document.getElementsByTagName('body')[0];
      appendTo(body, bundle, callback);
    },

    appendTo(element, bundle, callback) {
      if (document.readyState === 'complete') {
        injectScripts();
      } else {
        window.addEventListener('load', injectScripts);
      }
      function injectScripts(){
        bundle.files.forEach(function(val) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          callbacks++;
          script.onload = function() {
            if (--callbacks === 0) callback();
          };
          script.src = files.folder + "/" + val;
          body.appendChild(script);
        });
      }
    }
  };
})(document);
