import wasm from './space.cpp'
wasm.initialize().then(module => {
    console.log((module.UTF8ToString(module._test())))
})

export default function () {
    return wasm.initialize()
}
