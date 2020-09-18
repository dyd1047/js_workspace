        /* ------------------------------------------------------------------
        두 수 a, b에 대한 절대값을 반환하는 함수!
        ---------------------------------------------------------------------- */
        // 자주할 업무는 재사용을 위해 함수로 정의
        function getAbs(a, b){
            // 두 수를 대상으로 절대값을 구하는 식
            return Math.abs(a-b); // 함수를 호출한 실행부가 결과를 가지고
                                            // 호출한 곳으로 되돌아감
        }

        /* ------------------------------------------------------------------
        랜덤 구하는 함수!
        n을 넣으면, 0 ~ n까지 포함하여, 랜덤한 수를 반환하는 함수
        ---------------------------------------------------------------------- */
        function getRandom(n){
            var r = Math.random(); // 1보다 작은 실수 0.0xxxxx ~ 0.9xxxxx
            return Math.floor((n + 1) * r); // 소수점을 버린다.
        }

        /* ------------------------------------------------------------------
        숫자에 0을 붙인 날짜처리
        매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서 0을 붙여줌
        (두자리 한자리 판단마저도 여기에서 알아서 해줌)
        ---------------------------------------------------------------------- */
        function getZeroDate(n){
            if (n < 10) { // 숫자 n이 10을 넘으면 기존의 n은 그냥 쓰고
                n = "0" + n;
            }    
            return n;
        }

                /* ------------------------------------------------------------------
        랜덤 구하는 함수2
        ex) 7과 23 사이의 랜덤값을 변환
        ---------------------------------------------------------------------- */
        function getRandomBetween(min, max){
            // return Math.floor(Math.random() * (max - min + 1)) + min;
            return getRandom(max - min) + min;
        } 