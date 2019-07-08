const pluginName = 'hahaPlugin'
class HahaPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, ()=>{
            console.log('haha')
        })
    }
}
module.exports = HahaPlugin