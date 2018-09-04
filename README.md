# Glossier's front-end configs

- [JavaScript](/packages/eslint-config/README.md)

## License
Copyright 2018 Glossier Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Publishing an Update to a Package

1. Create a new git tag.

```
git tag -a v2.1.4 -m "v2.1.4"
```

2. Publish the tag.

```
git push origin v2.1.4
```

3. Draft a new release [here](https://github.com/glossier/front-end-configs/releases/new) with the associated tag.

4. Update npm version.

```
npm version patch
```

This should update your `package.json`.

5. Publish your package.

```
npm publish
```
