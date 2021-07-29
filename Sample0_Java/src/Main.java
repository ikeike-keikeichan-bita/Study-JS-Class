package src;

/**
 * メインクラス
 * @author Keisuke Ikeda
 * @version 1.0
 */
public class Main extends Object
{
    /**
	 * 発展プログラミング演習 練習問題1-1のメインプログラム
	 * @param arguments 引数の文字列の配列
	 */
	public static void main(String[] arguments)
    {
        SampleClass aSampleClass = new SampleClass(5);

		System.out.println("------------------------------");

		System.out.println("classValue is " + SampleClass.classValue);
		System.out.println("instanceValue is " + aSampleClass.instanceValue);

		System.out.println("------------------------------");

		SampleClass.classMethod();
		aSampleClass.instanceMethod();

		System.out.println("------------------------------");

	}
}
