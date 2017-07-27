
var View = {
    Enable: function(name){
        var all = $("div[view="+name+"]");
        for (var i = 0; i < all.length; i++) {
            if (all[i].getAttribute("view") === name) {
                all[i].style = "visibility: visible; display: default;";
                return;
            }
        }
    },
    Disable: function(name){
        var all = $("div[view="+name+"]");
        for (var i = 0; i < all.length; i++) {
            if (all[i].getAttribute("view") === name) {
                all[i].style = "visibility: hidden; display: none;";
                return;
            }
        }

    },
    DisableAll: function(){
        var panels = $("div[view]");
        
        for (var i = 0; i < panels.length; i++) {
            panels[i].style = "visibility: hidden; display: none;";
        }
    }
};