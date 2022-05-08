const settings = {
    secretkey: "agd15g6sa4gadfhjaidf",
    databaseName: "google.th"


}
const getSecetKey = () => {
    return settings.databaseName;
}

module.exports.getSecetKey = getSecetKey;
module.exports.secretkey = settings.secretkey;