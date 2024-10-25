// chapter 79: Browser control Filling the window with content

 var monkeyWindow = window.open();


//  filling the window with some html content
var windowContent = `<h1> This is heading one </h1> 
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, 
eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
dicta sunt explicabo. </p>`
monkeyWindow.document.write(windowContent);