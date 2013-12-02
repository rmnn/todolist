define(["require", "exports", "classes/Todo"], function(require, exports, __gt__) {
    var gt = __gt__;

    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.prototype.run = function () {
            count = 0;
            $('form').submit(function () {
                if ($('input').val() !== '') {
                    var description = $('input').val();
                    var todo = new gt.Todo(description, count++);
                    todo.create();
                }
                ;
                $('input').val('');
                return false;
            });

            $('#clear').click(function () {
                $('table tr td input:checkbox').each(function () {
                    if ($(this).is(':checked')) {
                        $(this).parent().parent().remove();
                        var all = $('input:checkbox:not(:checked)').length;
                        $('#remaining').text(all.toString() + " remaining");
                    }
                });
            });
        };
        return AppMain;
    })();
    exports.AppMain = AppMain;
});
//# sourceMappingURL=AppMain.js.map
