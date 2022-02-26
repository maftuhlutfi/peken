const formatDateFull = date => {
    const projectDate = new Date(date)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${projectDate.getDate()} ${months[projectDate.getMonth()]} ${projectDate.getFullYear()}`
}

export default formatDateFull