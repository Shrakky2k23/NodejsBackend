function currentDate(){
    return new Date().toISOString();
}
function CurrentYear(){
    new Date().getFullYear();
}
module.exports = {
    currentDate,
    CurrentYear
};