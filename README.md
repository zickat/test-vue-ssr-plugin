# test-app

Steps to reproduce :

- Build app with ```npm run ssr:build```
- Run app with ```npm run ssr:start```

First time, app will load successfully, but when you reload the ui, it will failed. In localhost, I have this error
```
Uncaught (in promise) DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method.
    at Object.Zr [as appendChild] (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:39158)
    at g (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:41765)
    at h (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:41015)
    at _ (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:41851)
    at P (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:45087)
    at a.__patch__ (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:45447)
    at a.Ue.t._update (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:17525)
    at a.r (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:18420)
    at sn.get (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:20934)
    at new sn (http://localhost:8000/js/chunk-vendors.915e47f8.js:7:20852)
```
On the homepage, and
```
TypeError: Cannot read property '_isDestroyed' of undefined
    at destroy (vue.runtime.esm.js:4172)
    at C (vue.runtime.esm.js:5739)
    at C (vue.runtime.esm.js:5744)
    at a.__patch__ (vue.runtime.esm.js:6077)
    at a.Ue.t.$destroy (vue.runtime.esm.js:2719)
    at destroy (vue.runtime.esm.js:4174)
    at C (vue.runtime.esm.js:5739)
    at k (vue.runtime.esm.js:5755)
    at $ (vue.runtime.esm.js:5860)
    at j (vue.runtime.esm.js:5932)
```
on the about page