

let y = 10;
if (y === 10) {
  let y = 20; 
  console.log(y); 
}
console.log(y);
const z = 10;
console.log(z);  
//if (z === 10) {
 // z = 20;
 // console.log(z);} 
var x = 10;
function number(a,b=5)
{   x += 10;
    return a * b
}
console.log(x); 
console.log(number(x));
console.log(number(x,8));
function member(name) {
    name = name || "Thanh";
    return "tôi tên là "+ name;
  }
  console.log(member());
  console.log(member("Lê Việt Thành")); 
const oldArray = [1, 2, 3];
const newArray1 = [oldArray, 4, 5];
const newArray2 = [...oldArray,4,5]
console.log(newArray1);
console.log(newArray2);
function numbers(num1, num2, ...numOther){
    console.log("x:", num1); 
    console.log("y:", num2);
    console.log("Other number:", numOther);
  }
  numbers("one", "two", "three", "four", "five", "six");

const [a, b] = oldArray;
console.log(a);
console.log(b); 
console.log(array); 
var members = (name, age) => {
    console.log(name, age);
}
members("lê việt thành", 19);
class Sinhvien {
    constructor(MaSV, Hoten, GiớiTính, NgaySinh, QueQuan) {
        this.MaSV = MaSV;
        this.Hoten = Hoten;
        this.GiớiTính = GiớiTính;
        this.NgaySinh = NgaySinh;
        this.QueQuan = QueQuan;
    }
}
