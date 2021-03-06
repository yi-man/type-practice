## 约定
A ≼ B 意味着 A 是 B 的子类型。
A → B 指的是以 A 为参数类型，以 B 为返回值类型的函数类型。
x : A 意味着 x 的类型为 A。

## 例子
首先我们假设 f 是一个以 Dog → Dog 为参数的函数。它的返回值并不重要，为了具体描述问题，我们假设函数结构体是这样的： f : (Dog → Dog) → String。

现在我想给函数 f 传入某个函数 g 来调用。我们来瞧瞧当 g 为以上四种类型时，会发生什么情况。

1. 我们假设 g : Greyhound → Greyhound， f(g) 的类型是否安全？

不安全，因为在f内调用它的参数(g)函数时，使用的参数可能是一个不同于灰狗但又是狗的子类型，例如 GermanShepherd （牧羊犬）。

2. 我们假设 g : Greyhound → Animal， f(g) 的类型是否安全？

不安全。理由同(1)。

3. 我们假设 g : Animal → Animal， f(g) 的类型是否安全？

不安全。因为 f 有可能在调用完参数之后，让返回值，也就是 Animal （动物）狗叫。并非所有动物都会狗叫。

4. 我们假设 g : Animal → Greyhound， f(g) 的类型是否安全？

是的，它的类型是安全的。首先，f 可能会以任何狗的品种来作为参数调用，而所有的狗都是动物。其次，它可能会假设结果是一条狗，而所有的灰狗都是狗。



## 协变
A ≼ B 就意味着 (T → A) ≼ (T → B) 

## 逆变
A ≼ B 就意味着 (B → T) ≼ (A → T)