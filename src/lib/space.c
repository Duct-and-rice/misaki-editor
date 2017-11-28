#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <emscripten/emscripten.h>
 
int main(int argc, char ** argv)
{
    printf("WASM loaded\n");
}
 
int EMSCRIPTEN_KEEPALIVE roll_dice() {
    srand ( time(NULL) );
    return rand() % 6 + 1;
}
