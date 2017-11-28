#include <emscripten/emscripten.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

extern "C" {
EMSCRIPTEN_KEEPALIVE const char *test() {
  const char c[] = "\x20\x0a";
  return c;
}
}
