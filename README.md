# commitlint-config-nomad

Nomad team's commit linter configuration that extends the conventional commit convention with custom "type" definitions.

Read more about this convention here: https://www.conventionalcommits.org/en/v1.0.0/
See https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md for the full list of rules aside of the custom types we use

## Usage

On the original project repo, add following dependencies first:
```
  "devDependencies": {
    "@commitlint/cli": "^8.2.0",
    "commitlint-config-nomad": "git+ssh://git@ship.nomadinteractive.co:nomad-interactive/commitlint-config-nomad.git",
    "husky": "^3.0.9",
  },
```

Then, in your package.json, add following configuration:

```
  "commitlint": {
    "extends": [
      "nomad"
    ]
  }
```

To use commit linter with your pre-hook/commit-msg commits, add following husky configuration to your package.json

```
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
```

After doing ```npm install``` dependencies will be installed as well as husky hooks will be configured. Now you can try to commit a message with git to see the linter results in case if there are rule violations.
