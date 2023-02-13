/* Bài 1
Cho 1 mảng không rỗng , với các phần tử là các số tự nhiên ngẫu nhiên. Viết thuật toán
loại bỏ các số trùng trong mảng sao cho mảng kết quả thu được sau khi loại bỏ các số trùng thỏa mãn
các điều kiện sau:
1. Bao gồm các số tự nhiên không trùng và săp xếp theo thứ tự tăng dần từ vị trí phần từ đầu tiên
của mảng.
2. Đảm bảo số lượng phần tả ở mảng mới bằng số lượng phần tử của mảng ban đầu và các ký tự
loại bỏ do trùng sẽ thay thế bằng các ký tự “*”

 */

let array = [4, 5, 1, 0, 0, 1, 1, 1, 2, 2, 3, 3]; // khai báo 1 mảng bất kỳ

const newArray = array
  .filter((item, index) => array.indexOf(item) === index)
  .sort(); // sư dung filter để lấy ra các phần tử trong mảng và các phần tử là không trùng nhau => dùng sort() để sắp xếp các phần tử theo thứ tự tăng dần

const NumberDuplicates = array.reduce(function (acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) {
    acc.push(el);
  }
  return acc;
}, []);

for (const item of NumberDuplicates) {
  newArray.push("*");
}
// su dụng for lặp qua mảng chứa các phàn tử đã xuát hiện nhiều hơn 1 lần và push (*) vào

console.log(newArray);

/* Bài 2 : Cho 1 mảng số tự nhiên ngẫu nhiên không rỗng, trong đó các số xuất hiện nhiều lần trừ
 1 số duy nhật xuất hiện 1 lần. Viết thuật toán để hiển thị số duy nhất trong mảng cho trước. 
*/

//Sử dụng 2 vòng lặp for để xem value đó tồn tại hay không, tồn tại thì trả về value, không trả về -1

function findSingle(A, ar_size) {
  for (let i = 0; i < ar_size; i++) {
    let count = 0;
    for (let j = 0; j < ar_size; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count == 1) {
      return A[i];
    }
  }
  return -1;
}

let arr = [2, 3, 5, 4, 5, 3, 2];
let n = arr.length;
console.log(findSingle(arr, n));

/*  Bài 3 Cho một mảng số tự nhiên nêu thuật toán để lấy được tổng giá trị lớn nhất từ các giá trị tại các
 phần tử không liền nhau trong mảng cho trước
*/

let arrayy = [2, 7, 9, 3, 1];
let sumNumberOdd = 0;
let sumNumberEven = 0;
// sử dụng vong lặp với điều kiện tìm ra các số chẵn và số lẻ rồi tính tổng của chúng
for (let index = 0; index < arrayy.length; index++) {
  if (index % 2 === 0) {
    sumNumberEven = sumNumberEven + arrayy[index];
  } else {
    sumNumberOdd = sumNumberOdd + arrayy[index];
  }
}
console.log(Math.max(sumNumberEven, sumNumberOdd));

/* Bài 4
  Cho 1 mảng số nums nêu thuật toán trả lại mảng gồm các phần tử là tất cả các bộ ba giá trị
 nums[i],nums[j], nums[k] sao cho i != j, i != k, j != k và tổng and nums[i] + nums[j] + nums[k] = 0.
 Điều kiện
 • Số lượng phần từ từ 3 – 3000
 • Giá trị mỗi phần tử từ -105 đến 105
*/

const threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] == nums[j + 1]) j++;
        while (nums[k] == nums[k - 1]) k--;
        k--;
        j++;
      }
    }
  }

  return result;
};
