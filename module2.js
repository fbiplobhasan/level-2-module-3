// Video (1)
// 01
// const obj = {
//     nextLevel: { courseId: "Level2" },
//     "Programming Hero": { courseId: "Level1" }
// };

// console.log(obj);
// console.log(obj"nextLevel");
// console.log(obj"Programming Hero");

// 02
// const obj = {
//     nextLevel: { courseId: "Level2" },
//     true: { courseId: "Level1" }
// };

// console.log(obj["true"]);

// 03
// const obj = {};
// obj.nextLevel = { courseId: "Level2" };
// obj[true] = { courseId: "Level1" };

// console.log(obj);

// 04
// const course1 = {name: "Programming Hero"};
// const course2 = {name: "Next Level Web Development"};

// const obj = {};

// obj[course2] = { courseId: "Level2" };
// obj[course1] = { courseId: "Level1" };

// console.log(obj["[object Object]"]);
// console.log(obj["[object Object]"]);

// 05
// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const map = new Map(courses);
// map.set(1, "Programming Hero");
// map.set(false, "Programming Hero");
// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });
// map.clear();
// map.size();
// map.delete();
// map.has();
// map.forEach((value, key) => console.log("key", key, "value", value))
// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name))
// console.log(map.keys());
// console.log([...map.keys()]);
// console.log(map.values());

// for (let key of map.keys()) {
//    (key.name = "Shohoz Shorol Simple " + key.name)
// }

// console.log(map);

// 06
// const courses = [
//     ["Programming Hero", "Level1"],
//     ["Next Level Web Development", "Level2"]
// ]

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const courses = [
//     [course1, "Level1"],
//     [course2, "Level2"]
// ]

// const map = new Map(courses);

// console.log(map);
