import babel from 'rollup-plugin-babel' 
import styles from 'rollup-plugin-styles'

const config = {
    input: 'src/dropdown.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        styles()
    ],
    output: {
        format: 'umd',
        name: 'dropdown',
        globals: {
            react: "React"
        },
        assetFileNames: "dropdown.css"
    }
}
export default config