//第一题 写一个函数 sumArray(arr)，接收一个数字数组，返回所有数字的和。
function sumArray(arr) {
    var sum = arr[0]
    for (let i=1;i<arr.length;i++) {
        sum = sum + arr[i]
    }
    return sum
}

//第二题 写一个函数 isEven(n)，接收一个整数，返回它是否是偶数（布尔值）。
function isEven(n) {
    return n % 2 === 0
}

//第三题 写一个函数 maxNumber(arr)，接收一个数字数组，返回最大值（不能使用 Math.max）。
function maxNumber(arr) {
    var max = arr[0]
    for (let i=1;i<arr.length;i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

//第四题 写一个函数 reverseString(str)，接收一个字符串，返回反转后的字符串（不能使用 reverse() 方法）。
function reverseString(str) {
    var reversed = ""
    for (let i=str.length-1;i>=0;i--) {
        reversed = reversed + str[i]
    }
    return reversed
}

//第五题 写一个函数 countLetters(str)，接收一个字符串，返回一个对象，统计每个字母出现的次数（忽略非字母字符，不区分大小写）。
function countLetters(str) {
    var obj = {}
    for (let i=0;i<str.length;i++) {
        let char = str[i].toLowerCase()
        if (char.match(/[a-z]/)) {
            if (!obj[char]) {
                obj[char] = 1
            } else {
                obj[char] ++
            }
        }
    }
    return obj
}

//第六题 写一个函数 uniqueSubstrings(str, n)，接收一个字符串 str 和整数 n，返回所有长度为 n 且不重复字符的子串（顺序按原字符串出现顺序，不能重复添加相同子串）。
/*
function uniqueSubstrings(str, n) {
    var result = []
    var seen = {}
    for (let i=0;i<=str.length - n;i++) {
        let sub = str.substr(i, n)
        let hasRepeat = false
        let charSet = {}
        for (let j=0;j<sub.length;j++) {
            if (charSet[sub[j]]) {
                hasRepeat = true
                break
            } else {
                charSet[sub[j]] = true
            }
        }
        if (!hasRepeat && !seen[sub]) {
            result.push(sub)
            seen[sub] = true
        }
    }
    return result
}
*/

function uniqueSubstrings(str, n) {
    if (str.length < n) return []

    var result = []
    var seen = {}
    var left = 0
    var windowChars = {}
    
    for (let right = 0;right<str.length;right++) {
        var currChar = str[right]
        while (windowChars[currChar]) {
            delete windowChars[str[left]]
            left++
        }
        windowChars[currChar] = true
        if (right - left + 1 === n) {
            var sub = str.substr(left, n)
            if (!seen[sub]) {
                result.push(sub)
                seen[sub] = true
            }
            delete windowChars[str[left]]
            left++
        }
    }
    return result
}

/*
第七题 写一个函数 deepClone(obj)，实现对象的深拷贝，支持：
基本类型
数组
普通对象（可能嵌套）
不考虑 Date、RegExp、函数等特殊情况（简化版）
*/

//第八题 写一个函数 getFileExtension(filename)，返回文件名的扩展名（不含点）。
function getFileExtension(filename) {
    //return filename.substring(filename.lastIndexOf(".") + 1)
    var result = ""
    var index = 0
    for (let i=filename.length;i>=0;i--) {
        if (filename[i] === ".") {
            index = i
            break
        }
    }
    return filename.substring(index + 1)
}

//第九题 写一个函数 removeDuplicates(arr)，接收一个数组，返回去重后的新数组（保持原顺序）。不能使用 Set。
function removeDuplicates(arr) {
    var seen = {}
    var result = []
    for (let i=0;i<arr.length;i++) {
        if (!(arr[i] in seen)) {
            seen[arr[i]] = true
            result.push(arr[i])
        }
    }
    return result
}

//第十题 写一个函数 chunkArray(arr, size)，将数组拆分成多个长度为 size 的子数组。
function chunkArray(arr, size) {
  const result = [];
  for (let i=0;i<arr.length;i+=size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}


//第十一题 写一个函数 isAnagram(str1, str2)，判断两个字符串是否为字母异位词（忽略大小写，只考虑字母）。
function isAnagram(str1, str2) {
    const clean = s => s.toLowerCase().match(/[a-z]/g) || []
    const arr1 = clean(str1)
    const arr2 = clean(str2)
    if (arr1.length !== arr2.length) return false;
    const seen = {}
    for (let ch of arr1) seen[ch] = (seen[ch] || 0) + 1
    for (let ch of arr2) {
        if (!seen[ch]) return false
        seen[ch]--
    }
    return true
}

//第十二题 写一个函数 findMissingNumber(arr)，接收一个包含 1 到 n 之间不重复数字的数组，但缺失一个数，找出缺失的那个数。不能使用排序。
