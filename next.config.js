const path = require('path')
const nextTranslate = require('next-translate')
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    ...nextTranslate()
}