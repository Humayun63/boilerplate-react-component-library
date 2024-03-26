import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                exports: 'named'
            }
        ],
        plugins: [
            postcss({
                config: {
                  path: './postcss.config.js',
                },
                extensions: ['.css'],
                minimize: true,
                inject: {
                  insertAt: 'top',
                },
            }),
            babel({
                exclude: 'node_module/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser()
        ],
        external: ["react", "react-dom"],
    }
]