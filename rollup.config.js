import babel from 'rollup-plugin-babel' 
import css from 'rollup-plugin-import-css'

const config = {
    input: 'src/dropdown.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        css()
    ],
    output: {
        format: 'umd',
        name: 'dropdown',
        globals: {
            react: "React"
        }
    }
}
export default config