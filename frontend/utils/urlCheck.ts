export const urlCheck = (str: string, regex: RegExp) => {
    return regex.test(str);
}