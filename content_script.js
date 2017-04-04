var iconURL = chrome.extension.getURL("lornchlogo.png");

var images = document.getElementsByClassName("logo");
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = iconURL;
}

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

  v = v.replace(/\bLaunch\b/g, "Lornch");
	v = v.replace(/\bAcademy\b/g, "Ablademy");
	v = v.replace(/\bHorizon\b/g, "Hozirom");

	textNode.nodeValue = v;
}
