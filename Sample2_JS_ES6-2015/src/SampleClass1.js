// #!/usr/bin/env node 

"use strict";  

/**
 * @author Keisuke Ikeda
 * @version 1.0
 * @description サンプルクラス1
 * @returns this
 */
export function SampleClass1()
{
    // インスタンス変数
    this.instanceValue = 2;

    // インスタンスメソッド
    this.instanceMethod = function(){ console.log("this is classMethod.") }
 
    return this;
}

// クラス変数
SampleClass1.classValue = 1;

// クラスメソッド
SampleClass1.classMethod = function(){ console.log("this is classMethod.") }