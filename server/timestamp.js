export default function (start, end) {
    const miliDifferent = Math.abs(start - end) / 1000
    const minutes = (miliDifferent / 60 % 60).toFixed(2)
}