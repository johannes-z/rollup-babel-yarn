import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
// @ts-ignore
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.ts',
  output: {
    format: 'esm',
    dir: 'lib'
  },
  plugins: [
    typescript({
      abortOnError: false,
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    }),
    resolve(),
    commonjs(),
  ]
}