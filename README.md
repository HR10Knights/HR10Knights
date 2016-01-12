# Sage
[![Build Status](https://travis-ci.org/HR10Knights/HR10Knights.svg?branch=master)](https://travis-ci.org/HR10Knights/HR10Knights)

A project managment application that enables teams to collaborate on group to-do lists.

![Sage Task List](http://i.imgur.com/9deiWIk.png)
![Sage Create Task](http://i.imgur.com/anu6jJg.png)
![Sage Login](http://i.imgur.com/X9Ee6Iq.png)

## Team

  - __Product Owner__: Andrew
  - __Scrum Master__: Eugene
  - __Development Team Members__: Zach, Jeff, Luke

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Repo Structure](#repo-structure)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
    1. [Code Coverage](#code-coverage)
1. [Team](#team)
1. [Contributing](#contributing)
1. [Style Guide](#style-guide)
1. [Press Release](#press-release)
1. [Misc](#misc)

## Usage

> Some usage instructions

## Tech Stack

- Mongo
- Express
- Angular
- Node
- Mocha/Chai/Protractor Tests
- Grunt
- Angular Material
- npm
- Bower
- Travis CI
- Heroku

## Repo Structure

### server:

The server has an MVC architecture (the routes are the API's "views"),
with each part having its own folder in `doozy/`.

The database schema and config are in `doozy/config.js`.

The back-end server is set up in `doozy/server.js` and `doozy/index.js`.

### client:

pending...

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Initial Features

* Sign in to or create team
* Team has one project
* Project has many tasks
* Tasks have one state
  * Staging (default)
  * In progress
  * Complete
* Task has many users
* Can view all tasks or your own


View the project roadmap [here](https://github.com/HR10Knights/HR10Knights/issues?q=is%3Aissue+is%3Aopen)

### Code Coverage
* Install istanbul with `npm install -g istanbul` and run it with `istanbul cover node_modules/.bin/_mocha -- -R spec test/**/*`

## Contributing

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.

## Style Guide

See [STYLE-GUIDE.md](_STYLE-GUIDE.md) for style guidelines.

## Press Release

See [PRESS-RELEASE.md](_PRESS-RELEASE.md) for more information about the app.

## Misc

Stories in ready at Waffle.io:

[![Stories in Ready](https://badge.waffle.io/HR10Knights/HR10Knights.svg?label=ready&title=Ready)](http://waffle.io/HR10Knights/HR10Knights)

Throughput graph from Waffle.io:

[![Throughput Graph](https://graphs.waffle.io/HR10Knights/HR10Knights/throughput.svg)](https://waffle.io/HR10Knights/HR10Knights/metrics)
