$(function(){
    //이벤트 처리 메소드
    //-on('이벤트 타입', 이벤트 핸들러(콜백함수) {}
    //*이벤트 타입 : click, keyup, change..
    //*이벤트 핸들러 : 이벤트 발생 시, 실행될 함수

    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })

    //this : 현재 속한 블록의 객체, 현재 선택 한 요소를 가리키는 키워드
    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink')
    })

    //mousetover : 마우스 올렸을 떄 메소드 
    $('#item3').on('mouseover', function() {
        $(this).css('color', 'green')
        $(this).css('backgound-color', 'green')
    })

    //mouseout :마우스 벗어날 떄 이벤트
    $('#item3').on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('backgound-color', 'blue')
    })

        //메서드 체인 : 연결해서 사용함
        //하나의 jquery객체에 여러 메서드를 연결하는 기법
        $('#item4')
            .on('mouseover', function() {
                $(this).css('color', 'hotpink')
                $(this).css('backgound-color', 'green')
            })
            .on('mouseout', function() {
                $(this).css('color', 'cyan')
                $(this).css('backgound-color', 'blue')
            })

            $('#item5')
            .on('mouseover', function() {
                $(this).css('color', 'hotpink')
                $(this).css('backgound-color', 'cornflowerblue')
            })
            .on('mouseout', function() {
                $(this).css('color', 'white')
                $(this).css('backgound-color', 'white')
            })
            .on('click', function() {
                $(this).css('color', 'orange')
                $(this).css('backgound-color', 'blue')
            })
            .on('dblclick', function() {            
                $(this).css('color', 'red')   // 폰트색상
                $(this).css('backgound-color', 'black')
            })
})