// #!/usr/bin/env node 

"use strict";  

/**
 * @author Keisuke Ikeda
 * @version 1.0
 * @class
 * @classdesc サンプルクラス2
 * @returns this
 */
export class SampleClass2
{
    /**
     * コンストラクタ
     */
    constructor(instanceValue = 2)
    {
        // インスタンス変数
        this.instanceValue = instanceValue;
        return this;
    }

    /**
     * インスタンスメソッド
     */
    instanceMethod(){
        console.log("this is instanceMethod.") 
    }
}
 

// クラス変数
SampleClass2.classValue = 1;

// クラスメソッド
SampleClass2.classMethod = function(){ console.log("this is classMethod.") }