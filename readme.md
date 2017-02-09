# Chocoland.js

Chocoland SPA Framework, join us to this grand project

## How to install

```fish
git clone https://github.com/chocoland/chocoland.js choco
cd choco
npm install -g browserify
```

## build and run

```fish
npm run build
```

## History

For understand the sweet philosophy we must remember we history, today MVC is dead, the API ugly is part of past, Far from bitter lands for ever

## How will be Chocoland.js

The infrastructure of chocoland.js will be, somes middleware, config files, routes, rules, an ORM, a package manager, a template engine for client side

* Middleware - are packages that provides services with less code
* Config files - are configurations between the middleware and chocoland.js
* Routes - is a config in client side, this  services are separated in URI
```yaml
routes:
  id_render: "#!/path"
```
* ORM - is a cli with every 

```yaml
db:
  user: ""
  pass: ""
  engine: ""
```


```yaml
users:
  user: "string"
  name: "string"
  pass: "string"
  create: "date"
```
* Rules - a config file with rules for well be a link between database and web application
 
```yaml
alias:
  users: 
    username: "username"
    name: "name"
    pass: "pass"
    create: "date"
```


```yaml
packs:
  userpack:
    io:
      - username
      - name
    write:
      - pass
      - date
```
* package manager - provides only middlewares
* Template - a client side template to powerful application like 


```html
<p>welcome {{ name }}</p>
```
