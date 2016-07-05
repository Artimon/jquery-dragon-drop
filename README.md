# jQuery Dragon Drop
Enhances your drag &amp; drop by a dragon!

![alt tag](https://github.com/Artimon/jquery-dragon-drop/blob/master/screenshot.png?raw=true)

### How can I use it?

The jQuery Dragon Drop Plugin should be compatible with most Drag & Drop plugins. Simply apply it to the containers of your drag & drop grid. Thus when your grid is a &lt;ul&gt; the apply the dragon drop to the &lt;li&gt; tags as shown in the demo file under the /example folder.

### Setup

**1. Include jQuery Dragon Drop sources**

Example:
```html
<link rel="stylesheet" href="css/vendor/jquery.dragon-drop.css">
...
<script type="application/javascript" src="js/vendor/jquery-3.0.0.min.js"></script>
<script type="application/javascript" src="js/vendor/jquery.dragon-drop.js"></script>
```

**2. Apply Dragon Drop to your grid**

```js
$(function () {
	$('.gridster ul').gridster({ ... }); // Using gridster for example.
	$('.gridster li').dragonDrop(); // Apply dragon drop to grid elements.
});
```

License
----

MIT


**Free Software for your enjoyment!**