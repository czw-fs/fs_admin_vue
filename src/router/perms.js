export const beforeEachCallback = async (to, from, next) => {
    console.log(from.path)
    next()
}

export const afterEachCallback = async (to, from, next) => {
    console.log(from.path)
}