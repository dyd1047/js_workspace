// 흑인을 정의한다.
// 상속 : BlackPerson 클래스는 Person 클래스의 코드까지 사용할 수 있도록 확장하겠다.
class BlackPerson extends Person{
    constructor(){
        // 부모의 탄생이 최우선시 된다.
        super(); // 부모의 constructor()
        // 부모 생성자 호출 이유? 생물학적으로도 당연하다, 자식의 초기화보다 최우선시 해야하는
        // 작업은 부모의 존재 즉 초기화 이므로...
        // 상태는 변수로 표현한다. 즉 속성(property)
        this.color = "black";
        console.log("I am sub class(BlackPerson)");
    }
}