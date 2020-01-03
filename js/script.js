let calcTotal = 0;	// 現在の合計値
let calcInput = "";	// 現在入力している値
let calcCalculate = "+";	// 合計と入力値の演算子
let calcFlg = 1;	// １回前に入力したもの 0:数字 1:演算子

const calcValue = (calcData) => {	// 0～9または小数点ボタンを押した
  calcFlg = 0;	// １回前に入力したものは数値
  calcInput += calcData;	// 現在入力している値に追加
  document.calcForm.calcLine.value = calcInput;	// 現在入力している値表示
}	
 	
const calcCalc = (calcData) => {	// 演算ボタンを押した
  if (calcFlg==0){	// １回前に入力したものは数値か？
    calcFlg = 1;	// １回前に入力したものは演算子
    calcWork = calcTotal + calcCalculate + calcInput;	// 一連の計算式を作る
    calcTotal = eval(calcWork);	// 計算式を計算させる
    calcInput = "";	// 現在入力している値をクリア
    document.calcForm.calcLine.value = calcTotal;	// 合計を表示
  }	
  
  if (calcData == "="){	// 演算ボタンは[＝]か？
    calcTotal = 0;	// 合計をクリア
    calcCalculate = "+";	// 演算子を[+]とする
  }else{	// 演算ボタンは[＝]以外である
    calcCalculate = calcData;	// 演算子を退避させておく
  }	
}	
 	
const calcC = () => {	// クリアボタン[C]を押した
  calcTotal = 0;	// 合計クリア
  calcCalculate = "+";	// 演算子クリア
  calcInput = "";	// 現在入力している値をクリア
  document.calcForm.calcLine.value = calcTotal;	// つまり、０を表示
}