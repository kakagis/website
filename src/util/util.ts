export function makeDate(date: number) {
    const d = new Date(date);

    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
}

export function postFileToId(file: string) {
    return file.split("/").reverse()[0]!.replace(/\.md$/, "");
}
