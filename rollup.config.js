import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'
export default [{
    input: 'index.ts',
    plugins: [resolve(), commonjs(), typescript()],
    output: [
        {
            file: path.join(__dirname, 'index.js'),
            format: 'cjs'
        }
        // {
        //     file: path.join(__dirname, 'index2.js'),
        //     format: 'iife'
        // }
    ]
}]