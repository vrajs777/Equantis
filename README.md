these are Settings Which we need to change for switch staging to live

<b>staging settings<b>
Package.json
"homepage": "." 

Index.js

<BrowserRouter>
<App />
</BrowserRouter>


<b>Live settings<b>

Package.json
"homepage": "https://beta.equantiis.com/industry-expertise" 

Index.js

<BrowserRouter basename='industry-expertise'>
<App />
</BrowserRouter>,