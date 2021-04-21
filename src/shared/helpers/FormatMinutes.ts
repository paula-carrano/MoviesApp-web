const FormatMinutes = (time: number) => {
    let hour = Math.floor((time % 3600) / 60);
    let min = time % 60;

    hour = hour < 10 ? 0 + hour : hour;
    min = min < 10 ? 0 + min : min;

    return `${hour}h ${min} min`;
}


export { FormatMinutes }