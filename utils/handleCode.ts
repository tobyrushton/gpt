const codeRegex = /```[\s\S]*?```/g

export const containsCodeSnippet = (text: string):boolean => {
    const codeBlocks = text.match(codeRegex)
    if(!codeBlocks) return false
    return codeBlocks.some(block => block.length > 3)
}

type CodeSnippet = {
    text: string
    isCode: boolean
}
export const splitCodeSnippet = (text: string):CodeSnippet[] => {
    const codeBlocks = text.match(codeRegex)
    if(!codeBlocks) return [{ text, isCode: false }]
    const codeSnippets: CodeSnippet[] = []
    let lastEnd = 0
    codeBlocks.forEach((block, index) => {
        const start = text.indexOf(block, lastEnd)
        const end = start + block.length
        lastEnd = end
        codeSnippets.push({ text: text.slice(lastEnd, start), isCode: false })
        codeSnippets.push({ text: block, isCode: true })
    })
    codeSnippets.push({ text: text.slice(lastEnd), isCode: false })
    return codeSnippets
}
