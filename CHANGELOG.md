# Change Log

All notable changes to the "git-hooks" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

### [0.0.4] - 2022-03-03
- Improved Search KeyWords
- Added `PyMySQL` & `PreCommit hook` Python Snippets
- Added `Hook Description` for each git hook
- Using user defined shell to run git hooks

### [0.0.5] - 2022-05-04
- Included Context of Tree Elements
- Added SCM display to the extension
- Added Configuration to toggle the display between `SCM` and `ActivityBar`

### [0.0.6] - 2022-05-05
- Bug fix for runing hook using `terminal.sendText`

### [0.0.7] - 2022-06-23
- new feature to run `git hook run` command ( new feature in `git` version `2.36.1`)
- new snippets for detecting `shell` paths for launguages like [`python`, `bash`, `node`, `java`, `cpp`]
- new snippet for `dateTime` for `TypeScript`

### [0.0.8] -- 2022-07-29
- resolved bash shell detection issue for both `MAC` and `Linux` operating systems

### [0.0.9] -- 2022-10-13
- Added `ViewBadge` Feature which can be viewed for `code` version > `1.72.0`

### [0.0.10] -- 2022-11-28
- Include `Webpack` to minify the extension and improving extension load time

### [0.0.11] -- 2023-03-18
- Added Run Button to `editor/title` for every hook present under .git directory
- Removed `PyMySQL` snippent
- Added shebang snippets
- Improved `hook_descriptions` on lineAnnotation