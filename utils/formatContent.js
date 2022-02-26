const formatContent = content => {
    let formattedContent = []

    content.map(c => ({...c, type: c.type == 'image' ? 'image' : 'prose'})).forEach((c, index) => {
        const lastIndex = formattedContent.length - 1
        if (index == 0 || c.type != formattedContent[lastIndex].type) {
            formattedContent = [
                ...formattedContent,
                {
                    type: c.type,
                    index: [index]
                }
            ]
        } else {
            formattedContent[lastIndex].index = [...formattedContent[lastIndex].index, index]
        }
    })

    return formattedContent
}

export default formatContent