function sortByProperty(jsonObject, property) {
    
    const items = jsonObject.items;

    if (!items || items.length === 0) {
        return []; 
    }

    items.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1; 
        }
        if (a[property] > b[property]) {
            return 1; 
        }
        return 0; 
    });

    return items;
}

const students = {
    items: [
        { name: "Ali", grade: 85 },
        { name: "Sara", grade: 92 },
        { name: "John", grade: 78 },
        { name: "Lina", grade: 88 }
    ]
};

const sortedStudents = sortByProperty(students, "grade");

console.log("Sorted Students by Grade:", sortedStudents);
