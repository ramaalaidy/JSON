function calculateAverage(jsonObject, property) {
    const items = jsonObject.items;

    if (!items || items.length === 0) {
        return 0; 
    }

    const total = items.reduce((sum, item) => {
        return sum + (item[property] || 0);
    }, 0);

    return total / items.length;
}

const students = {
    items: [
        { name: "Ali", grade: 85 },
        { name: "Sara", grade: 92 },
        { name: "John", grade: 78 },
        { name: "Lina", grade: 88 }
    ]
};

// استدعاء الدالة لحساب متوسط الدرجات
const averageGrade = calculateAverage(students, "grade");

// طباعة متوسط الدرجات
console.log("Average Grade:", averageGrade);
