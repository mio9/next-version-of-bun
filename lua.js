
import * as luainjs from "lua-in-js";

async function runLua(code) {
    const rawCode = code[0]
    const luaEnv = luainjs.createEnv()
    const luaScript = luaEnv.parse(rawCode)
    const result = luaScript.exec()
    return result
}

const M = {
    lua: runLua,
}
Bun.lua = M.lua

export default Bun