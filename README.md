# BUG 0.10.3-DEV studio 无法在 jsapi 中正常运行

重现：

```sh
git clone https://github.com/wwsheng009/studio-jsapi-not-working.git

cd studio-jsapi-not-working && mkdir db && yao migrate --reset

```

0.10.3-pre 与 0.10.3-dev 中 jsapi 中调用 studio 脚本存在不一致的行为。

```js
// yao-dev studio run echo.hello
function hello() {
  return "你好";
}

// yao-pre studio run echo.World => ok
// yao-dev studio run echo.World => error
function World() {
  //0.10.3-pre 不需要增加studio也能识别
  return Studio("echo.hello");
}

// yao-dev studio run echo.World2   =>ok
// yao-pre studio run echo.World2   =>error
function World2() {
  //0.10.3-dev 需要增加studio前缀才能识别
  return Studio("studio.echo.hello");
}
```
