const readLine = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readLine.question('Type a wikipedia search tearm: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readLine.keyInSelect(prefixes)
        const selectPrefixText = prefixes[selectPrefixIndex]
        
        return selectPrefixText
    }

    console.log(content)
}

start()