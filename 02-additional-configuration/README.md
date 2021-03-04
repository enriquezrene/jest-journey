If you want to configure how jest works, run this command:

```sh
yarn jest --init
```

Questions asked: 
```
The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … yes

```

Adding babel
```sh
yarn add --dev babel-jest @babel/core @babel/preset-env
```