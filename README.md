# view.js
view.js - script for panel/section/element display management, easier advanced single-page sites
This is my script which I'm using for all of my web apps.

## Example
```HTML
<div view="test1"> Hello, World! I am test1 </div>
<div view="test2"> I am test2 </div>
<div view="test3"> I am test3 </div>

<script>
  View.DisableAll();
  View.Enable("test1");
  View.Enable("test3");
</script>
```
