# FoxyPanda Source Code

FoxyPanda is a personal blog ohighlightinggis based on [Ghost](https://ghost.org/) and is deployed to [Heroku](https://heroku.com/). You can access it using either https://foxypanda.herokuapp.com/ or https://foxypanda.me.

# Notes for myself

These are just notes about the changes I made to the standard Ghost functionality.

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
[New Window](#)

[~Same Window](#)
```
