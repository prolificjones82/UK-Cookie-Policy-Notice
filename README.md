#UK Cookie Policy Notice
*A simple plugin to notify users you adhere to the UK's cookie policies*

Updated in May 2012, the ICO set out the changes to the cookies law and explains the steps you need to take to ensure you comply. The updated guidance provides additional information around the issue of implied consent:

- Implied consent is a valid form of consent and can be used in the context of compliance with the revised rules on cookies.
- If you are relying on implied consent you need to be satisfied that your users understand that their actions will result in cookies being set. Without this understanding you do not have their informed consent.
- You should not rely on the fact that users might have read a privacy policy that is perhaps hard to find or difficult to understand.
- In some circumstances, for example where you are collecting sensitive personal data such as health information, you might feel that explicit consent is more appropriate.

This small plugin ensure your website conforms to these guidelines.

##How to use

Upload `cookie_policy_functions.js` and `cookie_policy_styles.css` to your server and link to them in the head tags of your home page.

```html
<script type="text/javascript" src="cookie_policy_functions.js"></script>
<link rel="stylesheet" type="text/css" href="cookie_policy_styles.css" />
```

You will need to add an `onload` element to your body tag for the plugin to work properly.

```html
<body onload="getCookie('cookie_policy');">
```

Finally, just under your edited body tag drop in the code found in `cookie_policy_snippet.html`.

```html
<div id="cookie_container">
  <div class="policy_wrapper">
  	<div class="leftcontainer">
			We use cookies on this website, by continuing to be here we will take it you agree to us using them.
		</div>

		<a class="button" href="#" onclick="setCookie('cookie_policy','true',365); return false;">I Agree</a>
	</div>
</div>
```

If you have done it correctly your page should look something like this:

```html
<html>
<head>

<script src="cookie_policy_functions.js"></script>
<link rel="stylesheet" href="cookie_policy_styles.css" />

<title>UK Cookie Policy</title>

</head>
<body onload="getCookie('cookie_policy');">

<div id="cookie_container">
  <div class="policy_wrapper">
		<div class="leftcontainer">
			We use cookies on this website, by continuing to be here we will take it you agree to us using them.
		</div>
		
		<a class="button" href="#" onclick="setCookie('cookie_policy','true',365); return false;">I Agree</a>
	</div>
</div>

</body>
</html>
```

##Licence

Copyright (c) 2013 Lee Jones
Licensed under GNU Lesser General Public License.
