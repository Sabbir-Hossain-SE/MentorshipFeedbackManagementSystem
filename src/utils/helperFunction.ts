export const generateRandomString = (length = 10) => {
    let randomString = "";
    const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const CHARACTERS_LENGTH = CHARACTERS.length;

    for (let i = 0; i < length; i += 1) {
        randomString += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH));
    }
    return randomString;
};
