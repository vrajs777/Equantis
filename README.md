these are Settings Which we need to change for switch staging to live

<b>staging settings<b><br/>
Package.json
"homepage": "." 

Index.js

```HTML<BrowserRouter>
<App />
</BrowserRouter>```


<b>Live settings<b>

Package.json
"homepage": "https://beta.equantiis.com/industry-expertise" 

Index.js

```HTML<BrowserRouter basename='industry-expertise'>
<App />
</BrowserRouter>,```