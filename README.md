# FoxyPanda Source Code

FoxyPanda is a personal blog based on [Ghost](https://ghost.org/) and is deployed to [Heroku](https://heroku.com/). You can find it here: https://foxypanda.me.

# Notes for myself

These are just notes about the changes I made to the standard Ghost functionality. For reference, `helpers.js` contains all of the custom Handlebars helpers I have defined.

### Testing locally

Use `npm start` to test locally. `heroku local web` might not work.

### Compiling Sass

All Sass files can be compiled by simply running `compass watch` in the root directory. `config.rb` contains all of necessary Compass configuration.`

### Syntax highlighting and LaTeX

To get syntax highlighting with line numbers in the Ghost editor:


    ```language-typescript line-numbers
    public static randomInRage(min: number, max: number, integersOnly: boolean = false) {
        if (integersOnly) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        return Math.random() * (max - min) + min;
    }
    ```
    
Inline syntax:

```markdown
Without syntax highlighting:
`var colour;`

With syntax highlighting:
<code class="language-javascript">var colour;</code>
```
    
LaTeX snippets:

```
Inline:
$\LaTeX$ or \\(\LaTeX\\)

Separate line;
$$\LaTeX$$
```

### Links

Links that open in a new window or the same window. Note that the tilde character will be stripped.

```markdown
[New Window](https://localhost/)

[~Same Window](https://localhost/)

[Anchor links are ignored](#)
```

### Embedding JavaScript into pages

Ghost's Markdown engine supports HTML, so JS can be embedded directly into pages. If you for some reason need jQuery or want the scripts to be loaded after the rest of Foxy Panda JS, use the mechanism before:

```javascript
window.scripts.push('/path/to/some/script'); // This script will load first
window.scripts.push('/path/to/another/script'); // Will load second
window.scripts.push(function() {
    console.log('Hello World');
}); // Will get executed after the above 2 scripts are loaded
```

### Helper divs

If something needs to be centred, it can be wrapped into a `.center-content` div.