async function f() {
    return 1;
}

let value = await f;
function waitTwoSecond () {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve ("hoàn thành trong 2s");
        }, 2000);
    })
}
async function printAfterTwoseconds () {
    console.log("Bắt đầu");
    const result = await waitTwoseconds();
    console.log(result);
}

printAfterTwoseconds();


{
    "room" {
        "teacher" [
            "co" {
                "name": "Kien"
                "gender": "male"
            },
            {
                "name": "Khanh"
                "gender": "male"
            },
        ]
    }
}

// GET: Trả về 1 resource hoặc 1 danh sách resource
// POST: Hỗ trợ tạo mới 1 resource
// PUT: Hỗ trợ cập nhật thông tin cho resource 
// DELETE: Xoá resoure

// API: Cơ chế cho phép 2 PM giao tiếp với nhau bằng 1 tập hợp các định nghĩa và giao thức
// fetch: Guiwr và nhận request trong js

const response = 
    fench('http://jsonplaceholder.typicode.com/todos/1');
const data = response.json();