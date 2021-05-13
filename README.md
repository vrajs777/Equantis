# These are Settings Which we need to change for switch staging to live

###### **Staging settings**

Package.json
`"homepage": "."`

Index.js

`<BrowserRouter>
<App />
</BrowserRouter>`


###### **Live settings**

Package.json
`"homepage": "https://beta.equantiis.com/industry-expertise" `

Index.js

`<BrowserRouter basename='industry-expertise'>
<App />
</BrowserRouter>,`
