import add, { print, number } from './10-3. module1'
print(add(1,2))
print(number)

// 전부 export로 내보내기 했다면 아래처럼 접근 가능
// import * as calculator from './10-3. module1'
// calculator.print(calculator.add(1,2))