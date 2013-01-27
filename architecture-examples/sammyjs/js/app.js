(function($) {
      
        var app = $.sammy(function() {

          this.get('#/', function() {
            return "dfg";
          });

          this.post('#/', function() {
            console.log(this);
          });

          //return app;
        
        });

        var main = {
           init : function() {
            this.ENTER_KEY = 13;
            this.todos = [];
            //this.cacheElements();
            this.bindEvents();
            //this.render();
          },

           bindEvents : function() {
            //var list = this.$todoList;
            
            $('#new-todo').on('keyup', this.shit);
            
            // this.$toggleAll.on( 'change', this.toggleAll );
            // this.$footer.on( 'click', '#clear-completed', this.destroyCompleted );
            // list.on( 'change', '.toggle', this.toggle );
            // list.on( 'dblclick', 'label', this.edit );
            // list.on( 'keypress', '.edit', this.blurOnEnter );
            // list.on( 'blur', '.edit', this.update );
            // list.on( 'click', '.destroy', this.destroy );
          },

           create : function(e) {
            var $input = $(this);
            var val = $.trim( $input.val() );
            // if ( e.which !== App.ENTER_KEY || !val ) {
            //   return;
            // }
            // App.todos.push({
            //   id: Utils.uuid(),
            //   title: val,
            //   completed: false
            // });
            // $input.val('');
            // App.render();
          },

          shit : function() {
            console.log('qwert');
          }

          
        };

      $(function() {
          app.run();
          main.init();
        });
      
})(jQuery);


   