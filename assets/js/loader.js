// $(document).ready(function(){
//     $("#susant").load("external.html");
//
// });
// var link = document.querySelector('link[rel="import"]');
// link.addEventListener('load', function(e) {
//   var importedDoc = link.import;
//   // importedDoc points to the document under component.html
// });


    var link = document.querySelector('link[rel="import"]');
    var content = link.import;

    // Grab DOM from warning.html's document.
    var el = content.querySelector('header');

    document.body.appendChild(el.cloneNode(true));
