L.Popup["Angular"] = L.Popup.extend({
	                                    onAdd: function (map: any) {
		                                    L.Popup.prototype.onAdd.call(this, map);

		                                    this.object = this.options.object;
	                                    },
                                    });

L.popup["angular"] = function (options: any) {
	return new L.Popup["Angular"](options);
};