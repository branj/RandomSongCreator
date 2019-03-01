console.log('Iniatilizing Random Song Creator');



class ChromaticScale {
	constructor() {
		this.majorTones = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
		this.minorTones = ['a', 'e', 'b', 'f#', 'c#', 'g#', 'eb/d#', 'bb', 'f', 'c', 'g', 'd'];
	}
	set root(key) {
		this.rootKey = key;	
		console.log('Chromatic Scale Updated to ' + this.rootKey);
	}
	get rootIndex(){
		return this.majorTones.concat(this.minorTones).indexOf(this.rootKey) % this.majorTones.length;
	}
}

class CircleOfFifths {
	constructor(scale) {
		this.scale = scale;
	}
	set key(key) {
		this.scale.root = key;
		console.log(this.scale);
	}
	get I() {
		return this.scale.majorTones[this.scale.rootIndex];
	}
	get IV() {
		var index = this.scale.rootIndex;
		if (--index < 0 ) { index = this.scale.majorTones.length - 1; }
		return this.scale.majorTones[index];
	}
	get V() {
		return this.scale.majorTones[this.scale.rootIndex + 1 % this.scale.majorTones.length];
	}
};

class Fifth {
  constructor(major, minor) {
    this.key = key;
  }
  // Getter
  get major() {
    return this.determineKey();
  }

  get minor() {
  	return this.mnin();
  }
  // Method
  determineKey() {
    return this.key;
  }
};


$(document).ready(function(){

	rsc = {
		"ui" : {
			"keyChoice" : $('#keyChoice')

		}, 
		"events" : {
			"handleKeyChange" : function(e) {
				var selectedValue = $(e.target).val();
				console.log('Setting value to ' + selectedValue);
				rsc.circle.key = selectedValue;
				console.log(rsc.circle.I, rsc.circle.IV, rsc.circle.V);
			}
		},
		"initialize" : function() {
			scale = new ChromaticScale();
			this.circle = new CircleOfFifths(scale);
			$(this.ui.keyChoice).change(this.events.handleKeyChange)
			
		}
	}

	rsc.initialize();

});


