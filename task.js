// JSON parse()

let data = `{
    "name": "ankit",
    "age": 20,
    "place": "rewa",
    "is_student": true,
    "p_lang": ["c", "c++", "python"]
}`;
let obj = JSON.parse(data);
console.log(obj['name']);
console.log(obj['p_lang'][2]);

// JSON stringify 
let student={
    name:"ankit",
    age:25,
    city:"rewa"
}
let objdata=JSON.stringify(student)
console.log(objdata)