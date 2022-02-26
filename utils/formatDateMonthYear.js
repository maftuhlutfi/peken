const formatDateMonthYear = date => {
    const projectDate = new Date(date)

    const months = ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${projectDate.getDate()} ${months[projectDate.getMonth()]} ${projectDate.getFullYear()}`
}

export default formatDateMonthYear