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
