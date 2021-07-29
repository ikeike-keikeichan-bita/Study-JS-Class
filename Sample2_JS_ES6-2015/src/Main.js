// #!/usr/bin/env node 

"use strict"; 

import { SampleClass1 } from './SampleClass1'
import { SampleClass2 } from './SampleClass2'

/**
 * Sample1のメインプログラム
 * @author Keisuke Ikeda
 * @version 1.0
 */
function main()
{
	const aSampleClass1 = new SampleClass1()
	const aSampleClass2 = new SampleClass2(5)

	console.log('')
	console.log("-SampleClass1-----------------")
	console.log("-value------------------------");
	
	console.log("classValue is " + SampleClass1.classValue)
	console.log("instanceValue is " + aSampleClass1.instanceValue)

	console.log("-method-----------------------")

	SampleClass1.classMethod();
	aSampleClass1.instanceMethod();

	console.log('')
	console.log("-SampleClass2-----------------")
	console.log("-value------------------------");

	console.log("classValue is " + SampleClass2.classValue)
	console.log("instanceValue is " + aSampleClass2.instanceValue)

	console.log("-method-----------------------")

	SampleClass2.classMethod()
	aSampleClass2.instanceMethod()

	console.log('')

	return null;
}

main()
