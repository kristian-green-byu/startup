# CS260 Notes
These notes comprise all my notes for CS260, and they may also be used on exams.
### Git Hub Commands
From the GitHub lesson, several useful commands were shown.

git clone
>clones a repository

git add <file_name> 
>adds a file to a repository

git commit -am "your comment here"
>will commit a change to a repository along with a comment.

git push 
>uploads the changes from your development environment to VSCode

git fetch
>gets the latest information about the changes on GitHub without actually changing your local repository.

git status
>shows the differences between the clones and see that we are missing as a commit.

git pull
>makes your development clone and the GitHub clone the same.

Removing conflicts
>You can remove conflicts by modifying the file to remove the textual conflict delimiters
and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

## HTML Info


## Elements and tags

HTML `elements` are represented with enclosing `tags` that may enclose other elements or text. For example, the paragraph element, and its associated tag (`p`), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (`<`) and greater than (`>`) symbols. A closing tag will also have a forward slash (`/`) before its name.

```html
<p>Hello world</p>
```

## Attributes

Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the `id` attribute gives a unique ID to the element so that you can distinguish it from other elements. The `class` attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (`'`) or double quotes (`"`) to delimit attribute values.

```html
<p id="hello" class="greeting">Hello world</p>
```

## Hyperlinks

One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (`a`) element that has an attribute containing the address of the hyperlink reference (`href`). A hyperlink to BYU's home page looks like this:

```html
<a href="https://byu.edu">Go to the Y</a>
```

## Common elements

List of common HTML elements.

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

## Comments

You can include comments in your HTML files by starting the comment with `<!--` and ending it with `-->`. Any text withing a comment block will be completely ignored when the browser renders it.

```html
<!-- commented text -->
```

## Special characters

HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the `entity` syntax. For example, to display a less than symbol (`<`) you would instead use the less than entity (`&lt;`). You can also use the entity syntax to represent any unicode character.

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

## Block and inline

There is a distinction between structure elements that are block vs inline. A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. In other words, inline elements do not disrupt the flow of a block element's content. For example, the block element `div` (division) could have an inline element `b` in order to bring attention to a portion of its sub-text. Likewise a `p` (paragraph) element could have a `span` to mark the paragraph's sub-text as a person's name.

```html
<div>He said <b>don't</b> cross the beams.</div>

<p>Authors such as <span>ee cummings</span> often used unconventional structure.</p>
```

## Form element

The main purpose of the `form` element is to submit the values of the inputs it contains. Before JavaScript was introduced the `form` container element was essential because it was the only way for the browser to send the input data to a web server as part of a request to process the input and generate a new web page displaying the result of the input. With JavaScript we have much more control over input data and what is done with it. For example, in a single page application the JavaScript will dynamically rebuild the HTML elements to reflect the results of the user interaction. With this ability the data may not even be sent to the server. This greatly reduces the necessity of the `form` element, but it is often still used simply as a container. Just remember that you are not required to have a form element to use input elements.

Here is an example of a simple form that submits the value of a `textarea` element.

```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```

Pressing the submit button sends the following data to the web server. The browser generates the data by combining the textarea's `name` attribute with the current value of the textarea.

```
ta-id=Some+text
```

## Input element

The input element represents many different input types. You set the type of input with the `type` attribute. There are several different types to choose from. This includes different flavors of textual, numeric, date, and color inputs.

In order to create an input you specify the desired `type` attribute along with any other attribute associated with that specific input. Here is an example of a checked radio button and its associated label.

```html
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```

Most input elements share some common attributes. These include the following.

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

The following shows what the inputs look like when rendered. Don't worry about how clunky they look right out of the box. We will fix that when we start styling things with CSS.

![HTML Input](htmlInput.jpg)

## Validating input

Several of the input elements have validation built into them. This means that they will not accept a value that is not for example, a number, a URL, outside of a range, or an email address. You can also specify the `required` attribute on an input element to mark it as requiring a value before it can be submitted. The `pattern` attribute exists on `text`, `search`, `url`, `tel`, `email`, and `password` inputs. When present, the pattern attribute provides a regular expression that must match for the input to be considered as valid.

You should also have validation built into your JavaScript that checks input data to ensure everything is valid before it is submitted. All of the input elements support functions for determining their validation state. Additionally, there are CSS style selectors for visualizing the validity of the input. In order to have a good user experience, it is critical that you provide sufficient user feedback early in the input process. A good design will give feedback as, or before, the user begins to input. A poor design will keep the user guessing as to why the data is not being accepted, or even if it was accepted.

# HTML media elements

The HTML elements that represent media include `img`, `audio`, `video`, `svg`, and `canvas`. The `img`, `audio`, and `video` elements are all simple references to an external file, but `svg` and `canvas` both contain the code to render a visual image that can even be animated.

## External media

The media tags that reference external media all take a URL as an attribute. The path represented by the URL can either be a relative path or full path. A full path includes the protocol, domain name, and path to the file.

```html
https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg
```

A relative path references a file that is served from the same location as the HTML page rendering the element. You want to make the path as relative as possible so that you can move your code around without having to actually adjust all of the external page references. For example, if your HTML page is located in a directory with a subdirectory named `images` that contains a file named `photo.jpg` you would use a relative path as follows.

```html
images/photo.jpg
```

### Image

To include an image in your content you use the `img` element and specify the `src` attribute with the URL to the source image.
In order to support accessibility, you should also include an `alt` attribute that describes the image. A full img element would look like the following.

```html
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```

![mountain landscape](htmlImage.jpg)

### Audio

To include an audio file in your content you use the `audio` element and specify the `src` attribute with the URL to the source audio file. You can include the `controls` attribute if you want the user to be able to control the audio playback. If you do not display the controls then there is no visual representation of the audio in the rendered page. The `autoplay` attribute starts the audio playing as soon as the audio file is loaded, and the `loop` attribute keeps it playing over and over.

⚠ Note that automatically playing audio is strongly discouraged unless you provide a way for the user to opt-in to that behavior.

```html
<audio controls src="testAudio.mp3"></audio>
```

![Html Audio](htmlAudioImg.jpg)

### Video

To include a video in your content you use the `video` element and specify the `src` attribute with the URL to the source video. Like the audio element you can include the `controls` or `autoplay` attributes.

⚠ Note that you may need to include the `crossorigin="anonymous"` attribute if you are requesting files from a different domain than the one serving your content.

```html
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

![HTML video](htmlVideoImg.jpg)

## Internal media

The internal media elements `svg` and `canvas` allow you to actually create images directly within your HTML.

### Scalable Vector Graphics (SVG)

SVG is an extremely powerful and widely supported way to render graphics inline in your HTML. An example SVG graphic that draws a black border and a red circle looks like this:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```

![SVG demo](htmlSvg.jpg)

When combined with JavaScript and CSS you can produce some amazing visualizations. Checkout this [CodePen](https://codepen.io/leesjensen/pen/mdKjMLY) for an example.

Consult the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/SVG) if you are interested in learning more about SVG.

### Canvas

The `canvas` element was introduced to HTML in order to facilitate 2D drawing and animation. The HTML for the canvas element is fairly simple, but actually drawing on the canvas requires JavaScript support. Here again, is our simple red dot example.

```html
<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```

```css
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```

The selector `p` selects all paragraph elements in the HTML document. The four specified declarations then: 1) change the font to use a sans-serif font, 2) increase the font size to be twice as big as the default font, 3) change the text color to be navy, and 4) create a gray shadow for the text. The result looks like this.

![CSS simple rule](cssSimpleRule.jpg)

# Default CSS Values for HTML Elements

The table below shows the default CSS browser values for all HTML elements.
Element 	Default CSS Value 	Try it

a:link 	color: (internal value);
text-decoration: underline;
cursor: auto; 	

a:visited 	color: (internal value);
text-decoration: underline;
cursor: auto; 	

a:link:active 	color: (internal value);
	
a:visited:active 	color: (internal value);
	
abbr 	None. 	

address 	display: block;
font-style: italic; 	

area 	display: none; 	

article 	display: block; 	

aside 	display: block; 	

audio 	None. 	

b 	font-weight: bold; 	

base 	None. 	

bdi 	None. 	

bdo 	unicode-bidi: bidi-override; 	

blockquote 	display: block;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 40px;

margin-right: 40px; 	

body 	display: block;

margin: 8px; 	

body:focus 	outline: none; 	

br 	None. 	

button 	None 	

canvas 	None. 	

caption 	display: table-caption;

text-align: center; 	

cite 	font-style: italic; 	

code 	font-family: monospace; 	

col 	display: table-column; 	

colgroup 	display: table-column-group 	

datalist 	display: none; 	

dd 	display: block;

margin-left: 40px; 	

del 	text-decoration: line-through; 	

details 	display: block; 	

dfn 	font-style: italic; 	

dialog 	None. 	

div 	display: block; 	

dl 	display: block;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 0;

margin-right: 0; 	

dt 	display: block; 	

em 	font-style: italic; 	

embed:focus 	outline: none; 	

fieldset 	display: block;

margin-left: 2px;

margin-right: 2px;

padding-top: 0.35em;

padding-bottom: 0.625em;

padding-left: 0.75em;

padding-right: 0.75em;

border: 2px groove (internal value); 	

figcaption 	display: block; 	

figure 	display: block;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 40px;

margin-right: 40px; 	

footer 	display: block; 	

form 	display: block;

margin-top: 0em; 	

h1 	display: block;
font-size: 2em;
margin-top: 0.67em;
margin-bottom: 0.67em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

h2 	display: block;
font-size: 1.5em;
margin-top: 0.83em;
margin-bottom: 0.83em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

h3 	display: block;
font-size: 1.17em;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

h4 	display: block;
margin-top: 1.33em;
margin-bottom: 1.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

h5 	display: block;
font-size: .83em;
margin-top: 1.67em;
margin-bottom: 1.67em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

h6 	display: block;
font-size: .67em;
margin-top: 2.33em;
margin-bottom: 2.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold; 	

head 	display: none; 	

header 	display: block; 	

hr 	display: block;
margin-top: 0.5em;
margin-bottom: 0.5em;
margin-left: auto;
margin-right: auto;
border-style: inset;
border-width: 1px; 	

html 	display: block; 	

html:focus 	outline: none; 	

i 	font-style: italic; 	

iframe:focus 	outline: none; 	

iframe[seamless] 	display: block; 

img 	display: inline-block; 	

input 	None. 	

ins 	text-decoration: underline; 	

kbd 	font-family: monospace; 	

label 	cursor: default; 	

legend 	display: block;

padding-left: 2px;

padding-right: 2px;

border: none; 	

li 	display: list-item; 	

link 	display: none; 	

main 	None. 	

map 	display: inline; 	

mark 	background-color: yellow;
color: black; 	

menu 	display: block;
list-style-type: disc;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 0;
margin-right: 0;
padding-left: 40px; 	

menuitem 	None. 	

meta 	None. 	

meter 	None. 	

nav 	display: block; 	

noscript 	None. 	

object:focus 	outline: none; 	

ol 	display: block;
list-style-type: decimal;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 0;
margin-right: 0;
padding-left: 40px; 	

optgroup 	None. 	

option 	None. 	
output 	display: inline; 	
p 	display: block;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 0;
margin-right: 0; 	
param 	display: none; 	
picture 	None. 	
pre 	display: block;
font-family: monospace;
white-space: pre;
margin: 1em 0; 	
progress 	None. 	
q 	display: inline; 	
q::before 	content: open-quote; 	
q::after 	content: close-quote; 	
rp 	None. 	
rt 	line-height: normal; 	
ruby 	None. 	
s 	text-decoration: line-through; 	
samp 	font-family: monospace; 	
script 	display: none; 	
section 	display: block; 	
select 	None. 	
small 	font-size: smaller; 	
source 	None. 	
span 	None. 	
strike 	text-decoration: line-through; 	
strong 	font-weight: bold; 	
style 	display: none; 	
sub 	vertical-align: sub;
font-size: smaller; 	
summary 	display: block; 	
sup 	vertical-align: super;
font-size: smaller; 	
table 	display: table;
border-collapse: separate;
border-spacing: 2px;
border-color: gray; 	
tbody 	display: table-row-group;
vertical-align: middle;
border-color: inherit; 	
td 	display: table-cell;
vertical-align: inherit; 	
template 	None. 	
textarea 	None. 	
tfoot 	display: table-footer-group;
vertical-align: middle;
border-color: inherit; 	
th 	display: table-cell;
vertical-align: inherit;
font-weight: bold;
text-align: center; 	
thead 	display: table-header-group;
vertical-align: middle;
border-color: inherit; 	
time 	None. 	
title 	display: none; 	
tr 	display: table-row;
vertical-align: inherit;
border-color: inherit; 	
track 	None. 	
u 	text-decoration: underline; 	
ul 	display: block;
list-style-type: disc;
margin-top: 1em;
margin-bottom: 1 em;
margin-left: 0;
margin-right: 0;
padding-left: 40px; 	
var 	font-style: italic; 	
video 	None. 	
wbr 	None.



## Associating CSS with HTML

There are three ways that you can associate CSS with HTML. The first way is to use the `style` attribute of an HTML element and explicitly assign one or more declarations.

```html
<p style="color:green">CSS</p>
```

The next way to associate CSS is to use the HTML `style` element to define CSS rules within the HTML document. The `style` element should appear in the `head` element of the document so that the rules apply to all elements of the document.

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```

The final way to associate CSS is to use the HTML `link` element to create a hyperlink reference to an external file containing CSS rules. The `link` element must appear in the `head` element of the document.

```html
<link rel="stylesheet" href="styles.css" />
```

**styles.css**

```css
p {
  color: green;
}
```

All of the above examples are equivalent, but using the `link` element usually is the preferred way to define CSS.

## Cascading styles

Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. For example, we might set color property for all `body` elements to be red, and then `paragraph` elements to be green, and then `span` elements to be blue, and finally use a style element on a specific `span` to be black.

```html
<body>
  <p><span style="color:black">CSS</span></p>
</body>
```

```css
body {
  color: red;
}
p {
  color: green;
}
span {
  color: blue;
}
```

In this case, the rules cascade down from the highest nodes in the DOM tree to the lowest level. Any declaration property defined at a lower level will override the higher declaration. You can see this happening if you use the browser's debugger. In Chrome right click on the element and select `inspect`. You can then click on each element in the debugger and see what the value of the color property is. For the case defined above you will see that each of the higher level declarations is crossed out until you get to the style explicitly defined on the element.

![CSS cascade](cssCascading.jpg)

## The box model

CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.

![CSS box model](boxmodelcss.png)

By default, the width and height of an element is defined by the width and height of the content box. You can change the `box-sizing` CSS property from the default value of `content-box` to `border-box` in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.

The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. Let's image a simple document describing the departments in a university. In our case we have a physics and a chemistry department. The information provided is very sparse, but the structure provided by the HTML is enough to work with.

```html
<body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>
```

By default every browser defines a base set of styles that it applies to all HTML. This varies slightly from browser to browser, but for the most part our document would render like this using the base browser styles.

![CSS selectors base]([cssSelectorBase.jpg](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/css/selectors/cssSelectorBase.jpg))

We would like to style our document so that it looks like this when we are done.

![CSS selectors final]([cssSelectorFinal.jpg](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/css/selectors/cssSelectorFinal.jpg))

## Element type selector

To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the `body` element we will cascade our declaration down to all the children of the body, which is the whole document.

```css
body {
  font-family: sans-serif;
}
```

Note that we could also use the wildcard element name selector (`*`) to select all elements, but for our needs the `body` element will work just fine.

We can also use element name selectors to give a bottom border to the top level heading (`h1`), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins.

```css
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```

## Combinators

Next we want to change the color of the second level headings (`h2`), but we only want to do that within the sections for each department. To make that happen we can provide a `descendant combinator` that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all `h2` elements that are descendants of `section` elements.

```css
section h2 {
  color: #004400;
}
```

There are other types of combinators that you can use. These include the following.

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.

```css
h2 ~ p {
  padding-left: 0.5em;
}
```

## Class selector

The next selector we will use is the class selector. Remember that any element can have zero or more classifications applied to it. For example, our document has a class of `introduction` applied to the first paragraph, and a class of `summary` applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (`.summary`).

```css
.summary {
  font-weight: bold;
}
```

You can also combine the element name and class selectors to select all paragraphs with a class of summary.

```css
p.summary {
  font-weight: bold;
}
```

## ID selector

ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (`#`). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.

```css
#physics {
  border-left: solid 1em purple;
}
```

## Attribute selector

Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (`a[href]`). You can also specify a required value for an attribute (`a[href="./fish.png"]`) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (`p[href*="https://"]).

```css
p[class='summary'] {
  color: red;
}
```

## Pseudo selector

CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

```css
section:hover {
  border-left: solid 1em purple;
}
```
# CSS Declarations

CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

## Units

You can use a variety of units when defining the size of a CSS property. For example, the width of an element can be defined using absolute units such as the number of pixels (`px`) or inches (`in`). You can also use relative units such as a percentage of the parent element (`50%`), a percentage of a minimum viewport dimension (`25vmin`), or a multiplier of the size of the letter m (`1.5rem`) as defined by the root element.

```css
p {
  width: 25%;
  height: 30vh;
}
```

Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

## Color


CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

# CSS Fonts

The CSS `font-family` property defines what fonts should be used. The property value represents an ordered list of fonts. The first font in the list that is available will be used. This ability to select from a list of fonts is important because different operating systems have different default fonts and your first choice may not be available.

## Font families

There are four major families of fonts: `Serif`, `sans-serif`, `fixed`, and `symbol`. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes; sans-serif fonts do not. Fixed fonts characters all are the same size. This is useful for lining up text when doing things like coding or displaying tabular data. Symbol fonts represent non-language characters such as arrows or emojis.

## Importing fonts

In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the `@font-face` rule and provide the font name and source location.

```css
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

If you do not want to host font files on your server, then you can load them from a font provider. For example, Google provides a large selection of [open source fonts](https://fonts.google.com/) that you can use without paying any royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatically generate the CSS for importing the font.

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
# CSS Animation

Using CSS to animate your components is an easy way to make your application feel alive and interactive. You create CSS animations using the `animation` properties and defining `keyframes` for what the element should look like at different times in the animation. Let's walk through an example.

We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height.

```css
p {
  text-align: center;
  font-size: 20vh;
}
```

To make this happen we specify that we are animating the selected elements by adding the `animation-name` property with a value of demo. This name refers to the name of the `keyframes` that we will specify in a minute. The keyframes tell what CSS properites should be applied at different key points in the animation sequence. We also add an `animation-duration` property in order to specify that the animation should last for three seconds.

```css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```

Now we are ready to create the keyframes. We don't have to define what happens at every millisecond of the animation. Instead we only need to define the key points, and CSS will generate a smooth transition to move from one keyframe to another. In our case we simply want to start with text that is invisible and have it zoom into the full final size. We can do this with two frames that are designated with the keywords `from` and `to`.

```css
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```

That's everything we need to do. However, let's make one more addition. It would look better if towards the end, the paragraph bounced out a little bigger than its final size. We can accommodate that by adding another key frame that happens 95 percent through the animation.

```css
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```
# Responsive design


Modern web applications are expected to run well on a large variety of computing devices. This includes everything from desktops, to mobile phones, to shopping kiosks, to car dashboards. This ability to reconfigure the interface so the application accommodates and takes advantage of the screen's size and orientation is called `responsive design`.

Much of HTML and CSS is already fluid due to the fact that it responds to the browser window being resized. For example a paragraph element will resize when the browser window is resized. However, the following features can completely change the layout of the application based on the device's size and orientation.

## Display


The CSS display property allows you to change how an HTML element is displayed by the browser. The common options for the display property include the following.

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

We can demonstrate the different CSS display property values with the following HTML that contains a bunch of `div` elements. By default `div` elements have a display property value of `block`.

```html
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```


If we modify the display property associated with each element with the following CSS, then we get a totally different rendering.

```css
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```


## Viewport meta tag

When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the `head` element of all your HTML pages. This tells the browser to not scale the page.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

## Float

The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it. For example, if we had an `aside` element followed by a large paragraph of text, we could create the following CSS rule in order to cause the text to wrap around the aside.

```css
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

When the browser resizes, the text will flow around the floating element.

## Media queries

One of the main CSS features for creating responsive applications is the `@media` selector. This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

We can use the `@media` selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.

```css
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```

You can also use media queries to make entire pieces of your application disappear, or move to a different location. For example, if we had an aside that was helpful when the screen is wide, but took up too much room when the screen got narrow, we could use the following media query to make it disappear.

```css
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```
# CSS Grid

The `grid` display layout is useful when you want to display a group of child elements in a responsive grid. We start with a container element that has a bunch of child elements.

```html
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

We turn this into a responsive grid by including a CSS `display` property with the value of `grid` on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow. The next property, `grid-template-columns`, specifies the layout of the grid columns. In this example we say that we want to repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (`1fr`) of the grid width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts for each of the children.

We finish off the grid configuration by saying that we want all rows to be exactly 300 pixels high with the `grid-auto-rows` property and the use the `grid-gap` property to say that we want at least a 1 em gap between our grid items.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
# CSS Flexbox

The `flex` display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls of the left and content on the right.

So we can visualize our design by quickly sketching it out.

Next we build our structural HTML to match our design.

```html
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```

Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS `display` property with the value of `flex`. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the `flex-direction` property with a value of `column`. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.

```css
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```

To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

- **header** - `flex: 0 80px` - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
- **footer** - `flex: 0 30px` - Like the header it will not grow and has a height of 30 pixels.
- **main** - `flex: 1` - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be `flex` and specify the `flex-direction` to be row so that the children are oriented side by side.

```css
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```

Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the `flex` property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.

```css
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

## Media Query

That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the `flex-direction` of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the `display` property for both the header and the footer to `none` so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.

```css
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```
# Debugging CSS


CSS is extremely powerful, but sometimes is can be very frustrating to figure out why your page is not rendering the way that you expect. To help you understand why things are rendering the way they are you can use the browser's developer tool to inspect the CSS properties and visualize the HTML layout. Using the Google Chrome debugger you can access the developer tools by right clicking on the HTML page element that you want to debug and selecting the `inspect` option. You can experience this by creating a directory that contains the following content, composed of an HTML file (`index.html`) and a CSS file (`index.css`). 


Open the directory with VS Code and use the Live Server extension to view the HTML in the Chrome browser. In the browser, right click on the text and select `inspect`. This will open the debugger window and display the `Elements` tab. As you move your cursor over the different elements you will visually see what the padding, borders, and margins are set to. The `Styles` pane shows all of the CSS properties applied to the currently selected element. If you scroll down to the bottom of the styles pane you will see the CSS box. By moving the cursor over the different parts of the CSS box it will highlight the different box parts in the browser window.

You can change any of the CSS properties, and even add new properties, directly in the debugger. This allows you to see what each property is contributing and change them to see how that impacts the rendering. This is a great way to figure out what CSS works best without having to continually change the CSS file and refresh the browser.

# CSS Frameworks

CSS frameworks provide functions and components that commonly appear in web applications. As web developers built more and more web applications they began to use the same patterns over and over. They combined these patterns into a shared package of code and contributed it to the world as open source repositories. This helped not only decrease the time to develop an application, but created a common user experience for the web in general.

Today, there are lots of different open source CSS frameworks available to choose from. Many of them contain the same types of functionality, but they all bring something a little different to the table.


## Tailwind


Tailwind takes a different approach than traditional CSS frameworks. Instead of using large, rich, CSS rulesets to compartmentalize styling and functionality, it uses smaller definitions that are applied specifically to individual HTML elements. This moves much of the CSS representation out of the CSS file and directly into the HTML.

```html
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>
```

## Bootstrap

**Important Documentation**: [Getting started with Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

The reigning champion for CSS frameworks is [Bootstrap](https://getbootstrap.com/). Bootstrap has been supported by an active and vibrant community for over a decade and contains many lessons learned from real world applications. The major downside of Bootstrap is its own success. Because it is so popular, Bootstrap defines the de facto look and feel of websites. This is great for user experience continuity, but it makes it difficult for a website to grab the attention of new users.

### Getting bootstrap

You can integrate Bootstrap into your web applications simply by referencing the Bootstrap CSS files from their [content delivery network](https://getbootstrap.com/docs/5.2/getting-started/introduction/#cdn-links) (CDN). You then add the HTML link elements to your head element like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```

If you are going to use Bootstrap components that require JavaScript (carousel, buttons, and more), you will also need to include Bootstrap's JavaScript module. You add this by putting the following at **the end** of your HTML body element.

```html
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```


```sh
npm install bootstrap@5.2.3
```

### Using bootstrap

Once you have Bootstrap linked in your HTML files you can begin using the components it provides. Let's start with a simple button. When we use the Bootstrap `btn` CSS class, the button gets a nice looking rounded appearance. The Bootstrap `btn-primary` CSS class shades the button with the current primary color for the application, which by default is blue. The following demonstrates the difference between a Bootstrap style button and a plain vanilla button. Functionally they both work exactly the same. The Bootstrap button is just a lot easier on the eyes.

```html
// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>
```

# Javascript

## Basic Functionality

Let's start with a basic example. The following JavaScript will concatenate three strings together and then throw away the result. Not very useful, but JavaScript doesn't complain much.

```js
'Hello' + ' ' + 'world';
```

Only slightly more complex is to call a function with the result of our concatenated string. In this case we call the JavaScript runtime's built in function `console.log` to output the string to the debugger console.

```js
console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
```

You can also write your own functions.

```js
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```

## Comments

You can comment your JavaScript with either line or block comments.

```js
// Line comment

/*
Block comment
*/
```

## Code delimiters

While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon (`;`). Code blocks, and their resulting scope, are defined with curly braces (`{ }`).

# Console Commands in Javascript

## Log

The basic usage of the console object is to output a log message.

```js
console.log('hello');
// OUTPUT: hello
```

You can create formatted messages in the log parameter.

```js
console.log('hello %s', 'world');
// OUTPUT: hello world
```

You can even specify CSS declarations in order to style the log output.

```js
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```

## Timers

If you are trying to see how long a piece of code is running you can wrap it with `time` and `timeEnd` calls and it will output the duration between the `time` and `timeEnd` calls.

```js
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

## Count

To see how many times a block of code is called you can use the `count` function.

```js
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```
# Adding JavaScript to HTML

You can insert JavaScript into HTML either by directly including it in the HTML within the content of a `<script>` element, or by using the `src` attribute of the script element to reference an external JavaScript file.

**index.js**

```js
function sayHello() {
  console.log('hello');
}
```

**index.html**

```html
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

Notice that we call the `sayHello` and `sayGoodbye` JavaScript functions from the HTML in the `onclick` attribute of the button element. Special attributes like `onclick` automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.

```html
<button onclick="let i=1;i++;console.log(i)">press me</button>
<!-- OUTPUT: 2 -->
```

# Types, operators, and conditionals in Javascript

## Declaring variables

Variables are declared using either the `let` or `const` keyword. `let` allows you to change the value of the variable while `const` will cause an error if you attempt to change it.

```js
let x = 1;

const y = 2;
```

⚠ Originally JavaScript used the keyword `var` to define variables. This has been deprecated because they cause hard-to-detect errors in code related to the scope of the variable. You should avoid `var` and always declare your variables either with `let` or `const`.

## Type

JavaScript defines several primitive types.

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64-bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may commonly refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of Undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following:

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

## Common operators

When dealing with a number variable, JavaScript supports standard mathematical operators like `+` (add), `-` (subtract), `*` (multiply), `/` (divide), and `===` (equality). For string variables, JavaScript supports `+` (concatenation) and `===` (equality).

## Type conversions

JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometimes the results of automatic conversions can be unexpected from programmers who are used to strongly typed languages. Consider the following examples.

```js
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```

Getting unexpected results is especially common when dealing with the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) operator.

```js
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```

⚠ The unexpected results happen in JavaScript because it uses [complex rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

```js
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```

Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

```js
('b' + 'a' + +'a' + 'a').toLowerCase();
```

## Conditionals

JavaScript supports many common programming language conditional constructs. This includes `if`, `else`, and `if else`. Here are some examples.

```js
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```

You can also use the ternary operator. This provides a compact `if else` representation.

```js
a === 1 ? console.log(1) : console.log('not 1');
```

You can use boolean operations in the expression to create complex predicates. Common boolean operators include `&&` (and), `||` (or), and `!` (not).

```js
if (true && (!false || true)) {
  //...
}
```

### Loops

JavaScript supports many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`. Here are some examples.

### for

Note the introduction of the common post increment operation (`i++`) for adding one to a number.

```js
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```

### do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```

### while

```js
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

### for in

The `for in` statement iterates over an object's property names.

```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

For arrays the object's name is the array index.

```js
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```

### for of

The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.

```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

### Break and continue

All of the looping constructs demonstrated above allow for either a `break` or `continue` statement to abort or advance the loop.

```js
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```

# Javascript Strings

Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using `\n`.

```js
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```

## Unicode support

JavaScript supports Unicode by defining a string as a 16-bit unsigned integer that represents UTF-16 strings. Unicode support allows JavaScript to represent most languages spoken on the planet. This includes those that are read from right to left.

> حجر
>
> أقول لهذا الحجر: أنا أنت. فيقول: لستَ مرناً الى هذا الحدّ. أقول: قلبي مثلك؟ فيقول:

However, there are several important steps you must take in order to make your web application fully internationalized. This includes handling of currency, time, dates, iconography, units of measure, keyboard layouts, and respecting local customs. Read this [article on the W3C website](https://www.w3.org/standards/webdesign/i18n) to learn more about internationalization.

## String functions

The string object has several interesting functions associated with it. Here are some of the commonly used ones.

| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

```js
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

# Javascript Functions

In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the `function` keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

```js
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```

A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

```js
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```

## Function parameters

When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is `undefined` when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

## Anonymous functions

Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

## Creating, passing, and returning functions

Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

```js
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```

## Inner functions

Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

```js
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
```

# JavaScript arrow function

Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the `arrow` syntax was created. This syntax replaces the need for the `function` keyword with the symbols `=>` placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

```js
() => 3;
```

The following two invocations of sort are equivalent.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

Besides being compact, the `arrow` function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

## Return values

Arrow functions also have special rules for the `return` keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

```js
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

## This pointer

Next, arrow functions inherit the `this` pointer from the scope of where it is created. This makes what is known as a `closure`. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript `scope`. For now consider the following example.

The function `makeClosure` returns an anonymous function using the arrow syntax. Notice that the `a` parameter is overridden, a new `b` variable is created, and both `a` and `b` are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

```js
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```

Next, we declare the variables `a` and `b` at the top level scope, and call `makeClosure` with `a`.

```js
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```

Now, when we call `closure` function it will output the values contained in scope where it was created instead of the current values of the variables.

```js
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```

Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

# JavaScript array

📖 **Deeper dive reading**: [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

```js
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
```

## Object functions

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

### Format

A JSON document contains one of the following data types:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

# JSON

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```

JSON is always encoded with [UTF-8](https://en.wikipedia.org/wiki/UTF-8). This allows for the representation of global data.

### Converting to JavaScript

You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.

```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

Note that in this example, JSON cannot represent the JavaScript `undefined` object and so it gets dropped when converting from JavaScript to JSON.

# JavaScript regular expressions

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
# JavaScript rest and spread
## Rest

Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

```js
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
```

However sometimes you don't have an array to work with. In this case you could create one on the fly.

```js
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
```

But JavaScript provides the `rest` syntax to make this easier. Think of it as a parameter that contains the `rest` of the parameters. To turn the last parameter of any function into a `rest` parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```

Note that you can only make the last parameter a `rest` parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, `rest` allows JavaScript to provide what is called variadic functions.

## Spread

Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

# JavaScript exceptions

JavaScript supports exception handling using the `try catch` and `throw` syntax. An exception can be triggered whenever your code generates an exception using the `throw` keyword, or whenever an exception is generated by the JavaScript runtime, for example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the `try` keyword, and follow the try block with a `catch` block. If within the try block, including any functions that block calls, an exception is thrown, then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a `finally` block that is always called whenever the `try` block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

For example:

```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```

⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a `file not found` exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a `file not found` exception when the file is required for your code to run, such as a required configuration file. Your code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

## Fallbacks

The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

```js
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```
# JavaScript destructuring

Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

This works in a similar manner for objects, except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When destructuring objects, you explicitly specify the properties you want to pull from the source object.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

You can also map the names to new variables instead of just using the original property names.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

Default values may also be provided for missing ones.

```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

```js
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```
# JavaScript object and classes

📖 **Deeper dive reading**: [MDN Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)

A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a `this` pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (`obj.prop`) or bracket notation (`obj['prop']`).

```js
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term `object`. Object can refer to the standard JavaScript objects (e.g. `Promise, Map, Object, Function, Date, ...`), or it can refer specifically to the JavaScript Object object (i.e. `new Object()`), or it can refer to any JavaScript object you create (e.g. `{a:'a', b:2}` ). This overloaded usage can be a bit confusing.

## Object-literals

You can also declare a variable of object type with the `object-literal` syntax. This syntax allows you to provide the initial composition of the object.

```js
const obj = {
  a: 3,
  b: 'fish',
};
```

## Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

## Constructor

Any function that returns an object is considered a `constructor` and can be invoked with the `new` operator.

```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

## This pointer

Notice in the last example the use of the keyword `this` when we referred to the name property (`this.name`). The meaning of `this` depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the `this` pointer in the instruction on scope.

## Classes

You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private by prefixing them with a `#`.

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

## Inheritance

Classes can be extended by using the `extends` keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the `super` function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the `super` keyword.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

# Scope

Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:

1. **Global** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces

## Var

Initially JavaScript used the keyword `var` to declare a variable. The problem with var, unlike `const` or `let`, is that it ignores block scope. Variables declared with `var` are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to `x` rather than declaring a new variable that has the same name.

```js
var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
```

⚠ There are few cases where it makes sense to use `var`. It is strongly suggested that you only use `const` and `let` unless you fully understand why you are using `var`.

## This

The keyword `this` represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The `this` variable is automatically declared and you can reference `this` anywhere in a JavaScript program. Because the value of `this` depends upon the context in which it is referenced, there are three different context that this can refer to:

1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in an object it refers to the object.

```js
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```

Running the above code in a browser results in the following.

```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```

Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.

## Closure

A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

Here is an example of a function that is created as part of an object. That means that function has access to the object's `this` pointer.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```

Arrow functions are a bit different because they inherit the `this` pointer of their creation context. So if we change our previous example to return an arrow function, then the `this` pointer at the time of creation will be globalThis.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```

However, if we make function in our object that **returns** an arrow function, then the `this` pointer will be the object's `this` pointer since that was the active context at the time the arrow function was created.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```

# JavaScript modules

JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as [browser support](https://caniuse.com/es6-module-dynamic-import) for ES modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules. For this discussion, we will focus only on ES modules.

Because modules create a file-based scope for the code they represent, you must explicitly `export` the objects from one file and then `import` them into another file. For example, here is a simple module that exports a function that displays an alert.

**alert.js**

```js
export function alertDisplay(msg) {
  alert(msg);
}
```

You can import the module's exported function into another module using the `import` keyword.

**main.js**

```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

## ES Modules in the browser

When you use ES modules in the browser via HTML script references, things get a little complicated. The key thing to understand is that modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in.

From your HTML, you can specify that you are using an ES module by including a `type` attribute with the value of `module` in the `script` element. You can then import and use other modules. This is shown in the example below.

**index.html**

```html
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```

If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope. We do this by either attaching an event handler or explicitly adding a function to the global window object. In the example below, we expose the `alertDisplay` imported module function by attaching it to the global JavaScript `window` object so that it can then be called from the button `onclick` handler. We also expose the module function by attaching a `keypress` event.

**index.html**

```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

Now, if the button is pushed or a key is pressed our ES module function will be called.

## Modules with web frameworks

Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you usually don't have to worry about differentiating between global scope and ES module scope. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.

Because of the complex history of modules they can be a confusing topic, but it is well worth the time to understand how they work as they are a core piece of a web programmer's toolkit.

# Document Object Model

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

<img src="dom.jpg"/>

## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```
The getElementById() method returns an element with a specified value.

The getElementById() method returns null if the element does not exist.

The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Here are a few of the more commonly used events.

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.

```html
<button onclick='alert("clicked")'>click me</button>
```

# Local storage
The browser's `localStorage` API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded. The user's name will also be available in local storage the next time the same browser is used to access the same website.

In addition to persisting application data between page renderings, `localStorage` is also used as a cache for when data cannot be obtained from the server. For example, your frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

## How to use LocalStorage
There are four main functions that can be used with localStorage.

| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

A local storage value must be of type `string`, `number`, or `boolean`. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with `JSON.stringify()` on insertion, and parse it back to JavaScript with `JSON.parse()` when retrieved.

## Example

Open your startup website and run the following code in the browser's dev tools console window.

```js
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```

**Output**

```sh
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
```

Notice that you are able to see the round trip journey of the local storage values in the console output. If you want to see what values are currently set for your application, then open the `Application` tab of the dev tools and select `Storage > Local Storage` and then your domain name. With the dev tools you can add, view, update, and delete any local storage values.

# Promises

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

# Promises

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

# JavaScript Async/await

JavaScript Promise objects are great for asynchronous execution, but as developers began to build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the `async/await` syntax. The `await` keyword wraps the execution of a promise and removed the need to chain functions. The `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`. For example, if we have a function that returns a coin toss promise.

```js
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```

We can create equivalent executions with either a promise `then/catch` chain, or an `await` with a `try/catch` block.

**then/catch chain version**

```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```

**async, try/catch version**

```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

## async

One important restriction for working with `await` is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the `async` keyword. Applying the `async` keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

```js
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```

If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```

We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```

You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

## await

The `async` keyword declares that a function returns a promise. The `await` keyword wraps a call to the `async` function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate `await` in action with the cow promise from above. If we log the output from invoking `cow` then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```

By combining `async`, to define functions that return promises, with `await`, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

## Putting it all together

You can see the benefit for `async`/`await` clearly by considering a case where multiple promises are required. For example, when calling the `fetch` web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

```js
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```

With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```

# Debugging JavaScript

📖 **Deeper dive reading**: [MDN Console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

It is inevitable that your code is going to have problems, or bugs, at some point. That may be while you are originally authoring it, working on other code that changes assumed dependencies, or while enhancing the code with new functionality.

Learning how to quickly discover, and resolve, bugs will greatly increase your value as a web developer. Additionally, debugging skills can also be used during the development process. By following a pattern of writing a block of code and then stepping through, or debugging, the block, you gain confidence that the block is working as desired before moving on to the next block.

## Console debugging

One of the simplest ways to debug your JavaScript code is to insert `console.log` functions that output the state of the code as it executes. For example, we can create a simple web application that has an HTML and JavaScript file that demonstrates the difference between `let` and `var`. By inserting `console.log` statements into the code, we can see what the value of each variable is as the code executes.

**index.html**

```html
<body>
  <h1>Debugging</h1>
  <script src="index.js"></script>
</body>
```

**index.js**

```js
var varCount = 20;
let letCount = 20;

console.log('Initial - var: %d, let: %d', varCount, letCount);

for (var varCount = 1; varCount < 2; varCount++) {
  for (let letCount = 1; letCount < 2; letCount++) {
    console.log('Loop - var: %d, let: %d', varCount, letCount);
  }
}

const h1El = document.querySelector('h1');
h1El.textContent = `Result - var:${varCount}, let:${letCount}`;
console.log('Final - var: %d, let: %d', varCount, letCount);
```

Take the following steps to see the result of console debugging.

1. Create the above files in a test directory named testConsole
1. Open the testConsole directory in VS Code
1. Run index.html using the VS Code Live Server extension
1. Open the Chrome browser debugger (press `F12`)
1. Select the `Console` tab
1. Refresh the browser

You should see the following result.

![JavaScript console debugging](javascriptDebugConsole.jpg)

You can use the debugger console window to inspect variables without using the `console.log` function from your code. For example, if you type varCount in the console window it will print out the current value of varCount. You can also execute JavaScript directly in the console window. For example, if you type `varCount = 50` and press `Enter` it will change the current value of varCount.

![JavaScript console debugging variables](javascriptDebugConsoleVars.jpg)

## Browser debugging

`console.log` debugging is great for times when you just need to quickly see what is going on in your code, but to really understand the code as it executes you want to use the full capabilities of the browser's debugger.

Using the same setup we used for `console.log` debugging, open up Chrome's browser debugger, but this time select the source tab. This will display the source files that comprise the currently rendered content.

![JavaScript source debugging](javascriptDebugSource.jpg)

You can either select `index.js` from the source view on the left, or press `CTRL-P` (on Windows) or `⌘-P` (on Mac) and then select `index.js` from the list that pops up. Then set a breakpoint on line 4 by clicking on the line number on the left of the displayed source code. This makes it so that the execution of code will pause whenever that line is executed. Refreshing the browser window will cause `index.js` to reload and pause on the breakpoint.

![JavaScript breakpoint](javascriptDebugBreakpoint.jpg)

With the browser paused in the debugger you can move your mouse cursor over a variable to see its value, see what variables are in scope, set watches on variables, or use the console to interact with the code.

This gives you complete control to inspect what the JavaScript code is doing and experiment with possible alternative directions for the code. Take some time to poke around in the debugger. Learning how to exploit its functionality will make you a much better web developer.

# Simon JavaScript

🎥 **Instruction video**: [Simon JavaScript](https://youtu.be/hqzXN-n2Q5I)

![Simon](../simon.png)

This deliverable demonstrates the use of basic JavaScript for interactivity. This addition makes the application completely functional. The application has a login (home), game play, high scores, and about page. Each page contains a header that provides navigation between the pages, and a footer that references the source repository.

## Adding JavaScript

The major changes to the application include the introduction of `login.js`, `play.js`, and `scores.js`. When a user enters their login name, `login.js` puts that name in the browser's local storage so that it is available the next time they use the application. `play.js` controls all the game interactions and stores the resulting score in the browser's local storage. `scores.js` retrieves the high scores from local storage so that they can be displayed.

### index.html and login.js

The first place we used JavaScript in Simon, allows the user to provide their name. We then store that name in the Browser's local storage cache. Once in the cache we can read the value from other html pages, or even later browser sessions on the same device.

Notice the inclusion of a `onclick` call to the `login` function found in the `login.js` file. We reference the `login.js` file by including an HTML `script` element.

```html
<script src="login.js"></script>

//...

<input type="text" id="name" placeholder="Your name here" />
<button class="btn btn-primary" onclick="login()">Login</button>
```

In the `login.js` file we handle a click on the login button by using the document object's querySelector function to get the input element's value and store it in local storage. We then redirect the browser to display the `play.html` page.

```js
function login() {
  const nameEl = document.querySelector('#name');
  localStorage.setItem('userName', nameEl.value);
  window.location.href = 'play.html';
}
```

### scores.js

The `scores.js` reads the current high scores out of local storage and injects the values into the DOM usinng `createElement` and `appendChild` calls.

### play.js

This is where all the game play interactions occur. There are two classes one for `Button` and one for `Game`. The Button class handles the playing of the button's audio file, along with the change in color, when a button is pressed.

The Game class manages the current sequence that a user is supposed to duplicate. This is done with the `reset` function to clear out the sequence and add a new random button, and the `playSequence` function that plays the sequence for the user to duplicate.

## Study this code

Get familiar with what the example code teaches.

- Clone the repository to your development environment.

  ```sh
  git clone https://github.com/webprogramming260/simon-javascript.git
  ```

- Review the code and get comfortable with everything it represents.
- View the code in your browser by hosting it using the VS Code Live Server extension.
- Make modifications to the code as desired. Experiment and see what happens.

## Deploy to production

- Deploy to your production environment using a copy of the `deployFiles.sh` script found in the [example class application](https://github.com/webprogramming260/simon-javascript/blob/main/deployFiles.sh). Take some time to understand how it works.

  ```sh
  ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon
  ```

  For example,

  ```sh
  ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
  ```

# Console Commands

In Unix operating systems, the chmod command is used to change the access mode of a file. The name is an abbreviation of change mode.

'pwd' stands for 'Print Working Directory'. As the name states, command 'pwd' prints the current working directory or simply the directory user is, at present.

cd = change directory

ls = lists all the files and directories under a specified directory

ls flags:

-A	Lists all entries except . (dot) and .. (dot-dot).

-a	Lists all entries in the directory, including the entries that begin with a . (dot).

-b	Displays nonprintable characters in an octal (\nnn) notation.

-c	Uses the time of last modification of the i-node for either sorting (when used with the -t flag) or for displaying (when used with the -l flag). This flag must be used with either the -t or -l flag, or both.

-C	Sorts output vertically in a multicolumn format. This is the default method when output is to a terminal.

-d	Displays only the information for the directory named. Directories are treated like files, which is helpful when using the -l flag to get the status of a directory.

-e	Displays the mode (including security information), number of links, owner, group, size (in bytes), time of last modification, and name of each file. If the file is a special file, the size field contains the major and minor device numbers. If the file is a symbolic link, the path name of the linked-to file is printed preceded by a -> (minus, greater than) sign. The attributes of the symbolic link are displayed.

-f	Lists the name in each slot for each directory specified in the Directory parameter. This flag turns off the -l, -t, -s, and -r flags, and turns on the -a flag. The order of the listing is the order in which entries appear in the directory.

-F	Puts a / (slash) after each file name if the file is a directory, an * (asterisk) if the file can be executed, an = (equal sign) if the file is a socket, a | (pipe) sign if the file is a FIFO, and an @ for a symbolic link.
Note: Symbolic links are displayed with the trailing -> only if the -N flag is used or if the link points to a nonexistent file. Otherwise, information about the target file is displayed. You can also invoke this option by entering the ls -f command.

-g	Displays the same information as the -l flag, except the -g flag suppresses display of the owner and symbolic link information.

-i	Displays the i-node number in the first column of the report for each file.

-L	Lists the file or directory contents that the link references. This is the default action. Symbolic links are followed. If the -l option is used, the -N option becomes the default, and no symbolic links are followed. When the -l option is used, only the -L option can override the -N default.

-l	(Lower case L) Displays the mode, number of links, owner, group, size (in bytes), and time of last modification for each file. If the file is a special file, the size field contains the major and minor device numbers.
If the file is a symbolic link, the path name of the linked-to file is printed preceded by a ->. The attributes of the symbolic link are displayed. The -n, -g, and -o flag overrides the -l flag.

Notes:
A symbolically linked file is followed by an arrow and the contents of the symbolic link.
The performance of the ls command when used with the -l option can be improved by executing the mkpasswd command. This is helpful when a directory contains files owned by different users, such as the /tmp directory.

-m	Uses stream output format (a comma-separated series).

-n	Displays the same information as the -l flag, except that the -n flag displays the user and the group IDs instead of the user and group names.

-N	Does not follow symbolic links when determining the status of a file.

Note: If both the -L and -N options are used, the last one will dominate. Also, any time a symbolic link is given that includes a / (slash) as the final character, the link will automatically be followed regardless of any options used.

-o	Displays the same information as the -l flag, except the -o flag suppresses display of the group and symbolic link information.

-p	Puts a slash after each file name if that file is a directory. This is useful when you pipe the output of the ls command to the pr command, as follows:
ls  -p |  pr  -5  -t  -w80

-q	Displays nonprintable characters in file names as a ? (question mark).

-r	Reverses the order of the sort, giving reverse alphabetic or the oldest first, as appropriate.

-R	Lists all subdirectories recursively.

-s	Gives size in kilobytes (including indirect blocks) for each entry.

-t	Sorts by time of last modification (latest first) instead of by name.

-u	Uses the time of the last access, instead of the time of the last modification, for either sorting (when used with the -t flag) or for displaying (when used with the -l flag). This flag has no effect if it is not used with either the -t or -l flag, or both.

-x	Sorts output horizontally in a multicolumn format.

-1	Forces output into one-entry-per-line format. This is the default when the output is not directed to a terminal.

Vim commands:
h moves the cursor one character to the left.
j moves the cursor down one line.
k moves the cursor up one line.
l moves the cursor one character to the right.
0 moves the cursor to the beginning of the line.
$ moves the cursor to the end of the line.
w move forward one word.
b move backward one word.
G move to the end of the file.
gg move to the beginning of the file.
`. move to the last edit.

## Nano

Nano is a relatively simple open source text editor.
*Meta <alt> requires changes to OSX Terminal.
File operations
Command Description Comments
nano [filename] Opens the file in nano for editing. Ex) nano index.html
Ctrl-r then Alt-f Opens a new file buffer This lets you switch between
multiple files.
Alt-> and Alt-< Tabs between file buffers
Ctrl-o Write changes to a file Will prompt for file name
Ctrl-x Quits nano Will prompt if there are unsaved
changes.
Navigation
Command Description Comments
Ctrl-a Move to beginning of current line
Ctrl-e Move to end of current line
Ctrl-v Move down one page
Ctrl-y Move up one page
Alt-\ and Alt-/ Go to beginning or end of file
Alt-g Go to a target line (and column)
number
Alt-g followed by 5,3 goes to line
five, column three
Alt-] Go to matching grouping symbol
(parenthesis, brackets, etc.)
Copy and Paste
Command Description Comments
Alt-a Selects a block; Alt-a again
unselects
Ctrl-k Cuts from the cursor to the
Ctrl-u Pastes clipboard to the cursor’s
position
Alt-a then Alt-^ Copies highlighted block to the
clipboard
Alt-a then Ctrl-k Cuts a highlighted block to the
clipboard
Search and Replace
This workforce product was funded by a grant awarded by the U.S. Department of Labor’s
Employment and Training Administration. The product was created by the grantee and
does not necessarily reflect the official position of the U.S. Department of Labor. The U.S.
Department of Labor makes no guarantees, warranties, or assurances of any kind, express
or implied, with respect to such information, including any information on linked sites and
including, but not limited to accuracy of the information or its completeness, timeliness,
usefulness, adequacy, continued availability, or ownership.
Nano Commands
Nano is a relatively simple open source text editor.
*Meta <alt> requires changes to OSX Terminal.
Command Description Comments
Ctrl-w Searches for a string of text
Alt-w Repeats the previous search
Alt-r Searches and replaces

mkdir:
Use the mkdir command to create one or more directories specified by the Directory parameter.

Each new directory contains the standard entries dot (.) and dot dot (..). You can specify the permissions for the new directories with the -m Mode flag.

When you create a directory, it is created within the current, or working, directory unless you specify an absolute path name to another location in the file system.

mv:
The mv command moves files and directories from one directory to another or renames a file or directory.

rm:
Use the rm command to remove files you no longer need.

man:
Stands for manual

Just about every program you have installed in your server comes with detailed documentation on how to use it properly. Reading man pages is a great way to unlock the power of your command line utilities, and, for some users, the man pages can be faster and more accurate than search engine results.

That being said, man pages can be very terse. This makes them ideal for advanced users, and perhaps intimidating for newer users. Nevertheless, newer Linux users should give them a try and see how they like it.

How to Read Man Pages on Command Line
Using man is as simple as opening your Terminal emulator, or logging into your server via SSH. Once there, you can simply type man followed by the program you want to learn about.

ssh:

The ssh command is used to securely log into a remote machine and execute commands on that machine. The basic syntax of the command is “ssh user@host”, where user is the username on the remote machine and host is the address or hostname of the remote machine.

ps:

ps command is used to list the currently running processes and their PIDs along with some other information depends on different options. It reads the process information from the virtual files in /proc file-system. /proc contains virtual files, this is the reason it's referred as a virtual file system.

wget:

Downloading files with wget is easy. Type wget followed by the file URL you wish to download to your command prompt app, and the download should begin after you press enter.

sudo:
To run commands with superuser privileges, use the sudo command. sudo stands for superuser do.

The sudo command allows you to run programs with the security privileges of another user (by default, as the superuser). It prompts you for your personal password and confirms your request to execute a command by checking a file, called sudoers , which the system administrator configures.
