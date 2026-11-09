console.log("hello Programming hero");


const  multiplyValue =( value: number ,multiplier : number =2) :number => {
   
     return value * multiplier;
}
 console.log("Multiplication of two numbers is: " + multiplyValue(5,3));


const processInput = (value: number | string | boolean):number | string =>{
     switch( typeof value ){
        case "number" :
            return value * 10 ;

            case "string" : 
        return value.toUpperCase();
        case "boolean" : 
        return value ? "Active" : "Inactive";
        default : 
        return "Invalid Input";
        }
    
}

console.log("Process Input for number: " + processInput(5));
console.log("Process Input for string: " + processInput(" hello "));
console.log("Process Input for boolean: " + processInput(true));
console.log("Process Input for boolean: " + processInput(false));


const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const myLocation: readonly [number, number, string] = [23.81, 90.41, "Dhaka"];
console.log(formatCoordinate(myLocation)); 


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};

const stringResult = concatenateArrays(["a", "b"], ["c", "d"]);
console.log(stringResult); 
const numberResult = concatenateArrays([1, 2], [3, 4], [5]);
console.log(numberResult);

// ১. Course ইন্টারফেস ডিফাইন করা
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}


const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
};

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    
    return items.map(item => item[key]);
};
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name")); 
console.log(pluckValues(users, "id")); 


class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Salary: ${this.baseSalary}`;
  }
}


class Developer extends Employee {
  language: string;

  constructor(name: string, baseSalary: number, language: string) {
    super(name, baseSalary); 
    this.language = language;
  }
}

const employee1 = new Employee("Mir", 22000);
const dev1 = new Developer("Rahim", 35000, "TypeScript");


console.log(employee1 instanceof Employee);  
console.log(dev1 instanceof Developer);      
console.log(dev1 instanceof Employee);      

console.log(dev1.getDetails());    


const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};


async function testValidation() {
    try {
        console.log(await validateAgeAsync(20)); 
        console.log(await validateAgeAsync(15)); 
    } catch (error) {
        console.error(error); 
    }
}