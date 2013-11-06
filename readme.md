# Mobile phone Presentation Controller

```
npm install
Make
node server
open localhost:3001
open localhost:3001/slides.html
click on next (on index.html)

you should see 'move slide next' in the console of slides.html
```


```
phone.html                  server.js              slides.html
+------------+             +------------+          +------------+
| next slide |             |            |          |            |
|            |   +---->    | WebSockets | +---->   |            |
|            |             |            |          |            |
| prev slide |             |            |          |            |
+------------+             +------------+          +------------+
```
