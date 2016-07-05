/* global jQuery */

(function ($) {
	"use strict";

	/**
	 * @param {jQuery} $dragon
	 * @param {*} settings
	 * @constructor
	 */
	function Animator($dragon, settings) {
		this.$dragon = $dragon;
		this.settings = settings;
		this.state = 'intro';
		this.frame = { x: 0, y: 0 };
		this.offset = {};
		this.handle = undefined;
	}

	Animator.prototype.start = function () {
		this.handle = window.setInterval(
			this.loop.bind(this),
			300
		);

		this.loop();
	};

	Animator.prototype.stop = function () {
		this.state = 'landing';
	};

	Animator.prototype.loop = function () {
		var offset;

		this.frame.x += 1;

		if (this.frame.x > 3) {
			switch (this.state) {
				case 'intro':
					this.state = 'flying';
					this.loop();
					break;

				case 'flying':
					this.frame.x = 0;
					this.frame.y = Math.round(
						Math.random() * 2 + 1
					);
					break;

				case 'landing':
					offset = this.$dragon.offset();
					if (
						offset.left === this.offset.left &&
						offset.top === this.offset.top
					) {
						this.state = 'outro';
						this.frame.x = 0;
						this.frame.y = 4;
						this.loop();
					}
					else {
						this.offset = offset;
					}
					break;

				case 'outro':
					this.$dragon.remove();
					window.clearInterval(this.handle);
					break;
			}
		}

		this.$dragon.css(
			'backgroundPosition',
			'-' + (this.frame.x * this.settings.size) + 'px -' + (this.frame.y * this.settings.size) + 'px'
		);
	};

	$.fn.dragonDrop = function (options) {
		var settings = $.extend({
			size: 200
		}, options );

		return this.each(function (index, element) {
			var $this = $(element),
				$dragon;

			function start() {
				var animator;

				$dragon = $('<div class="dragon-drop-dragon">');

				$dragon.css({
					zIndex: $this.css('z-index') + 1,
					backgroundImage: 'url(../src/dragon.png)',
					backgroundPosition: '0 ' + (-settings.size) + 'px'
				});

				$this.prepend($dragon);

				animator = new Animator($dragon, settings);
				animator.start();

				function stop() {
					$this.off('mouseup', stop);
					animator.stop();
				}

				$this.on('mouseup', stop);
			}

			$this
				.addClass('dragon-drop')
				.on('mousedown', start);
		});
	};

})(jQuery);