---
title: Essential C++ chapter 01 学习
date: 2024-03-02
categories: C++ learning
tags:
  - Essential C++
  - 编程语言学习
top: 1
comment: true	# 打开评论
---

### 仅仅用作个人学习记录！！
- - -

#### 递增运算符(++)和递减运算符(--)：
  - 前置（prefix）形式：原值先递增（或递减）之后，才被拿来使用。
  - 后置（postfix）形式：对象原值会先供给表达式进行运算，然后才递增（或递减）。


#### 逻辑运算符：
  - OR逻辑运算符(||)：对于运算符两边的表达式，左侧表达式会先被评估，如果其值为true，剩下的表达式就不需要再被评估（骤死式评估法）。
  - AND逻辑运算符(&&)：同样，如果左侧表达式评估成false后，剩下的表达式不再被评估。

#### switch语句
```c++
switch (num_tries)
{
  case 1:
      std::cout << "Oops! Nice guess but not quitte it.\n";
      break;
  case 2:
      std::cout << "Hmm. Sorry. Wrong a second time.\n";
      break;
  case 3:
      std::cout << "AH, this is harder than it looks, isn't it?\n";
      break;
  default:
      std::cout << "It must be getting pretty frustrating by now!\n";
      break;
}
```

  - 关键词switch紧接着一个由小括号括住的表达式，该表达式的核定值必须式整数类型。
  - case后面是常量表达式，与switch的表达式值依次比较，直到吻合。
  - 如果找不到吻合者，有default则执行defaul，无则不执行任何操作。
  - 加上break原因：
    - 当某个case的表达式值吻合时，便开始执行该case标签之后的语句，一直贯彻到switch语句的最底端。

#### 指针
+ 指针内含某特定型别之对象的内存地址。
  ```c++
  int *pi; // pi是某个int型别的指针
  int *pv = &ival; // 将pv的初值设置成ival的内存地址
  ```
+ 提领操作：取得“位于该指针所指之内存地址上”的对象。在指针前使用 * 达到此目的。
  ```c++
  int *pv = &ival; //设置初值
  if ( *pv != 1024 ) //读取ival的值
      *pv = 1024; //写值至ival
  ```
+ dot成员选择运算符(.)作用于实体对象。要通过指针来选择操作行为，必须改用arrow成员选择运算符(->)。
  
#### 文件的读写
+ 三种模式：
  ```c++
  ofstream outfile("data.txt"); // 输出模式，原文件数据丢弃
  ofstream outfile("data.txt", ios_base::app); // 追加模式，新数据加到文件尾端
  ifstream outfile("data.txt"); //读取模式
  ```
+ cerr：表示标准错误输出设备，无缓冲情形，立即显示在用户的终端机上。
+ endl：插入换行符，并清空缓冲区。
+ seekg()将文件位置重新定位到文件的起始处。