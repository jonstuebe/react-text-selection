import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: pkg.source,
    output: {
      file: pkg.browser,
      format: "umd"
    },
    name: pkg.umdName,
    plugins: [
      babel({ exclude: "node_modules/**" }),
      resolve(),
      commonjs(),
      autoExternal()
    ],
    globals: {
      react: "React"
    }
  },
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      autoExternal()
    ]
  }
];
