package src;

/**
 * 
 * @author Keisuke Ikeda
 * @version 1.0
 */
public class SampleClass extends Object
{
	/**
	 * クラス変数
	 */
	static Integer classValue = 1;

	/**
	 * インスタンス変数
	 */
	public Integer instanceValue = 2;

	/**
	 * コンストラクタ
	 */
	public SampleClass(Integer arguments){
		this.instanceValue = arguments;
	}

	/**
	 * クラスメソッド
	 */
	static public void classMethod()
	{
		System.out.println("this is classMethod.");
		return;
	}
	
	/**
	 * インスタンスメソッド
	 */
	public void instanceMethod()
	{
		System.out.println("this is classMethod.");
		return;
	}
}
