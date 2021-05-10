/*
? ****************************************************************************************
     _____________   ______________________
    [_HEAP Memory_] [______Call Stack______]  _________________
    [             ] [          ↑           ] [______WebAPI_____]
    [             ] [1)console.log('Start')] [                 ]
    [     ■       ] [     setTimeout  →    ]→[   setTimeout  → ]→→→→→→→→→→→→→→
    [          ■  ] [          ↑           ] [                 ]             ↓
    [             ] [          ↑           ] [                 ]             ↓
    [  ■          ] [          ↑           ] [_________________]             ↓
    [             ] [          ↑           ]  _________________     _________↓_______
    [    ■        ] [          ↑           ] [_MicroTask Queue_]   [_MacroTask Queue_]
    [             ] [   Promise.resolve  → ]→[3)Promise.resolve]   [4) setTimeout    ]
    [             ] [          ↑           ] [                 ]   [                 ]
    [_____________] [2)_console.log('End')_] [_________________]   [_________________]
                          _____↑______               ↓                      ↓
                         [_Event Loop_]              ↓←←←←←←←←←←←←←←←←←←←←←←←
                         [_____⟳_____]←←←←←←←←←←←←←←←
!                       ~(Single Thread)~
? ****************************************************************************************

Order: 
    -Call Stack
    -MicroTask Queue
    -MacroTask Queue

Output: 
    1)-Start
    2)-End
    3)-Promise!
    4)-Timeout
*/

//1) Immediately Fired On The Call Stack
console.log('Start');

//4) Native within the browser -> goes to the WebAPI -> Then the MacroTask Queue
setTimeout(() => {
    console.log('Timeout');
}, 0);

//3) Added to Call Stack, resolved with 'Promise!', its .then() -> goes to the MicroTask Queue
Promise.resolve('Promise!')
    .then(res => console.log(res));

//2) Immediately Fired On The Call Stack, and the engine continues.
console.log('End');

//Using async/await
const one = () => Promise.resolve('One!');

const myFunc= async() => {
    console.log('In Function!');
    const res = await one();
    console.log(res);
};

console.log('Before function');
myFunc();
console.log('After function');

/*
Output:

    Before function
    In Function!
    After function
    One!

    -Before function - The engine sees the 'Before function' console.log, which gets added to the stack, then popped off.
    -In Function! - Then myFunc() is invoked, on the very first line of this function we log 'In Function!' 
    -When the function encounters 'await' it suspends what the function body is doing and moves it to the MicroTask Queue. Now that it is here, the engine will continue firing off other code.
    -After function - Invoked while the above promise is being resolved.
    -One! - The stack is empty and then the promise resolves and the function is added to the stack continuing where it had left off by logging the 'res' variable.

*/


//Synchronous

console.time('Sync');
[1,2,3,4].forEach((i) => {
    console.log('processing sync');
})
console.timeEnd('Sync');


//Asynchronous
const asyncForEach = (array, cb) => {
    console.time('Async')
    array.forEach(() =>{
        setTimeout(cb, 0);
    })
    console.timeEnd('Async');
};

asyncForEach([1,2,3,4], () =>{
    console.log('processing async');
});



