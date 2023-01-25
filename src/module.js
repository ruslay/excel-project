console.log('log')

async function start() {
    return await Promise.resolve().then(console.log('start 2'))
}
start()