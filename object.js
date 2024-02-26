// // var obj=
// // {
// //     day1:'monday',
// //     day2:'tuesday',
// //     day3:'wednesday',
// //     day4:'thursday',
// //     day5:'friday',
// //     day6:'saturday',
// //     day7:'sunday'
// // };
// //********** print all the values
// // let a=Object.values(obj);
// // console.log(a);// print all the values

// //********** print all the keys
// // let b=Object.keys(obj);
// // console.log(b);

// // //**********print all the key with values  it return array
// // let c=Object.entries(entriesobj);
// // console.log(c);

// //**********change particular value
// // let d=obj.day2="hassu";
// // console.log(d);//print all the key with values
// // console.log(Object.values(obj));

// // **********combine two object into a single object

// let obj1={
//     a:1,
//     b:2,
//     c:3
// }
// let obj2={
//     d:4,
//     e:5,
//     f:6
// }
// let obj3=Object.assign(obj1,obj2);
// console.log(obj3);//{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// //**********create new key:pair  value in existing object
// // let obj={
// //     a:1,
// //     b:'sunday'
// // }
// // let s=obj['c']="monday";
// // console.log(s);
// // console.log(Object.values(obj));

// //********* freeze na delete na update *******/
// // const obj1 = {
// //   a: 1,
// //   b: "sun",
// //   c: "2",
// // };
// // let d=Object.freeze(obj1);
// // console.log(d);
// // let f = (obj1.b = "non");
// // console.log(f);
// // // let s = Object.entries(obj1);
// // // console.log(s);

// // let a=delete obj1.b;
// // console.log(a);
// // console.log(obj1);

// //******* object.hasOwn *******/

// // const obj1 = {
// //   a: 1,
// //   b: "sun",
// //   c: "2",
// // };

// // let ss=Object.hasOwn(obj1,'c');
// // console.log(ss);
// // console.log(Object.hasOwn())

// //*****************method in object  */

// /*1.function in object called -> method.
// 2.object method ko direct call krte hain , console.log karege tuh tuh result ke sath undefine  ajaega   
// */

// // const Car={
// //   name:'tata tiago',
// //   color:'black',
// //   price:100,
// //   CarPropertites:function (){
// //     console.log(" here is tata car");
// //   }
// //  }
// // console.log(Car.CarPropertites());

// // const Car={
// //   name:'tata tiago',
// //   color:'black',
// //   price:100,
// //   CarPropertites:function (){
// //      console.log(` here is my new car : ${this.name}, ${this.name}`);// here is my new car : tata tiago, tata tiago
// //   }
// //  }
// // Car.CarPropertites();//here is my new car : tata tiago, tata tiago

// //console.log(Car.CarPropertites());//undefined
// //console.log(Car.CarPropertites);//[Function: CarPropertites]

// // const Car={
// //    name:'tata tiago',
// //    color:'black',
// //    price:100,
// //    CarPropertites:function (){
// //        console.log(` here is my new car : ${Car.name}, ${Car.name}`);// here is my new car : tata tiago, tata tiago
// //    }
// //   }
// //  Car.CarPropertites()

// //*********************** this in Object ******** */

// // let obj1={
// //   day1:'monday',
// //   day2:'tuesday',
// //   day3:'wednesday',
// //   allday:function()
// //   {
// //     console.log("today is :" + this.day1+ " and dayafter tomorrow is: "+this.day3);
// //  return "today is :" +this.day1 +" dayafter tomorrow is :" + this.day3

// //   }

// // }
// //obj1.allday();//today is :monday and dayafter tomorrow is: wednesday
// // let name=obj1.allday();
// // console.log(name);//today is :monday and dayafter tomorrow is: wednesday

// // const Car={
// //   name:'tata tiago',
// //   color:'black',
// //   price:100,
// //   CarPropertites:function (){
// //      console.log(` here is my new car : ${this.name}, ${this.name}`);
// //   }
// //  }

// //**********nested objects ***************

// // let object = {
// //   Company: {
// //     name: "GeeksforGeeks",
// //     location: "Noida",
// //     Domains: {
// //       Courses: [
// //         "DSA Self Paced Course",
// //         "Full Stack Development",
// //         "Devops Boot Camp",
// //         "GATE Prepration",
// //       ],
// //       Articles: [
// //         `Interview Prepration, Algorithms,
// //                Data Structures, Web Development`,
// //       ],
// //     },
// //   },
// // };

// // let aa=object.Company.Domains.Courses
// // console.log(aa);//[ 'DSA Self Paced Course','Full Stack Development','Devops Boot Camp' ]

// // let schoolRecord = {
// //   school1: {
// //     rollno: 1,
// //     name: "sunny",
// //     class: "12th",
// //     marks: "87%",
// //   },
// //   school2: {
// //     rollno: 2,
// //     class: "12th",
// //     name: "rajan",
// //     marks: "87%",
// //     totalstaff: {
// //       totalTeacher: 1323,
// //       helper: 21,
// //       totalclasses: {
// //         totalclassRoom: 3423,
// //         Toatalchildern: {
// //           totalgirls: 133,
// //           totalboys: 123,
// //         },
// //       },
// //     },
// //   },
// // };
// // let result=Object.keys(schoolRecord);
// // console.log(result);//[ 'school1', 'school2']
// // let result=schoolRecord.school2.totalstaff.totalTeacher
// // console.log(result);//1323




// // let schoolRecord = {
// //   school1: {
// //     rollno: 1,
// //     name: "sunny",
// //     class: "12th",
// //     marks: "87%",
// //   },
// //   school2: {
// //     rollno: 2,
// //     class: "12th",
// //     name: "rajan",
// //     marks: "87%",
// //     totalstaff: {
// //       totalTeacher: 1323,
// //       maleTeacher: 655,
// //       femaleTeacher: 784,
// //       helper: 21,
// //       totalclasses: {
// //         totalclassRoom: 3423,
// //         Toatalchildern: {
// //           totalgirls: 133,
// //           totalboys: 123,
// //           teacherReview: function () {
// //             console.log(
// //               `all teacher are sad : ${schoolRecord.school2.totalstaff.totalTeacher}\ntotal maleTeacher : ${schoolRecord.school2.totalstaff.totalTeacher}\nand total femaleTeacher : ${schoolRecord.school2.totalstaff.totalTeacher}`
// //             );
// //           },
// //         },
// //       },
// //     },
// //   },
// // };

// // let result=schoolRecord.school2.totalstaff.totalTeacher
// // console.log(result);//1323

// // let aa=schoolRecord.school2.totalstaff.totalclasses.Toatalchildern.totalgirls
// // console.log(aa);//133

// //schoolRecord.school2.totalstaff.totalclasses.Toatalchildern.teacherReview()//all teacher are sad : 1323 total maleTeacher : 1323 and total femaleTeacher : 1323


// //***************ArrayofObject */

// // let checkstatusoflibrary = [ 
// //    {
// //           title: 'Bill',
// //           author: 'Road ',
// //           Status:true
// //       },
// //     {
// //           title: 'Steve',
// //           author: 'Walter',
// //           Status: true
// //       },
// //       {
// //           title: 'Mockingjay',
// //           author: 'Suzanne ',
// //           Status: false
// //       }
// //    ]
   
   
//    // let spd=checkstatusoflibrary[0];
//    // console.log(spd);//{ title: 'Bill Gates', author: 'The Road Ahead', readingStatus: true }
//    // let ss=checkstatusoflibrary[0].title;
//    // console.log(ss);//Bill Gates


//    // for(let key in checkstatusoflibrary)
//    // {
//    //    console.log(checkstatusoflibrary[key]);//{ title: 'Bill', author: 'Road ', Status: true } { title: 'Steve', author: 'Walter', Status: true } { title: 'Mockingjay', author: 'Suzanne ', Status: false }
      
//    // }











