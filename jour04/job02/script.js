function jsonValueKey(json,key)
{
    var value = JSON.parse(json);
    return value[key];

}

console.log(jsonValueKey('{"name":"La plateforme","adress":"8 rue d\'Hozier","city":"Marseille","nb_staff":"11","cration":"2019"}', "city"));
