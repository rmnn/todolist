define(["require", "exports"], function(require, exports) {
    var Todo = (function () {
        function Todo(description, id) {
            this.description = description;
            this.id = id;
        }
        Todo.prototype.create = function () {
            $("#table").find('tbody').prepend($('<tr>').attr('id', this.id.toString()).append($('<td>').text(this.description)).append($('<td>').append($('<input>').attr('type', 'checkbox'))));

            $('#' + this.id.toString() + ' td input:checkbox').change(function () {
                if ($(this).is(':checked')) {
                    var oldDesc = $(this).parent().parent().find('td:first').text();
                    $(this).parent().parent().find('td:first').text("");
                    $(this).parent().parent().find('td:first').append($('<s>').text(oldDesc));
                } else {
                    var oldDesc = $(this).parent().parent().find('td:first s').text();
                    $(this).parent().parent().find('td:first s').remove();
                    $(this).parent().parent().find('td:first').text(oldDesc);
                }
            });
        };
        return Todo;
    })();
    exports.Todo = Todo;
});
//# sourceMappingURL=Todo.js.map
