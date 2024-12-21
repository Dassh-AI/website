// const
// open a like in a new tab on function call
export const openLink = (link: string, is_external: boolean=true) => {
    if (is_external) {
        window.open(link, "_blank");
    } else {
        window.open(link, "_self");
    }
};