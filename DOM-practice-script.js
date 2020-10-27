// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6
var clickMe = document.querySelector('#q6-text');
clickMe.addEventListener('click',function(){
	this.style.color = 'blue';
})
// Q 7
var q7_text = document.getElementById('q7-text');
q7_text.addEventListener('mouseover',function(){
	this.style.backgroundColor = 'pink',
	this.style.color = 'orange';
})
// Q 8
var q8_text = document.querySelector('#q8-text');
q8_text.addEventListener('mouseover',function(){
	this.style.backgroundColor = 'navy',
	this.style.color = 'yellow';
})
q8_text.addEventListener('mouseleave',function(){
	this.style.backgroundColor = '';
	this.style.color = '';
})

// Q 9
function check(){
	var inputMsg = document.querySelector('#q9-input');
    var inputP = document.querySelector('#q9-result');
    

}


// Q 10


// Q 11
var q11_btn = document.querySelector('.q11-btn');
q11_btn.addEventListener('click',function(){
	// input名前の条件分岐
	let q11_input_name = document.querySelector('#q11-input-name');
	let q11_result_name = document.querySelector('#q11-result-name');
	console.log(q11_input_name);
	if(q11_input_name.value === ''){
		q11_result_name.style.color = 'red';
		q11_result_name.textContent = '名前が空欄です';
	}else{
		q11_result_name.style.color = '';
		q11_result_name.textContent = q11_input_name.value;
	}
	// input年齢の条件分岐
	let q11_input_age = document.querySelector('#q11-input-age');
	let q11_result_age = document.querySelector('#q11-result-age');
	if(q11_input_age.value < 20){
		q11_result_age.textContent = '20歳未満の方の利用は禁止です。'
	}else{
		q11_result_age.textContent = q11_input_age.value;
	}
})

// Q 12
var q12_btn = document.querySelector('.q12-btn');
q12_btn.addEventListener('click',function(){
	let parent = document.querySelector('.q12-result');
	let q12_result_child_p = document.createElement('p');
	q12_result_child_p.textContent = q12_btn.textContent;
	parent.appendChild(q12_result_child_p);
})

// Q 13
// 飛ばしていいです。
var q13_btn = document.querySelector('.q13-btn');
q13_btn.addEventListener('click',function(){
	let q13_box = document.querySelector('#q13-box');
	let q13_firstList = document.createElement('li');
	q13_firstList.textContent = 'リンゴ';
	q13_box.insertBefore(q13_firstList,q13_box.firstElementChild);
})

// Q 14
var q14_btn =document.querySelector('.q14-btn');
q14_btn.addEventListener('click',function(){
	let list_chicken = document.querySelector('#chicken');
	list_chicken.remove();
})

// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。
var q15_btn = document.querySelectorAll('.q15-btn');
console.log(q15_btn);

	 

