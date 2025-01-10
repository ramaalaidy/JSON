const cities = {
    citiesList: [
        { name: "New York", population: 8419600, country: "USA" },
        { name: "Tokyo", population: 13929286, country: "Japan" },
        { name: "London", population: 8982000, country: "UK" },
        { name: "Paris", population: 2148327, country: "France" },
        { name: "Berlin", population: 3748148, country: "Germany" }
    ]
};

// دالة لترتيب المدن حسب عدد السكان
function sortCitiesByPopulation(jsonObject) {
    const citiesList = jsonObject.citiesList;

    // التحقق من وجود المصفوفة
    if (!citiesList || citiesList.length === 0) {
        return []; // إذا كانت المصفوفة فارغة أو غير موجودة، نعيد مصفوفة فارغة
    }

    // استخدام sort لترتيب المدن حسب عدد السكان بترتيب تنازلي
    citiesList.sort((a, b) => {
        return b.population - a.population; // ترتيب تنازلي بناءً على عدد السكان
    });

    // استخراج أسماء المدن بعد الترتيب
    const sortedCityNames = citiesList.map(city => city.name);

    // إرجاع أسماء المدن المرتبة
    return sortedCityNames;
}

// استدعاء الدالة للحصول على أسماء المدن المرتبة حسب عدد السكان
const sortedCityNames = sortCitiesByPopulation(cities);

// طباعة أسماء المدن المرتبة
console.log("Cities sorted by population:", sortedCityNames);
