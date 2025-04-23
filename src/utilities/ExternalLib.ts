export default class ExLib {
    /**
     * convert input data to String
     */
    static toString(input: string[]) {
        if (Array.isArray(input))
            return input.reduce((acc, curr) => acc + (acc ? ', ' : '') + curr, '')
    }
}