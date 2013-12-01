import gt = require("classes/Todo");
declare var count: any;

export class AppMain {
    public run() {

        
        count = 0;
        $('form').submit(function () {
            if ($('input').val() !== '') {
                var description = $('input').val();
                var todo = new gt.Todo(description, count++);
                todo.create();
            };
            $('input').val('');
            return false;
        });

        $('#clear').click(function () {
            $('table tr td input:checkbox').each(function () {
                if ($(this).is(':checked')) {
                    $(this).parent().parent().remove();
                }
            });
            $('#remaining').text("0 remaining");
        });

        $('table').change( 
            function () {  
                var cnt = 0;          
                $('table tr td input:checkbox').each(function () {
                    if ($(this).is(':checked')) {
                        cnt++;
                    }
                });
                $('#remaining').text(cnt.toString() + " remaining");
            });
    }
}