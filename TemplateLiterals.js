function sides(literals, ...expressions) {
    let a = expressions[0];
    let p = expressions[1];
    let s1 = (p + Math.sqrt(Math.pow(p, 2) - (16 * a))) / 4;
    let s2 = (p - Math.sqrt(Math.pow(p, 2) - (16 * a))) / 4;
    return [s1, s2].sort();
}