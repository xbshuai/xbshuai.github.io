---
title: 傅里叶变换入门课程
date: 2024-10-29
updated: 2024-10-29
categories: 工科基础
tags:
  - 傅里叶变换
top: 1
comment: true	# 打开评论
---

### 仅仅用作个人学习记录！！
- - -

> 原视频地址：[傅里叶变换入门课程](https://www.bilibili.com/video/BV1oz1eYVECp/?share_source=copy_web&vd_source=7b25dd18b424561e69d80cfad61883ae)

### 线性代数前置内容
- 假设有一个三维空间$O-xyz$，空间中存在一点$P(3,4,5)$。
- 与坐标轴方向相同的三个基向量分别为 $\bf{i}, \bf{j}, \bf{k}$。
- $\overrightarrow{OP} = 3\bf{i} + 4\bf{j} + 5\bf{k} = 3(1,0,0) + 4(0,1,0) + 5(0,0,1) = (3,4,5)$。
- 以线性代数的方式表达：
  $$\overrightarrow{OP} = 3\bf{i} + 4\bf{j} + 5\bf{k} = 3\begin{bmatrix}1\\0\\0\end{bmatrix} + 4\begin{bmatrix}0\\1\\0\end{bmatrix} + 5\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}3\\4\\5\end{bmatrix}$$
- 在三维空间中，可以有多组基向量，要求基向量两两垂直，且长度归一化。
- 例如，选取一组新的基向量：$i' = \begin{bmatrix} \frac{2}{3} \\ \frac{2}{3} \\ \frac{1}{3} \end{bmatrix}, j' = \begin{bmatrix} \frac{\sqrt{5}}{5} \\ 0 \\ -\frac{2\sqrt{5}}{5} \end{bmatrix}, k' = \begin{bmatrix} \frac{4\sqrt{5}}{15} \\ -\frac{1\sqrt{5}}{3} \\ \frac{2\sqrt{5}}{15} \end{bmatrix}$
- 那么如何确定$\overrightarrow{OP}$在新向量下的坐标 $x'_p,  y'_p,  z'_p$
- 只需要将$\overrightarrow{OP}$投影到三个新的基向量中，投影的值就是在新的基向量下的坐标。