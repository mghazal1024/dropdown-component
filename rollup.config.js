import babel from 'rollup-plugin-babel' 

const config = {
    input: 'src/dropdown.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
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