# Franken-Math

A javascript utility that allows you to convert expressions written in a simple mathematical language (under development) into two forms: LaTeX source code for formatting, and semantic input suitable as input to a CAS.

- [Try it](https://kenmonks.github.io/frankenmath) - in a live demo.

This is currently under development.

## Development

If you clone this repository and want to make changes, first install the dev dependencies.

```bash
npm install      # install dev dependencies
```

To compile the peggy parser definition files into the js parsers run this.

```bash
npm run build    # compile peggy grammars
```

Both of these commands should be run in the root folder of your repository.

