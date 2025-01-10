function countProperties(jsonObject) {
    const keys = Object.keys(jsonObject);

    return keys.length;
}

const exampleObject = {
    name: "RAMA",
    age: 23,
    email: "RAMA@example.com",
    country: "Jordan"
};

const propertyCount = countProperties(exampleObject);

console.log("Number of properties:", propertyCount);
