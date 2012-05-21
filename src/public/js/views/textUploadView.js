define([ 'jquery', 'underscore', 'backbone', 'form',
		'text!templates/textUploadView.html', 'text!templates/textUploadViewAnon.html' ], function($, _, Backbone, Form,
		template, templateAnon) {

	return Backbone.View.extend({

		intialize : function() {
			_.bindAll(this);

		},

		render : function() {
			console.log("Rendering upload view");
			if (this.options.loginModel.get("loggedIn") == true) {
				$(this.el).html(template);
			} else {
				$(this.el).html(templateAnon);
			}

			return this;
		}
	});

});