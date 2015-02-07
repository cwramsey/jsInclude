var JsInclude = {
    header: function(files, callback) {
        window.onload = function(){
            var head = document.getElementsByTagName('head')[0];

            files.files.forEach(function(val) {
                var script= document.createElement('script');
                script.type= 'text/javascript';
                script.src = files.folder + "/" + val;
                head.appendChild(script);
            });

            if (callback) {
                callback();
            }
        };
    },

    footer: function(files, callback) {
        window.onload = function(){
            var body = document.getElementsByTagName('body')[0];

            files.files.forEach(function(val) {
                var script= document.createElement('script');
                script.type= 'text/javascript';
                script.src = files.folder + "/" + val;
                body.appendChild(script);
            });

            if (callback) {
                callback();
            }
        };
    }
};