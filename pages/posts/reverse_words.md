---
title: Reverse words
date: 2024-04-25
updated: 2024-04-25
categories: 算法题
tags:
  - C++
  - 算法
top: 1
comment: false	# 打开评论
---


### 题目
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.  [题目链接](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

Example：
```C++
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```

### 优秀算法
运用std::string库中的"+"特性将句子倒转。
```C++
std::string reverse_words(std::string str)
{
    std::string out;
    std::string cword;
    for (char c : str) {
        if (c == ' ') {
            out += cword;
            out += c;
            cword = "";
            continue;
        }
        cword = c + cword;
    }
    out += cword;
    return out;
}
```