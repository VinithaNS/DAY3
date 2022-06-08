// 3.Read about the difference between window, screen and document in javascript
// Window:
// (i).The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser window. The window object is supported by all browsers.
// (ii).All global JavaScript objects , functions, and variables automatically become members of the window object. The window is the first thing that gets loaded into the browser .
// (iii).This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.
// Document:
// (i).The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. When an HTML document is loaded into a web browser , it becomes a document object.
// (ii).It is the root node of the HTML document. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. 
// (iii).HTML documents, served with the "text/html" content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.
// Screen:
// (i).Screen is a small information object about physical screen dimensions . It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object. It can be written without window prefix.
// Properties:screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth