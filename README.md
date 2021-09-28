# React app with Client Side Rendering using Deno

This is the source code of a [React](https://reactjs.org/) Client Side Rendering app written in Typescript using the [Deno](https://deno.land/) runtime engine.
I have used [Oak](https://github.com/oakserver/oak) middleware framework and created the simple middleware.

## Installation
Using Shell (macOS, Linux):
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```
PowerShell (Windows):
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
Homebrew (Mac):
```
brew install deno
```
## Development
Run:
### Run command to build react in watch mode
```
.\scripts\build.sh
```

### Run command to start Deno server in watch mode
```
.\scripts\dev.sh
```

## Tech stack
- [Deno](https://deno.land/)
- [OakServer](https://github.com/oakserver/oak)
- [Reactjs](https://reactjs.org/)

## Supported Deno Versions

This project has been tested with the following versions:

- 1.14.1

Once Deno is installed, you can easily switch between Deno versions using the `upgrade` command:

```bash
# Upgrade to latest version:
deno upgrade

# Upgrade to a specific version, replace `<version>` with the version you want (e.g. `1.0.0`):
deno upgrade --version <version>
```