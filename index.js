
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}


let max = 10000;  // 1만
let min = 0;
let scalarMax = 10;
let start = max / 2;
let targetPercent = 15;
let leverage = 3; //레버리지
let dayCnt = 0;
// let target = start + start/100*targetPercent;
// let current start;
let current = 5506;
// let target = current + current/100*targetPercent;
let target = 7000;

console.log('target', target);
// console.log(getRandomIntInclusive(0,scalar));
let cnt = 0;
let checkCnt = -1;
let liquidationPercent = 100 / leverage // 청산가 (%)
let liquidation = current - (current * liquidationPercent / 100);

console.log('liquidation', liquidation);
// setTimeout(scalarTimer,3000);
// setTimeout(test,3000);
// setTimeout(sleep,10000,'fuck');

let isPayFee = false;
const scalarTimer = setInterval(function () {
	if (dayCnt <= 0) {
		console.log('더이상 게임을 진행할 수 없습니다');
		clearInterval(scalarTimer);
		return;
	}
	if (!isPayFee) {
		isPayFee = true;
		let feePercent = 0.1;
		console.log('fee before current', current);
		current = current - (current * feePercent / 100);
		current = Math.ceil(current);
		console.log('fee after current', current);
	}
	dayCnt--;
	cnt++;
	current += getRandomIntInclusive(-scalarMax * leverage, scalarMax * leverage)
	if (current <= liquidation) {
		console.log('current', current, '청산되었습니다');
		clearInterval(scalarTimer);
		return;
	}
	// if(current < start){
	// 	checkCnt++;
	// 	// console.log('checkCnt',checkCnt,'checkCnt % 10',checkCnt % 10)
	// 	if((checkCnt % 100) >98)
	// 	{
	// 		// console.log('in')
	// 		checkCnt=0;
	// 		target = current + current/100*targetPercent;
	// 	}
	// }
	console.log('dayCnt', dayCnt, 'current', current, 'target', target, 'liquidation', liquidation);
	if (current >= target) {
		console.log('----------------------------------clear----------------------------------');
		console.log('cnt', cnt, 'result', current - start);
		clearInterval(scalarTimer);
	}
}, 10);
// setTimeout(test,3000);
