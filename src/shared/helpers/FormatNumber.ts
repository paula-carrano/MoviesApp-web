const FormatNumber = (number: number) => {
    return new Intl.NumberFormat("EN-US", {
        style: "currency",
        currency: "USD"
    }).format(number)
}

export { FormatNumber }