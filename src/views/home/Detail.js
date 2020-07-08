import React from 'react'
import './Detail.css'
import { PageHeader } from 'antd'

export default function Detail (props) {
  let content = ''
  console.log(props.match.params.id)
  switch (Number(props.match.params.id)) {
    case 1:
      content = (
        <div className="detail-wrapper">
          <PageHeader className="site-page-header" title="es6-es10新增属性"/>
          <div className="content">
            <h3>es6 es2015</h3>
            <p>1.let & const</p>
            <p>2.解构赋值</p>
            <p>3.模板字符串</p>
            <p>4.函数默认参数,扩展运算符,箭头函数</p>
            <p>6.对象简洁写法</p>
            <p>7.symbol</p>
            <p>8.set map 数据结构</p>
            <p>9.Proxy</p>
            <p>10.Reflect</p>
            <p>11.Promise</p>
            <p>12.for...of Iterator</p>
            <p>13.Generator</p>
            <p>14.Class</p>
            <p>15.Module 模块</p>
            <br/>
            <h3>es7 es2016</h3>
            <p>1.求幂运算符（**）Math.pow</p>
            <p>2.Array.prototype.includes: 查找一个数值是否在数组中</p>
            <br/>
            <h3>es8 es2017</h3>
            <p>1.async、await</p>
            <p>2.Object.entries(), Object.values()</p>
            <p>3.字符串填充padStart()、padEnd()</p>
            <p>4.Object.getOwnPropertyDescriptors</p>
            <br/>
            <h3>es9 es2018</h3>
            <p>1.对象引入Rest(剩余)/Spread(展开)</p>
            <p>2.for-await-of</p>
            <p>3.Promise.prototype.finally()</p>
            <br/>
            <h3>es10 es2019</h3>
            <p>1.Array.flat() & Array.flatMap()</p>
            <p>2. 新增了String的trimStart()方法和trimEnd()方法, String.protype.matchAll()</p>
            <p>3.Object.fromEntries</p>
            <p>4.可选的 Catch 参数变量</p>
            <p>5.格式良好的 JSON.stringify()</p>
            <p>6.BigInt — 任意精度的整数</p>
            <p>7.import 动态引入</p>        
          </div>
        </div>
      )
      break
    case 2:
      content = (
        <div className="detail-wrapper">
          <PageHeader className="site-page-header" title="js知识整理"/>
          <div className="content">
          1.javascript区分大小写,html不区分<br/>
2.javascript会忽略空格和换行符<br/>
3.javascript分号可选,会自动添加<br/>
4.javascript中的假值:undefined, null, 0, -0, NaN, ""<br/>
5.null代表"空值", typeof null === "object", 实质是一个空对象的引用<br/>
6.undefined代表变量没有初始化,null == undefined<br/>
7.包装对象:<br/>
	字符串,数字,布尔值在创建直接量是,调用其对象的方法会被转换成包装对象: new String(value) new Number(value) new Boolean(value),随后会被销毁<br/>
8.javascript只有全局作用域和函数作用域<br/>
9.变量提升是在javascript引擎的预编译阶段进行的,是在代码开始运行之前<br/>
10.var 声明的变量无法使用delete删除,不适用var 声明的变量可以使用delete删除<br/>
11.表达式是javascript中的一个短语,javascript解释器会将其计算出一个结果<br/>
12.this是关键字,不是变量,如果需要使用可以通过暂存,var self = this<br/>
13.基本类型,引用类型,函数传参为传值<br/>
14.执行环境(作用域): js执行环境(作用域)有两种:全局执行环境(作用域),函数执行环境(作用域)
	高级程序设计第三版第四章<br/>
15.js垃圾收集机制: 标记清除,引用计数
	高级程序设计第三版第四章<br/>
16.闭包储存的是外部变量的引用而不是值
	effective javascript 第二章第十三条
	立即调用函数可以强制创建一个局部作用域<br/>
17.每个函数在被调用时都会自动取得两个特殊变量： this 和 arguments<br/>
18.this的指向:
	this值在进入上下文时确定，并且在上下文运行期间永久不变
		(1).this 是在运行时(运行时所在的作用域)进行绑定的， 并不是在编写时绑定， 它的上下文取决于函数调用时的各种条件。 this 的绑定和函数声明的位置没有任何关系， 只取决于函数的调用方式
		(2).this 既不指向函数自身也不指向函数的词法作用域
		(3).不能使用 this 来引用一个词法作用域内部的东西
	
	this绑定的四条规则:
		(1).默认绑定(非严格模式): 独立函数(不带任何修饰的函数调用)调用时 this 指向全局对象.(严格模式下为undefined)
		(2).隐式绑定: 调用位置有上下文对象, 当函数引用有上下文对象时， 隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象, 对象属性引用链中只有最顶层或者说最后一层会影响调用位置
		(3).显式绑定: 
			1).硬绑定: apply, call. 硬绑定后不可能再修改它的 this
			2).API调用的“上下文”
   
	setTimeout中this的指向:
	 (1).setTimeout中的延迟执行代码中的this永远都指向window
	 (2).setTimeout(this.method, time)这种形式中的this，即上文中提到的第一个this，是根据上下文来判断的，默认为全局作用域，但不一定总是处于全局下，具体问题具体分析。
	 (3).setTimeout(匿名函数, time)这种形式下，匿名函数中的变量也需要根据上下文来判断，具体问题具体分析。
	 
	原型链中的 this: this指向的是调用这个方法的对象，就像该方法在对象上一样
	
	getter 与 setter 中的 this: 用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。
	
	作为构造函数: this被绑定到正在构造的新对象
	
	作为一个DOM事件处理函数: 当函数被用作事件处理函数时，它的this指向触发事件的元素（一些浏览器在使用非addEventListener的函数动态添加监听函数时不遵守这个约定）。
	
	箭头函数中的this: https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0<br/>
	
19.对象的属性(property)的特性(attribute): 这些特性是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了表示特性是内部值，该规范把它们放在了两对儿方括号中，例如[[Enumerable]]。
	要修改属性默认的特性，必须使用 ECMAScript 5 的 Object.defineProperty()方法		
		
	ECMAScript 中有两种属性：数据属性和访问器属性。
	(1). 数据属性: 数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有 4 个描述其行为的特性。
		1). [[Configurable]]: 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为 true
		2).[[Enumerable]]: 表示能否通过 for-in 循环返回属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为 true。
		3).[[Writable]]: 表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为 true。
		4).[[Value]]: 包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性的默认值为 undefined。
	
	(2). 访问器属性:访问器属性不包含数据值；它们包含一对儿 getter 和 setter 函数（不过，这两个函数都不是必需的）。在读取访问器属性时，会调用 getter 函数，这个函数负责返回有效的值；在写入访问器属性时，会调用setter 函数并传入新值，这个函数负责决定如何处理数据。访问器属性有如下 4 个特性。
		1).[[Configurable]]
		2).[[Writable]]
		3).[[Get]]：在读取属性时调用的函数。默认值为 undefined。
		4).[[Set]]：在写入属性时调用的函数。默认值为 undefined。
	!!访问器属性不能直接定义，必须使用 Object.defineProperty()来定义。<br/>
	
20.原型(prototype): 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype属性，这个属性指向函数的原型对象。prototype是存放继承特性的地方.
	每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
	
	所有引用类型默认都继承了 Object
	所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype。
	
	JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ 		) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。
	
	typeof: 检测数据类型,在检测引用类型时并不准确,推荐instanceof
	
  instanceof:是一个运算符,检测构造函数和实例对象的关系,
		instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。根据规定，所有引用类型的值都是 Object 的实例。因此，在检测一个引用类型值和 Object 构造函数			时， instanceof 操作符始终会返回 true。当然，如果使用 instanceof 操作符检测基本类型的值，则该操作符始终会返回 false，因为基本类型不是对象。
	isPrototypeOf: 是一个对象的方法一般用于检测对象与对象的继承关系
		isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。<br/>
		
21. new 
	new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：
		创建一个空的简单JavaScript对象（即{}；	let o = new Object()
		链接该对象（即设置该对象的构造函数）到另一个对象； o.__proto__ = Fn.prototype
		将步骤1新创建的对象作为this的上下文；	let no = Fn.call(o)
		如果该函数没有返回对象，则返回this。 return no<br/>
		
22. for of  for in 区别:
	for in: 遍历所有可枚举的属性(enumerable: true), 会遍历原型链(__proto__),所以可以遍历到继承的属性
	for of: 遍历含有迭代器(iterator)的对象的属性
	for in 适合对象,for of 适合数组,对象没有迭代器, 数组,字符串有
	内置对象的默认方法,例如:Arrary.prototype.push, Object.prototype.toString, String.prototype.substr 默认enumerable为false, 不可枚举,不会被for in 遍历到<br/>
    
23.防抖(debounce), 节流(throttle) https://www.jianshu.com/p/c8b86b09daf0
          </div>
        </div>
      )
      break
    case 3:
        content = (
          <div className="detail-wrapper">
            <PageHeader className="site-page-header" title="面试问题整理"/>
            <div className="content">
            1.跨域: https://segmentfault.com/a/1190000011145364 (JSONP, Hash, postMessage, WebSocket, CORS(fetch)) <br/>
            2.前端性能优化: https://segmentfault.com/n/1330000021775905 <br/>
3.javascript模块化: https://segmentfault.com/n/1330000021794488 <br/>
4.圣杯布局: https://segmentfault.com/a/1190000021796193 <br/>
5.前后端通信方式: https://www.cnblogs.com/YeHuan/p/11335271.html   https://blog.csdn.net/BBmonster/article/details/81333632 <br/>
6.前端安全: CSRF(跨站请求伪造), XSS(跨域脚本攻击) https://www.cnblogs.com/zhiying/p/11018331.html <br/>
7.doctype:
	DTD: document type definition 文档类型定义,是一系列的语法规则,用来定义XML或(X)HTML的文件类型.浏览器会使用它来判断文档类型,决定使用何种协议来解析,以及切换浏览器模式.
	doctype是用来声明文档和DTD规范的,一个主要的用途便是文件的合法性验证.如果文件代码不合法,那么浏览器解析时便会出错.
	HTML5 <br/>
8.浏览器渲染过程: https://segmentfault.com/a/1190000010298038 <br/>
9.js运行机制,EventLoop <br/>
10.前端错误监控:
	及时运行的错误: try...catch, window.onerror
	资源加载错误:object.onerror,performance.getEntries(),Error事件捕获
	
	错误上报:
		ajax上报,image.src上报 <br/>
11.userAgent 用户代理:
	判断浏览器类型,采用兼容方案
	判断是否移动端
	标识H5容器,方便调用H5容器特定接口
	要注意userAgent伪装成本很低,不要过于依赖 <br/>

                    
            </div>
          </div>           
        )
      break
    case 4:
      content = (
        <div className="detail-wrapper">
          <PageHeader className="site-page-header" title="面试问题整理"/>
          <div className="content">

// 不同域前后端通信 <br/>
jsonp<br/>
cors<br/>
http-proxy<br/>
nginx<br/>
websocket<br/>

// 不同域页面之间通信<br/>
postMessage<br/>
document.domain<br/>
window.name<br/>
localhost.hash   <br/>         
          </div>
        </div>        
      )
      break
    case 5:
      content = (
        <div className="detail-wrapper">
          <PageHeader className="site-page-header" title="javascript模块化"/>
          <div className="content">
          1.闭包与命名空间
		每个js文件都是使用IIFE包裹的，各个js文件分别在不同的词法作用域中，相互隔离，最后通过闭包的方式暴露变量。每个闭包都是单独一个文件,
		每个文件仍然通过script标签的方式下载，标签的顺序就	是模块的依赖关系
		这样做的意义：
			各个js文件之间避免了变量重名干扰，并且最少的暴露变量，避免全局污染。
			模块外部不能轻易的修改闭包内部的变量，程序的稳定性增加。
			模块与外部的连接通过IIFE传参，语义化更好，清晰地知道有哪些依赖。
			
4.CommonJs
	Commonjs规范具有以下特点：
		原生Module对象，每个文件都是一个Module实例
		文件内通过require对象引入指定模块
		所有文件加载均是同步完成
		通过module关键字暴露内容
		每个模块加载一次之后就会被缓存
		模块编译本质上是沙箱编译
		由于使用了Node的api，只能在服务端环境上运行
	Commonjs优点在于：
		强大的查找模块功能，开发十分方便
		标准化的输入输出，非常统一
		每个文件引入自己的依赖，最终形成文件依赖树
		模块缓存机制，提高编译效率
		利用node实现文件同步读取
		依靠注入变量的沙箱编译实现模块化
		
5.AMD和RequireJS
	AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。
	所有依赖这个模块的语句，都定义在一个回调函数中，等到所有依赖加载完成之后（前置依赖），这个回调函数才会运行。
	RequireJs:
	RequireJs有两个最鲜明的特点：
		依赖前置：动态创建script引入依赖，在script标签的onload事件监听文件加载完毕；一个模块的回调函数必须得等到所有依赖都加载完毕之后，才可执行，类似Promise.all。
		配置文件：有一个main文件，配置不同模块的路径，以及shim不满足AMD规范的js文件。
	主要是以下优点：
		动态并行加载js，依赖前置，无需再考虑js加载顺序问题。
		核心还是注入变量的沙箱编译，解决模块化问题。
		规范化输入输出，使用起来方便。
		对于不满足AMD规范的文件可以很好地兼容。
		
6.CMD和SeaJs
	CMD规范（2011）具有以下特点：
		define定义模块，require加载模块，exports暴露变量。
		不同于AMD的依赖前置，CMD推崇依赖就近（需要的时候再加载）
		推崇api功能单一，一个模块干一件事。
		
	SeaJs核心特点：
		需要配置模块对应的url。
		入口文件执行之后，根据文件内的依赖关系整理出依赖树，然后通过插入script标签加载依赖。
		依赖加载完毕之后，执行根factory。
		在factory中遇到require，则去执行对应模块的factory，实现就近依赖。
		类似Commonjs，对所有模块进行缓存（模块的url就是id）。
		类似Commonjs，可以使用相对路径加载模块。
		可以向RequireJs一样前置依赖，但是推崇就近依赖。
		exports和return都可以暴露变量。		
		
7.ES6中的模块化
	ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
	CommonJS 模块输出的是值的拷贝(原始值的拷贝)，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
	ES6 输出值的引用
	ES6 静态编译，CommonJS 运行时加载            
          </div>        
        </div>
      )
      break
    case 6:
      content = (
        <div className="detail-wrapper">
          <PageHeader className="site-page-header" title="前端性能优化"/>
          <div className="content">
          前端性能优化: <br/>

资源合并与压缩:<br/>
  html压缩: html压缩就是压缩这些在文本文件中有意义,但是在html中不显示的字符,包括空格,制表符,换行符等,还有一些其他意义的字符,如html注释也可以被压缩.<br/>
    如何进行html压缩:<br/>
      1.使用在线工具压缩<br/>
      2.nodejs提供了html-minifier工具(在构建层压缩)<br/>
      3.后端模板引擎渲染压缩<br/>
  css压缩:无效代码删除,css语义合并.<br/>
    如何进行css压缩:<br/>
      1.在线网站<br/>
      2.html-minifier<br/>
      3.使用clean-css<br/>
  js压缩与混乱: 无效字符删除,删除注释,代码语义的缩短和优化,代码保护.<br/>
    如何进行js压缩与混乱:<br/>
      1.使用在线工具<br/>
      2.html-minifier<br/>
      3.使用uglifyjs对js进行压缩<br/>
  文件合并<br/>
    1. 在线合并<br/>
    2. webpack, fis3<br/>
  图片压缩:<br/>
    不同格式图片常用的业务场景:<br/>
      jpg有损压缩，压缩率高，不支持透明<br/>
      png支持透明，浏览器兼容好<br/>
      webp压缩程度更好，在ios webview有兼容性问题 <br/>
      svg矢量图，代码内嵌，相对较小，图片样式相对简单的场景<br/>
    CSS雪碧图:把你的网站上用到的一些图片整合到一张单独的图片中, 减少你的网站的HTTP请求数量.<br/>
    Image inline(base64): 将图片的内容内嵌到html当中, 减少你的网站的HTTP请求数量.<br/>
    矢量图: 使用SVG进行矢量图的绘制, 使用iconfont解决icon问题.<br/>
    在线压缩: tinypng<br/>
    
css,js加载与执行:<br/>
  css阻塞:<br/>
    1.css head中阻塞页面的渲染<br/>
    2.css阻塞js的执行<br/>
    3.css不阻塞外部脚本的加载<br/>
  js阻塞:<br/>
    1.直接引入的js阻塞页面的渲染<br/>
    2.js不阻塞资源的加载<br/>
    3.js顺序执行，阻塞后续js逻辑的执行<br/>
    异步加载js:<br/>
      1.动态加载<br/>
     2.defer:在HTML解析完后才会执行,如果是多个,按照加载的顺序依次执行.<br/>
     3.async:在加载完成后立即执行,如果是多个,执行顺序和加载顺序无关.<br/>
    
图片懒加载:<br/>
  图片进入可视区域后再加载资源<br/>
  
图片预加载:<br/>
  再使用之前加载<br/>
    1.使用image标签加载图片<br/>
    2.使用image对象加载图片<br/>
    3.使用XMLHTTPReuqest加载图片<br/>
    4.preload.js<br/>
    
浏览器重绘,回流<br/>
  回流: 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)当页面布局和几何属性改变时就需要回流<br/>
    触发页面重布局的属性:<br/>
      盒子模型相关属性:<br/>
        width height padding margin display border-width border min-height<br/>
      定位属性及浮动:<br/>
        top bottom left right position float clear<br/>
      改变节点内部文字结构:<br/>
        text-align overflow-y font-weight overflow font-family line-height vertival-align white-space font-size<br/>
  重绘: 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘<br/>
    触发重绘的属性:<br/>
      color border-style border-radius visibility text-decoration background background-image background-position background-repeat background-size outline-color outline outline-				style outline-width box-shadow<br/>
  回流必将引起重绘,而重绘不一定会引起回流<br/>
    避免重绘,回流的主要思想:<br/>
      1.避免使用导致重绘,回流的css属性<br/>
      2.将重绘,回流的影响范围限制在单独的图层内<br/>
      优化点:<br/>
        1. 用translate替代top改变<br/>
        2. 用opacity替代visibility<br/>
        3. 不要一条一条地修改 DOM 的样式，预先定义好 class，然后修改 DOM 的 className<br/>
        4. 把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改100次，然后再把它显示出来<br/>
        5. 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量<br/>
        6. 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局<br/>
        7. 动画实现的速度的选择<br/>
        8. 对于动画新建图层<br/>
        9. 启用 GPU 硬件加速<br/>
        
浏览器储存<br/>
  Cookie:<br/>
    因为HTTP请求无状态，所以需要cookie去维持客户端状态<br/>
    过期时间 expire<br/>
    cookie的生成方式<br/>
   1. http response header中的set-cookie<br/>
   2. js中可以通过document.cookie可以读写cookie<br/>
    仅仅作为浏览器存储（大小4KB左右，能力被localstorage替代）<br/>
    cookie中在相关域名下面 —— cdn的流量损耗<br/>
    httponly<br/>
  LocalStorage<br/>
    HTML5设计出来专门用于浏览器存储的<br/>
    大小为5M左右<br/>
    仅在客户端使用，不和服务端进行通信<br/>
    接口封装较好<br/>
    浏览器本地缓存方案<br/>
  SessionStorage<br/>
    会话级别的浏览器存储<br/>
    大小为5M左右<br/>
    仅在客户端使用，不和服务端进行通信<br/>
    接口封装较好<br/>
    对于表单信息的维护<br/>
  IndexedDB<br/>
    IndexedDB 是一种低级API，用于客户端存储大量结构化数据。该API使用索引来实现对该数据的高性能搜索。虽然 Web Storage 对于存储较少量的数据很有用，但对于存储更大量的结构化数据来					说，这种方法不太有用。IndexedDB提供了一个解决方案。<br/>
    为应用创建离线版本<br/>

  PWA<br/>
    PWA (Progressive Web Apps) 是一种 Web App 新模型，并不是具体指某一种前沿的技术或者某一个单一的知识点，我们从英文缩写来看就能看出来，这是一个渐进式的 Web App，是通过一系列新的 			Web 特性，配合优秀的 UI 交互设计，逐步的增强 Web App 的用户体验。<br/>
    可靠：在没有网络的环境中也能提供基本的页面访问，而不会出现“未连接到互联网”的页面。<br/>
    快速：针对网页渲染及网络数据访问有较好优化。<br/>
    融入（Engaging）：应用可以被增加到手机桌面，并且和普通应用一样有全屏、推送等特性。<br/>
  Service Worker<br/>
    Service Worker 是一个脚本，浏览器独立于当前网页，将其在后台运行,为实现一些不依赖页面或者用户交互的特性打开了一扇大门。在未来这些特性将包括推送消息,背景后台同步， 									geofencing（地理围栏定位），但它将推出的第一个首要特性，就是拦截和处理网络请求的能力，包括以编程方式来管理被缓存的响应。<br/>
    
浏览器缓存:<br/>
  Cache-Control(强缓存):<br/>
    max-age: 设置缓存最大时间,超过时间则请求网络,否则从缓存中获取资源,优先级高于Expires.<br/>
    s-max-age: 设置public(CDN)缓存最大时间,优先级高于max-age<br/>
    private: 私人缓存,客户端<br/>
    public: 公共缓存,CDN<br/>
    no-cache:	向浏览器发请求查询缓存是否过期<br/>
    no-store: 不进行缓存<br/>
  Expires(强缓存)(http1.0): 缓存过期时间,用来指定资源到期的时间点,是服务器端的具体时间点.告诉浏览器在过期时间前浏览器可以直接从缓存取数据,而无需再次请求.优先级低于max-age.<br/>
  Last-Modified/If-Modified-Since(协商缓存): 基于客户端和服务端协商的缓存机制.<br/>
  Etag/If-None-Match(协商缓存): 文件内容hash值.<br/>
  
服务端性能优化:<br/>
  构建层模板编译<br/>
  数据无关的prerender的方式<br/>
  服务端渲染ssr<br/>
  
CDN加速            <br/>
          </div>        
        </div>
      )
      break
    default:
      return
  }
  return content
}
